def calculate_score(children, stock, urgent, preferred, donation_type):
    score = 0
    reasons = []

    # Children count
    score += children
    reasons.append(f"{children} children need food")

    # Food stock
    if stock == "Low":
        score += 50
        reasons.append("Low food stock")
    elif stock == "Medium":
        score += 25
        reasons.append("Medium food stock")

    # Urgency
    if urgent:
        score += 100
        reasons.append("Urgent need for food")

    # Food preference
    if preferred and preferred.lower() in donation_type.lower():
        score += 40
        reasons.append("Preferred food matched")

    return score, reasons