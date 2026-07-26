from datetime import datetime


def calculate_freshness_score(prepared_time):
    """
    Returns:
        score (int)
        reason (str)
    """

    if prepared_time is None:
        return 0, "Preparation time unknown"

    now = datetime.now()

    age = now - prepared_time

    hours = age.total_seconds() / 3600

    if hours <= 1:
        return 100, "Freshly prepared food"

    elif hours <= 2:
        return 80, "Prepared within the last 2 hours"

    elif hours <= 4:
        return 50, "Should be delivered soon"

    elif hours <= 6:
        return 20, "Food is becoming old"

    else:
        return -100, "Food may no longer be safe"