from sqlalchemy import text
from config import db


def create_donation(data):
    print("New Donation Service Called", data)

    donor_id = data.get("donor_id")
    donation_type = data.get("donation_type")
    quantity = data.get("quantity")
    description = data.get("description")
    quality_info = data.get("quality_info")
    location = data.get("location")
    prepared_time = data.get("prepared_time")
    hygiene_confirmed = data.get("hygiene_confirmed")

    if not all([donor_id, donation_type, location]):
        return {
            "error": "Donor ID, donation type and location are required"
        }, 400

    with db.engine.connect() as connection:

        donor = connection.execute(
            text("""
                SELECT id
                FROM donors
                WHERE id=:id
                AND is_verified=TRUE
            """),
            {"id": donor_id}
        ).fetchone()

        if not donor:
            return {
                "error": "Donor not found"
            }, 404

        result = connection.execute(
            text("""
                INSERT INTO donations
                (
                    donor_id,
                    donation_type,
                    item_description,
                    quantity,
                    item_condition,
                    prepared_time,
                    hygiene_confirmed,
                    location,
                    status
                )

                VALUES
                (
                    :donor_id,
                    :donation_type,
                    :description,
                    :quantity,
                    :quality_info,
                    :prepared_time,
                    :hygiene_confirmed,
                    :location,
                    'Awaiting AI Recommendation'
                )
            """),
            {
                "donor_id": donor.id,
                "donation_type": donation_type,
                "description": description,
                "quantity": quantity,
                "quality_info": quality_info,
                "prepared_time": prepared_time,
                "hygiene_confirmed": hygiene_confirmed,
                "location": location
            }
        )

        donation_id = result.lastrowid

        connection.commit()

    return {
        "message": "Donation submitted successfully",
        "donation_id": donation_id
    }, 201