from sqlalchemy import text
from config import db
from services.ai.recommender import find_best_orphanage

print("===== NEW AI SERVICE LOADED =====")

def recommend_orphanage(donation_id):
    with db.engine.connect() as connection:

        # Get donation
        donation = connection.execute(
            text("""
                SELECT donation_type,
                       quantity,
                       prepared_time
                FROM donations
                WHERE id = :id
            """),
            {"id": donation_id}
        ).fetchone()

        if not donation:
            return {"error": "Donation not found"}, 404

        donation_type = donation[0]

        orphanages = connection.execute(
            text("""
                SELECT
                    o.id,
                    o.name,
                    n.children_count,
                    n.current_food_stock,
                    n.urgent_need,
                    n.preferred_food
                FROM orphanages o
                JOIN orphanage_needs n
                ON o.id = n.orphanage_id
            """)
        ).fetchall()

        best, best_score, best_reasons, explanation, confidence, meal_coverage = find_best_orphanage(
    orphanages,
    donation_type,
    donation.prepared_time,
    donation.quantity
)

    return {
        "recommended_orphanage": {
            "id": best[0],
            "name": best[1],
            "score": best_score,
            "confidence": confidence,
            "meal_coverage": meal_coverage,
            "reasons": best_reasons,
            "explanation": explanation
            
        }
    }, 200 