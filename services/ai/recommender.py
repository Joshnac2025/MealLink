from .scorer import calculate_score
from .explainer import build_explanation
from .freshness import calculate_freshness_score
from .confidence import calculate_confidence
from .meal_coverage import calculate_meal_coverage


def find_best_orphanage(orphanages, donation_type, prepared_time, quantity):
    best = None
    best_score = -1
    best_reasons = []

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

    explanation = build_explanation(best[1], best_reasons)
    confidence = calculate_confidence(best_score)

    meal_coverage = calculate_meal_coverage(
    quantity,
    best[2]   # children_count
)

    return best, best_score, best_reasons, explanation, confidence, meal_coverage