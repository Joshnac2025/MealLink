from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from config import db
from sqlalchemy import text
from services.donation_accept_service import accept_donation as accept_donation_service

orphanage_bp = Blueprint('orphanage_bp', __name__)

# ---------- Registration ----------
@orphanage_bp.route('/orphanage/register', methods=['POST'])
def register_orphanage():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    phone = data.get('phone')
    password = data.get('password')
    address = data.get('address')
    
    # Fixed validation to include phone
    if not all([name, email, phone, password, address]):
        return jsonify({"error": "All fields required"}), 400

    with db.engine.connect() as connection:
        result = connection.execute(text("SELECT * FROM orphanages WHERE email = :email"), {'email': email})
        existing = result.fetchone()
        if existing:
            return jsonify({"error": "Email already registered"}), 409

        hashed_pw = generate_password_hash(password)
        connection.execute(
            text("INSERT INTO orphanages (name, email, phone, password, address) VALUES (:name, :email, :phone, :password, :address)"),
            {'name': name, 'email': email, 'phone': phone, 'password': hashed_pw, 'address': address}
        )
        connection.commit()

    return jsonify({"message": "Orphanage registered successfully ✅"}), 201

@orphanage_bp.route('/orphanage/login', methods=['POST'])
def orphanage_login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({"error": "Email and password required"}), 400

    with db.engine.connect() as connection:
        result = connection.execute(text("SELECT password FROM orphanages WHERE email = :email"), {'email': email})
        orphanage = result.fetchone()

        if not orphanage:
            return jsonify({"error": "Email not found"}), 404

        stored_password = orphanage[0]

        if check_password_hash(stored_password, password):
            return jsonify({"message": "Login successful ✅"}), 200
        else:
            return jsonify({"error": "Incorrect password ❌"}), 401
    
@orphanage_bp.route('/orphanage/view_donations', methods=['GET'])
def view_donations():
    with db.engine.connect() as connection:
        result = connection.execute(text("SELECT id, donor_email, donation_type, quantity, description, quality_info, location, status FROM donations WHERE status = 'Submitted'"))
        donations = result.fetchall()

        if not donations:
            return jsonify({"message": "No pending donations available"}), 200

        donation_list = []
        for d in donations:
            donation_list.append({
                "id": d[0],
                "donor_email": d[1],
                "donation_type": d[2],
                "quantity": d[3],
                "description": d[4],
                "quality_info": d[5],
                "location": d[6],
                "status": d[7]
            })

    return jsonify({"donations": donation_list}), 200

@orphanage_bp.route('/orphanage/accept_donation', methods=['POST'])
def accept_donation(donation_id):

    print("=== ACCEPT ROUTE HIT ===")
    print("Donation ID:", donation_id)
    print("Request Data:", request.get_json())

    data = request.get_json()
    donation_id = data.get('donation_id')
    orphanage_email = data.get('orphanage_email')

    if not donation_id or not orphanage_email:
        return jsonify({"error": "Donation ID and orphanage email required"}), 400

    with db.engine.connect() as connection:
        # Check orphanage exists
        result = connection.execute(text("SELECT * FROM orphanages WHERE email = :email"), {'email': orphanage_email})
        orphanage = result.fetchone()
        if not orphanage:
            return jsonify({"error": "Orphanage not found"}), 404

        # Update donation status
        connection.execute(text("UPDATE donations SET status = 'Accepted' WHERE id = :id"), {'id': donation_id})
        connection.commit()

    return jsonify({"message": "Donation accepted successfully ✅"}), 200

@orphanage_bp.route('/donation/<int:donation_id>/accept', methods=['PUT'])
def accept_donation_route(donation_id):

    data = request.get_json()

    orphanage_id = data.get("orphanage_id")

    if not orphanage_id:
        return jsonify({
            "error": "orphanage_id is required"
        }), 400

    response, status = accept_donation_service(
        donation_id,
        orphanage_id
    )

    return jsonify(response), status
