import requests

url = "http://127.0.0.1:5000/orphanage/view_donations"

response = requests.get(url)
print("Status code:", response.status_code)
print("Response:", response.text)