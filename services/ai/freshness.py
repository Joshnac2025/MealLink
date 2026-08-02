from datetime import datetime

def calculate_freshness_score(prepared_time):

    if isinstance(prepared_time, str):
        prepared_time = datetime.strptime(
            prepared_time,
            '%Y-%m-%d %H:%M:%S'
        )

    now = datetime.now()
    age = now - prepared_time

    hours = age.total_seconds() / 3600

    if hours <= 2:
        return 10, 'Freshly prepared food'

    elif hours <= 6:
        return 7, 'Prepared within the last 6 hours'

    elif hours <= 12:
        return 4, 'Food is getting older'

    else:
        return 1, 'Food may no longer be safe'