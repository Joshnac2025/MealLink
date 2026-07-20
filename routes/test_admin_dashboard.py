import requests

BASE_URL = "http://127.0.0.1:5000"

# --- Test 1: Fetch all donors ---
def test_get_donors():
    url = f"{BASE_URL}/admin/donors"
    response = requests.get(url)
    print("🧑‍🤝‍🧑 Donors API")
    print("Status:", response.status_code)
    print("Response:", response.text, "\n")

# --- Test 2: Fetch all orphanages ---
def test_get_orphanages():
    url = f"{BASE_URL}/admin/orphanages"
    response = requests.get(url)
    print("🏠 Orphanages API")
    print("Status:", response.status_code)
    print("Response:", response.text, "\n")

# --- Test 3: Fetch all donations ---
def test_get_donations():
    url = f"{BASE_URL}/admin/donations"
    response = requests.get(url)
    print("🎁 Donations API")
    print("Status:", response.status_code)
    print("Response:", response.text, "\n")


if __name__ == "__main__":
    print("🚀 Testing Admin Dashboard APIs...\n")
    test_get_donors()
    test_get_orphanages()
    test_get_donations()