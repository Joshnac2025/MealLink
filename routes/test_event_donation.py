import requests

url = "http://127.0.0.1:5000/event_donation"

data = {
    "donor_email": "joshna@example.com",
    "orphanage_id": 1,                        # from phpMyAdmin
    "event_type": "Birthday Celebration",
    "person_name": "Joshna",
    "event_date": "2025-11-20",
    "meal_type": "Lunch",
    "special_requests": "Would like to spend time with kids",
    "agreed_terms": True                      # must be capital T, boolean True
}

print("📤 Sending JSON:", data)
response = requests.post(url, json=data)
print("Status code:", response.status_code)
print("Response:", response.text)