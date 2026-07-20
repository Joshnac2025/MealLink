import requests

url = "http://127.0.0.1:5000/event_donation"
data = {
    "donor_name": "Joshna",
    "donor_email": "joshna@example.com",
    "event_date": "2025-11-20",
    "meal_type": "Lunch",
    "orphanage_name": "Hope Orphanage",
    "terms_agreed": True,
    "message": "Celebrating my birthday with the kids!"
}

response = requests.post(url, json=data)
print("Status code:", response.status_code)
print("Response:", response.text)