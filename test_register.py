import requests

url = "http://127.0.0.1:5000/donor/register"

data = {
    "name": "Joshna",
    "email": "joshna2@example.com",
    "phone": "9876543210",
    "password": "mypassword",
    "aadhar_number": "123456789012"
}

response = requests.post(url, json=data)
print("Status code:", response.status_code)
print("Response:", response.text)