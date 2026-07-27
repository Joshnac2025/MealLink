import requests

url = "http://127.0.0.1:5000/donor/verify_otp"

data = {
    "email": "joshna2@example.com",  # use the email you registered
    "otp": "123456"  # replace this with the actual OTP shown in your registration response
}

response = requests.post(url, json=data)
print("Status code:", response.status_code)
print("Response:", response.text)