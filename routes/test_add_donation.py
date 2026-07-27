import requests

url = "http://127.0.0.1:5000/donor/add_donation"

data = {
    "email": "joshna2@example.com",       # use the verified donor's email
    "donation_type": "food",              # can be 'food', 'clothes', 'furniture', or 'money'
    "quantity": "15 plates",
    "description": "Vegetable rice and dal",
    "quality_info": "Prepared 2 hours ago, still warm",
    "location": "Orphanage Street, City Center"
}

response = requests.post(url, json=data)
print("Status code:", response.status_code)
print("Response:", response.text)
