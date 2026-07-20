from sqlalchemy import text
from config import db


def create_donation(data):
    donor_email = data.get('email')
    donation_type = data.get('donation_type')
    quantity = data.get('quantity')
    description = data.get('description')
    quality_info = data.get('quality_info')
    location = data.get('location')

    if not all([donor_email, donation_type, location]):
        return {"error": "Email, donation type, and location are required"}, 400

    with db.engine.connect() as connection:

        result = connection.execute(
            text("""
                SELECT *
                FROM donors
                WHERE email=:email
                AND is_verified=TRUE
            """),
            {"email": donor_email}
        )

        donor = result.fetchone()

        if not donor:
            return {"error": "Donor not found or not verified"}, 404

        connection.execute(
            text("""
                INSERT INTO donations
                (
                    donor_email,
                    donation_type,
                    quantity,
                    description,
                    quality_info,
                    location
                )
                VALUES
                (
                    :donor_email,
                    :donation_type,
                    :quantity,
                    :description,
                    :quality_info,
                    :location
                )
            """),
            {
                "donor_email": donor_email,
                "donation_type": donation_type,
                "quantity": quantity,
                "description": description,
                "quality_info": quality_info,
                "location": location
            }
        )

        connection.commit()

    return {"message": "Donation added successfully ✅"}, 201