from sqlalchemy import text
from config import db


def approve_donation(donation_id):
    with db.engine.connect() as connection:

        donation = connection.execute(
            text("SELECT id FROM donations WHERE id=:id"),
            {"id": donation_id}
        ).fetchone()

        if not donation:
            return {"error": "Donation not found"}, 404

        connection.execute(
            text("""
                UPDATE donations
                SET donor_approved = 1,
                    status = 'Awaiting Orphanage Acceptance'
                WHERE id=:id
            """),
            {"id": donation_id}
        )

        connection.commit()

    return {"message": "Donation approved successfully"}, 200