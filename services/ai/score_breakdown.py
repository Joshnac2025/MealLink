def build_score_breakdown(
    children,
    stock,
    urgent,
    preferred,
    donation_type,
    freshness_score
):
    breakdown = {}

    # Children score
    breakdown["children_need"] = children

    # Food stock score
    if stock == "Low":
        breakdown["food_stock"] = 50
    elif stock == "Medium":
        breakdown["food_stock"] = 25
    else:
        breakdown["food_stock"] = 0

    # Urgency score
    breakdown["urgency"] = 100 if urgent else 0

    # Food preference score
    if preferred.lower() in donation_type.lower():
        breakdown["food_preference"] = 40
    else:
        breakdown["food_preference"] = 0

    # Freshness score
    breakdown["freshness"] = freshness_score

    return breakdown