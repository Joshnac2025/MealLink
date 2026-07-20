import requests

url = "http://127.0.0.1:5000/orphanage/register"

data = {
    "name": "Hope Orphanage",
    "email": "hope@example.com",
    "phone": "9876543211",
    "password": "securepass",
    "address": "No.12 Charity Street, City Center"
}

response = requests.post(url, json=data)
print("Status code:", response.status_code)
print("Response:", response.text)