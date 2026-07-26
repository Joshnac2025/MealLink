import re

def calculate_meal_coverage(quantity, children_count):
    """
    Assumption:
    1 meal feeds 1 child.
    """

    match = re.search(r"\d+", str(quantity))

    if match:
        meals = int(match.group())
    else:
        meals = 0

    covered = min(meals, children_count)
    remaining = max(children_count - covered, 0)

    return {
        "meals_available": meals,
        "children_served": covered,
        "children_remaining": remaining
    }