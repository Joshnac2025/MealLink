def calculate_confidence(score):
    if score >= 350:
        return "Very High (95%)"

    elif score >= 300:
        return "High (90%)"

    elif score >= 250:
        return "Medium (75%)"

    elif score >= 200:
        return "Low (60%)"

    else:
        return "Very Low (40%)"