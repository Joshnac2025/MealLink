import requests

url = "http://127.0.0.1:5000/admin/event_donations/3"  # change 3 if needed
data = {
    "approval_status": "Approved"
}

response = requests.put(url, json=data)
print("Status code:", response.status_code)
print("Response:", response.json())