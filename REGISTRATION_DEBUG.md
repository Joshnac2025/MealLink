# Registration Debugging Guide

## How to Test Registration

### Step 1: Open the App
Go to: **http://localhost:5173/register**

### Step 2: Open DevTools Console
Press `F12` → Go to **Console** tab

### Step 3: Fill Registration Form

**For Donor:**
- Name: Test Donor
- Email: donor@test.com
- Phone: 1234567890
- Aadhar Number: 123456789012
- Password: test123
- Confirm Password: test123

**For Orphanage:**
- Name: Test Orphanage
- Email: orphanage@test.com
- Phone: 9876543210
- Address: 123 Main Street
- Password: test123
- Confirm Password: test123

### Step 4: Submit & Watch Console

You should see these logs in order:

```
Registration payload: {name: "Test Donor", email: "donor@test.com", ...}
Endpoint: /donors/donor/register
Mock POST: /donors/donor/register {name: "Test Donor", ...}
📝 Donor registration request: {name: "Test Donor", ...}
Current users before registration: [{id: 1, username: "admin", ...}]
✅ New donor user created: {name: "Test Donor", email: "donor@test.com", id: 1732774848123, role: "donor", ...}
💾 Saved to localStorage. Total users now: 2
✅ Verification - Users in storage: [{...}, {...}]
```

### Step 5: Verify in localStorage

In Console, type:
```javascript
JSON.parse(localStorage.getItem('meallink_users'))
```

You should see an array with:
1. Admin user (id: 1)
2. Your newly registered user

### Step 6: View in DevTools

1. Go to **Application** tab
2. Click **Local Storage** → `http://localhost:5173`
3. Click on `meallink_users`
4. You'll see the JSON with all users

## What Each Log Means

| Log | Meaning |
|-----|---------|
| 📝 Registration request | mockApi received the registration data |
| Current users before | Shows existing users in localStorage |
| ✅ New user created | User object was created successfully |
| 💾 Saved to localStorage | Data was written to localStorage |
| ✅ Verification | Confirms data is actually in localStorage |

## Common Issues & Solutions

### Issue 1: "Email already exists"
**Cause:** You're trying to register with an email that's already in localStorage

**Solution:**
```javascript
// Clear all users except admin
const users = JSON.parse(localStorage.getItem('meallink_users'));
const admin = users.find(u => u.role === 'admin');
localStorage.setItem('meallink_users', JSON.stringify([admin]));
```

### Issue 2: No logs appearing
**Cause:** The request isn't reaching mockApi

**Check:**
1. Is the dev server running? (http://localhost:5173)
2. Is `api.js` using mockApi?
3. Check for errors in console

### Issue 3: Data not persisting after refresh
**Cause:** localStorage might be disabled or in private browsing

**Solution:**
- Check browser settings
- Disable private/incognito mode
- Try a different browser

### Issue 4: Registration successful but no data
**Cause:** setStorage might be failing

**Debug:**
```javascript
// Test localStorage manually
localStorage.setItem('test', 'hello');
console.log(localStorage.getItem('test')); // Should show 'hello'
```

## Manual Test

If registration isn't working, manually add a user:

```javascript
// Get current users
const users = JSON.parse(localStorage.getItem('meallink_users') || '[]');

// Add test donor
users.push({
  id: Date.now(),
  name: "Manual Test Donor",
  email: "manual@test.com",
  phone: "1234567890",
  password: "test123",
  aadhar_number: "123456789012",
  role: "donor"
});

// Save
localStorage.setItem('meallink_users', JSON.stringify(users));

// Verify
console.log('Users:', JSON.parse(localStorage.getItem('meallink_users')));
```

## Check if Data is Saving

Run this in console after registration:

```javascript
// Check all localStorage keys
console.log('All localStorage keys:', Object.keys(localStorage));

// Check users
const users = JSON.parse(localStorage.getItem('meallink_users'));
console.log('Total users:', users.length);
console.table(users);

// Check specific user
const testUser = users.find(u => u.email === 'donor@test.com');
console.log('Test user:', testUser);
```

## Expected Console Output (Successful Registration)

```
Registration payload: {name: "Test", email: "test@example.com", phone: "1234567890", password: "test123", aadhar_number: "123456789012"}
Endpoint: /donors/donor/register
Mock POST: /donors/donor/register
📝 Donor registration request: {name: "Test", ...}
Current users before registration: [1 user]
✅ New donor user created: {id: 1732774848123, name: "Test", email: "test@example.com", role: "donor", ...}
💾 Saved to localStorage. Total users now: 2
✅ Verification - Users in storage: [2 users]
```

## Next Steps After Registration

1. **Go to Login:** http://localhost:5173/login
2. **Select same user type** (Donor/Orphanage)
3. **Enter exact same credentials**
4. **Login should work!**

## Still Not Working?

If you still don't see data being saved:

1. **Clear everything:**
   ```javascript
   localStorage.clear();
   location.reload();
   ```

2. **Try registering again**

3. **Check console for errors**

4. **Verify mockApi is being used:**
   ```javascript
   // In console
   import api from './services/api.js';
   console.log(api);
   ```

5. **Check if localStorage is available:**
   ```javascript
   console.log('localStorage available:', typeof(Storage) !== "undefined");
   ```
