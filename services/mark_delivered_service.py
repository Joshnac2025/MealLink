from sqlalchemy import text
from config import db


def mark_delivered(donation_id, orphanage_id):

    with db.engine.connect() as connection:

        result = connection.execute(
            text("""
                SELECT accepted_by, status
                FROM donations
                WHERE id = :id
            """),
            {"id": donation_id}
        )

        donation = result.fetchone()

        if not donation:
            return {
                "error": "Donation not found"
            }, 404

        if donation.accepted_by != orphanage_id:
            return {
                "error": "You cannot deliver this donation"
            }, 403

        if donation.status != "Accepted":
            return {
                "error": "Donation is not in Accepted state"
            }, 400

        connection.execute(
            text("""
                UPDATE donations
                SET status='Delivered'
                WHERE id=:id
            """),
            {"id": donation_id}
        )

        connection.commit()

    return {
        "message": "Donation marked as Delivered successfully"
    }, 200