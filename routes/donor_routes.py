from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash
from config import db
from sqlalchemy import text
from services.donation_service import create_donation
import random

donor_bp = Blueprint('donor_bp', __name__)

@donor_bp.route('/donor/register', methods=['GET', 'POST'])
def register_donor():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    phone = data.get('phone')
    password = data.get('password')
    aadhar_number = data.get('aadhar_number')

    if not all([name, email, phone, password, aadhar_number]):
        return jsonify({"error": "All fields required"}), 400

    with db.engine.connect() as connection:
        result = connection.execute(text("SELECT * FROM donors WHERE email = :email"), {'email': email})
        existing = result.fetchone()
        if existing:
            return jsonify({"error": "Email already registered"}), 409

        hashed_pw = generate_password_hash(password)
        otp = str(random.randint(100000, 999999))

        connection.execute(
            text("INSERT INTO donors (name, email, phone, password, aadhar_number, otp, is_verified) VALUES (:name, :email, :phone, :password, :aadhar_number, :otp, :is_verified)"),
            {'name': name, 'email': email, 'phone': phone, 'password': hashed_pw, 'aadhar_number': aadhar_number, 'otp': otp, 'is_verified': False}
        )
        connection.commit()

    return jsonify({"message": "Registered successfully. Verify OTP.", "otp": otp}), 201

@donor_bp.route('/donor/verify_otp', methods=['GET', 'POST'])
def verify_otp():
    data = request.get_json()
    email = data.get('email')
    otp_entered = data.get('otp')

    if not email or not otp_entered:
        return jsonify({"error": "Email and OTP are required"}), 400

    with db.engine.connect() as connection:
        result = connection.execute(text("SELECT otp FROM donors WHERE email = :email"), {'email': email})
        donor = result.fetchone()

        if not donor:
            return jsonify({"error": "Email not found"}), 404

        stored_otp = donor[0]

        if stored_otp == otp_entered:
            connection.execute(text("UPDATE donors SET is_verified = TRUE WHERE email = :email"), {'email': email})
            connection.commit()
            return jsonify({"message": "OTP verified successfully ✅"}), 200
        else:
            return jsonify({"error": "Invalid OTP ❌"}), 401
    
@donor_bp.route('/donor/add_donation', methods=['GET', 'POST'])
def add_donation():
    data = request.get_json()
    donor_email = data.get('email')
    donation_type = data.get('donation_type')
    quantity = data.get('quantity')
    description = data.get('description')
    quality_info = data.get('quality_info')
    location = data.get('location')

    if not all([donor_email, donation_type, location]):
        return jsonify({"error": "Email, donation type, and location are required"}), 400

    with db.engine.connect() as connection:
        result = connection.execute(text("SELECT * FROM donors WHERE email = :email AND is_verified = TRUE"), {'email': donor_email})
        donor = result.fetchone()
        if not donor:
            return jsonify({"error": "Donor not found or not verified"}), 404

        connection.execute(
            text("INSERT INTO donations (donor_email, donation_type, quantity, description, quality_info, location) VALUES (:donor_email, :donation_type, :quantity, :description, :quality_info, :location)"),
            {'donor_email': donor_email, 'donation_type': donation_type, 'quantity': quantity, 'description': description, 'quality_info': quality_info, 'location': location}
        )
        connection.commit()

    return jsonify({"message": "Donation added successfully ✅"}), 201