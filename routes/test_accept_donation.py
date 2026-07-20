import requests

url = "http://127.0.0.1:5000/orphanage/accept_donation"

data = {
    "donation_id": 1,                   # use the actual ID from your donations table
    "orphanage_email": "hope@example.com"
}

response = requests.post(url, json=data)
print("Status code:", response.status_code)
print("Response:", response.text)