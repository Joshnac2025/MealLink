# Login Troubleshooting Guide

## How to Test Login

### Step 1: Register a New User

1. Go to http://localhost:5173/register
2. Select "Donor" or "Orphanage"
3. Fill in the form:
   - **Name**: Test User
   - **Email**: test@example.com
   - **Phone**: 1234567890
   - **Password**: password123
   - **Confirm Password**: password123
   - (Add Aadhar for Donor or Address for Orphanage)
4. Click "Register"
5. You should see "Registration successful!"

### Step 2: Check localStorage

1. Press `F12` to open DevTools
2. Go to **Console** tab
3. Type: `JSON.parse(localStorage.getItem('meallink_users'))`
4. You should see your registered user with the exact password you entered

### Step 3: Login

1. Go to http://localhost:5173/login
2. Select the same user type (Donor/Orphanage)
3. Enter the EXACT same credentials:
   - **Email**: test@example.com
   - **Password**: password123
4. Click "Login"

### Step 4: Check Console Logs

Open the Console (F12) and you'll see detailed logs:

```
Mock POST: /donors/donor/login {email: "test@example.com", password: "password123"}
All users in storage: [{...}]
Looking for donor with email: test@example.com
Donor logged in: {id: ..., name: "Test User", ...}
Login successful, navigating to: /donor
```

## Common Issues & Solutions

### Issue 1: "Invalid credentials"

**Check:**
1. Are you using the exact same email and password?
2. Did you select the correct user type (Donor/Orphanage/Admin)?
3. Check console for: "Email found but password mismatch"

**Solution:**
- Passwords are case-sensitive!
- Make sure there are no extra spaces
- Check the stored password in localStorage

### Issue 2: "No user found with email"

**Check:**
1. Did you register first?
2. Is the email exactly the same?

**Solution:**
```javascript
// In console, check all users:
console.table(JSON.parse(localStorage.getItem('meallink_users')));
```

### Issue 3: Login works but redirects to wrong page

**Check:**
- Make sure you selected the correct user type before logging in

## Quick Test with Admin

**Admin credentials are pre-loaded:**
- **Username**: admin
- **Password**: adminpassword

1. Go to http://localhost:5173/login
2. Select "Admin" tab
3. Enter:
   - Username: admin
   - Password: adminpassword
4. Click Login
5. Should redirect to /admin

## Debugging Commands

### View all users:
```javascript
console.table(JSON.parse(localStorage.getItem('meallink_users')));
```

### View current user:
```javascript
console.log(JSON.parse(localStorage.getItem('meallink_current_user')));
```

### Clear all data and start fresh:
```javascript
localStorage.clear();
location.reload();
```

### Manually add a test user:
```javascript
const users = JSON.parse(localStorage.getItem('meallink_users') || '[]');
users.push({
  id: Date.now(),
  name: "Test Donor",
  email: "donor@test.com",
  phone: "9876543210",
  password: "test123",
  aadhar_number: "123456789012",
  role: "donor"
});
localStorage.setItem('meallink_users', JSON.stringify(users));
console.log('Test user added! Login with: donor@test.com / test123');
```

## What the Console Logs Mean

### Successful Login:
```
Mock POST: /donors/donor/login
All users in storage: [...]
Looking for donor with email: test@example.com
Donor logged in: {...}
Login response: {data: {...}, status: 200}
Login successful, navigating to: /donor
```

### Failed Login (Wrong Password):
```
Mock POST: /donors/donor/login
All users in storage: [...]
Looking for donor with email: test@example.com
Email found but password mismatch. Stored: password123 Entered: wrongpass
Login error: {...}
```

### Failed Login (User Not Found):
```
Mock POST: /donors/donor/login
All users in storage: [...]
Looking for donor with email: notfound@test.com
No user found with email: notfound@test.com
Login error: {...}
```

## Still Having Issues?

1. **Clear localStorage** and start fresh
2. **Register a new user** with simple credentials
3. **Check the console** for detailed error messages
4. **Verify** the user exists in localStorage
5. **Try the admin login** first (it's pre-loaded)

## Expected Behavior

✅ After successful login:
- `meallink_current_user` is set in localStorage
- `user_type` is set to your role
- `user_email` is set (for donor/orphanage)
- You're redirected to your dashboard
- Console shows "Login successful"

❌ After failed login:
- Error message displayed on screen
- Console shows why login failed
- No navigation occurs
- localStorage not updated
