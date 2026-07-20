from flask import Blueprint, jsonify, request
from config import db
from sqlalchemy import text

admin_dashboard_bp = Blueprint('admin_dashboard_bp', __name__)

# ✅ Get all donors
@admin_dashboard_bp.route('/admin/donors', methods=['GET'])
def get_all_donors():
    with db.engine.connect() as connection:
        result = connection.execute(text("SELECT id, name, email, phone, is_verified, created_at FROM donors"))
        donors = [dict(row) for row in result.mappings()]
    return jsonify(donors), 200


# ✅ Get all orphanages
@admin_dashboard_bp.route('/admin/orphanages', methods=['GET'])
def get_all_orphanages():
    with db.engine.connect() as connection:
        result = connection.execute(text("SELECT id, name, email, phone, address, is_verified, created_at FROM orphanages"))
        orphanages = [dict(row) for row in result.mappings()]
    return jsonify(orphanages), 200


# ✅ Get all donations
@admin_dashboard_bp.route('/admin/donations', methods=['GET'])
def get_all_donations():
    with db.engine.connect() as connection:
        result = connection.execute(text("SELECT id, donor_id, donation_type, item_description, quantity, item_condition, prepared_time, hygiene_confirmed, status, created_at FROM donations"))
        donations = [dict(row) for row in result.mappings()]
    return jsonify(donations), 200


# ✅ Approve donation
@admin_dashboard_bp.route('/admin/donations/<int:donation_id>/approve', methods=['PUT'])
def approve_donation(donation_id):
    with db.engine.connect() as connection:
        connection.execute(text("UPDATE donations SET status = 'Approved' WHERE id = :id"), {'id': donation_id})
        connection.commit()
    return jsonify({"message": "Donation approved ✅"}), 200


# ✅ Reject donation
@admin_dashboard_bp.route('/admin/donations/<int:donation_id>/reject', methods=['PUT'])
def reject_donation(donation_id):
    with db.engine.connect() as connection:
        connection.execute(text("UPDATE donations SET status = 'Rejected' WHERE id = :id"), {'id': donation_id})
        connection.commit()
    return jsonify({"message": "Donation rejected ❌"}), 200

# ✅ Update event donation status (Approve / Reject)
@admin_dashboard_bp.route('/admin/update_event_status/<int:event_id>', methods=['PUT'])
def update_event_status(event_id):
    data = request.get_json()
    new_status = data.get('status')

    if new_status not in ['Approved', 'Rejected']:
        return jsonify({"error": "Invalid status"}), 400

    with db.engine.connect() as connection:
        connection.execute(text("UPDATE events SET status = :status WHERE id = :id"), {'status': new_status, 'id': event_id})
        connection.commit()

    return jsonify({"message": f"Event {event_id} status updated to {new_status}"})