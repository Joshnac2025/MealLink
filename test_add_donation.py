import requests

url = "http://127.0.0.1:5000/donor/add_donation"

data = {
    "email": "joshna2@example.com",      # verified donor's email
    "donation_type": "food",             # or clothes/furniture/money
    "quantity": "15 plates",
    "description": "Vegetable rice and dal",
    "quality_info": "Prepared 2 hours ago, still warm",
    "location": "Orphanage Street, City Center"
}

response = requests.post(url, json=data)
print("Status code:", response.status_code)
print("Response:", response.text)