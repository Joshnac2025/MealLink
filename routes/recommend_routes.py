from flask import Blueprint, jsonify
from services.ai_recommendation_service import recommend_orphanage

recommend_bp = Blueprint("recommend", __name__)

@recommend_bp.route("/recommend/<int:donation_id>", methods=["POST"])
def recommend(donation_id):
    result, status = recommend_orphanage(donation_id)
    return jsonify(result), status