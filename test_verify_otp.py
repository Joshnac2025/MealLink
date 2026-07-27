import requests

url = "http://127.0.0.1:5000/donor/verify_otp"

data = {
    "email": "joshna2@example.com",   # your test email
    "otp": "482913"                   # replace with your real OTP
}

response = requests.post(url, json=data)
print("Status code:", response.status_code)
print("Response:", response.text)