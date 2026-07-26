from sqlalchemy import text
from config import db


def get_donor_donations(donor_id):

    with db.engine.connect() as connection:

        result = connection.execute(
            text("""
                SELECT
                    id,
                    donation_type,
                    quantity,
                    item_description,
                    status,
                    accepted_by
                FROM donations
                WHERE donor_id = :donor_id
                ORDER BY id DESC
            """),
            {"donor_id": donor_id}
        )

        donations = result.fetchall()

        if not donations:
            return {"message": "No donations found"}, 404

        donation_list = []

        for donation in donations:
            donation_list.append({
                "id": donation.id,
                "donation_type": donation.donation_type,
                "quantity": donation.quantity,
                "description": donation.item_description,
                "status": donation.status,
                "accepted_by": donation.accepted_by
            })

    return {"donations": donation_list}, 200