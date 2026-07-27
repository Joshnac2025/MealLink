def build_explanation(orphanage_name, reasons):
    if not reasons:
        return f"{orphanage_name} is recommended."

    if len(reasons) == 1:
        return f"{orphanage_name} is recommended because {reasons[0].lower()}."

    explanation = (
        f"{orphanage_name} is recommended because "
        + ", ".join(reasons[:-1])
        + " and "
        + reasons[-1].lower()
        + "."
    )

    return explanation