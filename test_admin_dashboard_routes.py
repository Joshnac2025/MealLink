from flask import Blueprint, jsonify, request
from config import mysql

admin_dashboard_bp = Blueprint('admin_dashboard_bp', __name__)

# ✅ Get all donors
@admin_dashboard_bp.route('/admin/donors', methods=['GET'])
def get_all_donors():
    cursor = mysql.connection.cursor()
    cursor.execute("SELECT id, name, email, phone, verified, created_at FROM donors")
    donors = cursor.fetchall()
    cursor.close()
    return jsonify(donors), 200


# ✅ Get all orphanages
@admin_dashboard_bp.route('/admin/orphanages', methods=['GET'])
def get_all_orphanages():
    cursor = mysql.connection.cursor()
    cursor.execute("SELECT id, name, email, location, verified, created_at FROM orphanages")
    orphanages = cursor.fetchall()
    cursor.close()
    return jsonify(orphanages), 200


# ✅ Get all donations
@admin_dashboard_bp.route('/admin/donations', methods=['GET'])
def get_all_donations():
    cursor = mysql.connection.cursor()
    cursor.execute("SELECT id, donor_email, donation_type, quantity, description, location, status, created_at FROM donations")
    donations = cursor.fetchall()
    cursor.close()
    return jsonify(donations), 200


# ✅ Approve donation
@admin_dashboard_bp.route('/admin/donations/<int:donation_id>/approve', methods=['PUT'])
def approve_donation(donation_id):
    cursor = mysql.connection.cursor()
    cursor.execute("UPDATE donations SET status = 'Approved' WHERE id = %s", (donation_id,))
    mysql.connection.commit()
    cursor.close()
    return jsonify({"message": "Donation approved ✅"}), 200


# ✅ Reject donation
@admin_dashboard_bp.route('/admin/donations/<int:donation_id>/reject', methods=['PUT'])
def reject_donation(donation_id):
    cursor = mysql.connection.cursor()
    cursor.execute("UPDATE donations SET status = 'Rejected' WHERE id = %s", (donation_id,))
    mysql.connection.commit()
    cursor.close()
    return jsonify({"message": "Donation rejected ❌"}), 200