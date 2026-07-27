from flask import Blueprint, request, jsonify, current_app
from config import db
from sqlalchemy import text

event_bp = Blueprint('event_bp', __name__)

@event_bp.route('/event_donation', methods=['POST'])
def add_event_donation():
    data = request.get_json() or {}

    current_app.logger.debug(f"Incoming JSON: {data}")

    donor_name = data.get('donor_name')
    donor_email = data.get('donor_email')
    orphanage_name = data.get('orphanage_name')
    event_date = data.get('event_date')
    meal_type = data.get('meal_type')
    message = data.get('message', '')
    terms_agreed = data.get('terms_agreed', False)

    # 🧩 Validate input
    if not all([donor_email, donor_name, orphanage_name, event_date, meal_type]) or not terms_agreed:
        current_app.logger.warning("⚠ Missing required fields.")
        return jsonify({"error": "Missing required fields"}), 400

    try:
        with db.engine.connect() as connection:
            # 🔍 Find orphanage ID from name
            result = connection.execute(text("SELECT id FROM orphanages WHERE name = :name"), {'name': orphanage_name})
            orphan = result.fetchone()
            if not orphan:
                return jsonify({"error": "Orphanage not found"}), 404

            orphanage_id = orphan[0]

            # 🥳 Insert event
            result = connection.execute(
                text("INSERT INTO events (donor_id, orphanage_id, event_name, event_date, event_time, description, photo_permission) VALUES (:donor_id, :orphanage_id, :event_name, :event_date, :event_time, :description, :photo_permission)"),
                {'donor_id': None, 'orphanage_id': orphanage_id, 'event_name': 'Celebration', 'event_date': event_date, 'event_time': '12:00:00', 'description': message, 'photo_permission': terms_agreed}
            )
            connection.commit()
            inserted_id = result.lastrowid

        return jsonify({"message": "🎉 Event donation created successfully!", "event_id": inserted_id}), 201

    except Exception as e:
        current_app.logger.exception("❌ Failed to create event donation")
        return jsonify({"error": "Server error", "details": str(e)}), 500

# ✅ Get all event donations
@event_bp.route('/event_donations', methods=['GET'])
def get_event_donations():
    try:
        with db.engine.connect() as connection:
            result = connection.execute(text("SELECT id, donor_id, orphanage_id, event_name, event_date, event_time, description, photo_permission, status, feedback, emotional_impact, created_at FROM events ORDER BY created_at DESC"))
            events = result.fetchall()

            # Format into list of dictionaries for readability
            event_list = []
            for e in events:
                event_list.append({
                    "id": e[0],
                    "donor_id": e[1],
                    "orphanage_id": e[2],
                    "event_name": e[3],
                    "event_date": e[4].strftime('%Y-%m-%d') if e[4] else None,
                    "event_time": str(e[5]),
                    "description": e[6],
                    "photo_permission": bool(e[7]),
                    "status": e[8],
                    "feedback": e[9],
                    "emotional_impact": e[10],
                    "created_at": e[11].strftime('%Y-%m-%d %H:%M:%S') if e[11] else None
                })

        return jsonify(event_list), 200

    except Exception as e:
        current_app.logger.exception("Failed to fetch event donations")
        return jsonify({"error": "Server error", "details": str(e)}), 500
    
# ✅ Admin approves or rejects an event
@event_bp.route('/admin/event_donations/<int:event_id>', methods=['PUT'])
def update_event_status(event_id):
    data = request.get_json()
    new_status = data.get('approval_status')

    if new_status not in ['Approved', 'Rejected']:
        return jsonify({"error": "Invalid status. Must be 'Approved' or 'Rejected'."}), 400

    try:
        with db.engine.connect() as connection:
            connection.execute(text("UPDATE events SET status = :status WHERE id = :id"), {'status': new_status, 'id': event_id})
            connection.commit()
        return jsonify({"message": f"Event {new_status.lower()} successfully!"}), 200
    except Exception as e:
        return jsonify({"error": "Server error", "details": str(e)}), 500

   # ✅ Get all pending event donations (for admin)
@event_bp.route('/admin/pending_event_donations', methods=['GET'])
def get_pending_event_donations():
    try:
        with db.engine.connect() as connection:
            result = connection.execute(text("SELECT id, donor_id, orphanage_id, event_name, event_date, event_time, description, photo_permission, status, feedback, emotional_impact, created_at FROM events WHERE status = 'Pending'"))
            data = result.fetchall()

            events = []
            for e in data:
                events.append({
                    "id": e[0],
                    "donor_id": e[1],
                    "orphanage_id": e[2],
                    "event_name": e[3],
                    "event_date": e[4],
                    "event_time": str(e[5]),
                    "description": e[6],
                    "photo_permission": bool(e[7]),
                    "status": e[8],
                    "feedback": e[9],
                    "emotional_impact": e[10],
                    "created_at": e[11]
                })

        return jsonify(events), 200

    except Exception as e:
        current_app.logger.exception("❌ Failed to fetch pending event donations")
        return jsonify({"error": "Server error", "details": str(e)}), 500
    
# ✅ GET all event donations (for admin dashboard)
@event_bp.route('/admin/event_donations', methods=['GET'])
def get_all_event_donations():
    try:
        with db.engine.connect() as connection:
            result = connection.execute(text("""
                SELECT
                    e.id,
                    d.email AS donor_email,
                    o.name AS orphanage_name,
                    e.event_name,
                    e.event_date,
                    e.event_time,
                    e.description,
                    e.photo_permission,
                    e.status,
                    e.feedback,
                    e.emotional_impact
                FROM events e
                JOIN donors d ON e.donor_id = d.id
                JOIN orphanages o ON e.orphanage_id = o.id
                ORDER BY e.event_date DESC
            """))
            events = result.fetchall()

            event_list = []
            for e in events:
                event_list.append({
                    "id": e[0],
                    "donor_email": e[1],
                    "orphanage_name": e[2],
                    "event_name": e[3],
                    "event_date": str(e[4]),
                    "event_time": str(e[5]),
                    "description": e[6],
                    "photo_permission": bool(e[7]),
                    "status": e[8],
                    "feedback": e[9],
                    "emotional_impact": e[10],
                })

        return jsonify(event_list), 200

    except Exception as e:
        return jsonify({"error": "Failed to fetch events", "details": str(e)}), 500
    
