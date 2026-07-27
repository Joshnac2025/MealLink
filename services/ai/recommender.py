from .scorer import calculate_score
from .explainer import build_explanation
from .freshness import calculate_freshness_score
from .confidence import calculate_confidence
from .meal_coverage import calculate_meal_coverage


def find_best_orphanage(orphanages, donation_type, prepared_time, quantity):
    best = None
    best_score = -1
    best_reasons = []
    recommendations = []

    for orphanage in orphanages:

        children = orphanage[2]
        stock = orphanage[3]
        urgent = orphanage[4]
        preferred = orphanage[5]

        score, reasons = calculate_score(
            children,
            stock,
            urgent,
            preferred,
            donation_type
        )

        freshness_score, freshness_reason = calculate_freshness_score(prepared_time)

        score += freshness_score
        reasons.append(freshness_reason)

        if score > best_score:
            best_score = score
            best = orphanage
            best_reasons = reasons

        recommendations.append({
            "orphanage": orphanage,
            "score": score,
            "reasons": reasons
})

    explanation = build_explanation(best[1], best_reasons)
    confidence = calculate_confidence(best_score)

    meal_coverage = calculate_meal_coverage(
        quantity,
        best[2]
    )

    recommendations.sort(
        key=lambda x: x["score"],
        reverse=True
    )

    top3 = recommendations[:3]

    for rec in top3:

        rec["confidence"] = calculate_confidence(
            rec["score"]
        )

        rec["explanation"] = build_explanation(
            rec["orphanage"][1],
            rec["reasons"]
        )

        rec["meal_coverage"] = calculate_meal_coverage(
            quantity,
            rec["orphanage"][2]
        )

        print("Recommendations:", len(recommendations))
        print("Top3:", len(top3))

    for rec in top3:
        print(rec["orphanage"][1], rec["score"])

    return (
        best,
        best_score,
        best_reasons,
        explanation,
        confidence,
        meal_coverage,
        top3
    )