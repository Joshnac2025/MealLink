from flask import Blueprint, request, jsonify
from werkzeug.security import check_password_hash
from config import db
from sqlalchemy import text

admin_bp = Blueprint('admin_bp', __name__)

# Existing overview route (keep it)
@admin_bp.route('/admin/overview', methods=['GET'])
def admin_overview():
    with db.engine.connect() as connection:
        donor_count = connection.execute(text("SELECT COUNT(*) FROM donors")).scalar()
        orphanage_count = connection.execute(text("SELECT COUNT(*) FROM orphanages")).scalar()
        donations_by_status = connection.execute(text("SELECT status, COUNT(*) FROM donations GROUP BY status")).fetchall()
        donation_summary = {status: count for status, count in donations_by_status}
    return jsonify({
        "total_donors": donor_count,
        "total_orphanages": orphanage_count,
        "donations_summary": donation_summary
    }), 200


# New route for admin login
@admin_bp.route('/admin/login', methods=['POST'])
def admin_login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify({"error": "Username and password required"}), 400

    with db.engine.connect() as connection:
        result = connection.execute(text("SELECT password FROM admins WHERE username = :username"), {'username': username})
        admin = result.fetchone()

        if not admin:
            return jsonify({"error": "Admin not found"}), 404

        stored_password = admin[0]
        if check_password_hash(stored_password, password):
            return jsonify({"message": "Admin login successful ✅"}), 200
        else:
            return jsonify({"error": "Invalid credentials ❌"}), 401