from sqlalchemy import text
from config import db


def accept_donation(donation_id, orphanage_id):

    with db.engine.connect() as connection:

        # Check donation exists
        donation = connection.execute(
            text("""
                SELECT *
                FROM donations
                WHERE id = :id
            """),
            {"id": donation_id}
        ).fetchone()

        if not donation:
            return {"error": "Donation not found"}, 404

        # Check orphanage exists
        orphanage = connection.execute(
            text("""
                SELECT *
                FROM orphanages
                WHERE id = :id
            """),
            {"id": orphanage_id}
        ).fetchone()

        if not orphanage:
            return {"error": "Orphanage not found"}, 404

        # Already accepted?
        print("Donation status from DB:", donation.status)

        if donation.status != "Submitted":
            return {
                "error": "Donation already accepted or completed"
            }, 400

        # Accept donation
        connection.execute(
            text("""
                UPDATE donations
                SET
                    status = 'Accepted',
                    accepted_by = :orphanage_id
                WHERE id = :donation_id
            """),
            {
                "donation_id": donation_id,
                "orphanage_id": orphanage_id
            }
        )

        connection.commit()

    return {
        "message": "Donation accepted successfully"
    }, 200