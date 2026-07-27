import requests

url = "http://127.0.0.1:5000/orphanage/mark_delivered"

data = {
    "donation_id": 1   # use the donation ID that was accepted earlier
}

response = requests.post(url, json=data)
print("Status code:", response.status_code)
print("Response:", response.text)