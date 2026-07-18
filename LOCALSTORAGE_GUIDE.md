# localStorage User Management Guide

## Overview

All user data is automatically saved to your browser's localStorage. This means:
- ✅ No backend server needed
- ✅ Data persists across page refreshes
- ✅ Works completely offline
- ✅ Instant access to user information

## localStorage Keys

The application uses the following localStorage keys:

| Key | Description | Example Data |
|-----|-------------|--------------|
| `meallink_users` | All registered users (donors, orphanages, admins) | Array of user objects |
| `meallink_donations` | All donations submitted | Array of donation objects |
| `meallink_events` | All event sponsorships | Array of event objects |
| `meallink_current_user` | Currently logged-in user details | User profile object |
| `user_type` | Current user's role (legacy) | "donor", "orphanage", "admin" |
| `user_email` | Current user's email (legacy) | "user@example.com" |
| `user_username` | Current admin's username (legacy) | "admin" |

## User Data Structure

### When a user registers:
```javascript
{
  id: 1234567890, // Timestamp
  name: "John Doe",
  email: "john@example.com",
  phone: "1234567890",
  password: "hashedpassword", // Stored as plain text in demo
  role: "donor", // or "orphanage" or "admin"
  aadhar_number: "123456789012", // For donors only
  address: "123 Main St" // For orphanages only
}
```

### When a user logs in:
The `meallink_current_user` key stores:
```javascript
{
  id: 1234567890,
  name: "John Doe",
  email: "john@example.com",
  phone: "1234567890",
  role: "donor",
  loginTime: "2025-11-28T09:26:30.123Z"
}
```

## Using the Utility Functions

### Import the functions:
```javascript
import { getCurrentUser, logout, isLoggedIn, getUserRole } from '../services/mockApi';
```

### Get current user details:
```javascript
const user = getCurrentUser();
if (user) {
  console.log('Logged in as:', user.name);
  console.log('Email:', user.email);
  console.log('Role:', user.role);
}
```

### Check if user is logged in:
```javascript
if (isLoggedIn()) {
  // User is logged in
  console.log('Welcome back!');
} else {
  // Redirect to login
  navigate('/login');
}
```

### Get user role:
```javascript
const role = getUserRole();
if (role === 'admin') {
  // Show admin features
}
```

### Logout user:
```javascript
import { logout } from '../services/mockApi';

const handleLogout = () => {
  logout(); // Clears all user data
  navigate('/login');
};
```

## Viewing Data in Browser

### Method 1: DevTools
1. Press `F12` to open DevTools
2. Go to **Application** tab
3. Select **Local Storage** → `http://localhost:5173`
4. You'll see all the keys and their values

### Method 2: Console
```javascript
// View all users
console.log(JSON.parse(localStorage.getItem('meallink_users')));

// View current user
console.log(JSON.parse(localStorage.getItem('meallink_current_user')));

// View all donations
console.log(JSON.parse(localStorage.getItem('meallink_donations')));

// View all events
console.log(JSON.parse(localStorage.getItem('meallink_events')));
```

## Example: Display User Profile

```javascript
import React, { useState, useEffect } from 'react';
import { getCurrentUser } from '../services/mockApi';

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = getCurrentUser();
    setUser(currentUser);
  }, []);

  if (!user) {
    return <div>Please login first</div>;
  }

  return (
    <div className="card">
      <h2>My Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Role:</strong> {user.role}</p>
      <p><strong>Login Time:</strong> {new Date(user.loginTime).toLocaleString()}</p>
    </div>
  );
}
```

## Clearing Data

### Clear all data:
```javascript
localStorage.clear();
location.reload();
```

### Clear specific data:
```javascript
// Clear only user data
localStorage.removeItem('meallink_users');

// Clear only current user
localStorage.removeItem('meallink_current_user');

// Clear only donations
localStorage.removeItem('meallink_donations');
```

## Data Flow

```
Registration → User data saved to meallink_users
     ↓
Login → User profile saved to meallink_current_user
     ↓
Dashboard → Access user data via getCurrentUser()
     ↓
Logout → Clear meallink_current_user
```

## Security Notes

⚠️ **Important**: This is a demo application. In production:
- Passwords should be hashed
- Use secure authentication tokens
- Implement proper session management
- Use HTTPS
- Validate all inputs
- Implement CSRF protection

## Testing

### Test User Registration:
1. Go to `/register`
2. Fill in the form
3. Submit
4. Check DevTools → Application → Local Storage
5. You should see the new user in `meallink_users`

### Test User Login:
1. Go to `/login`
2. Enter credentials
3. Submit
4. Check `meallink_current_user` in localStorage
5. You should see your profile data

### Test Data Persistence:
1. Login to the app
2. Add a donation
3. Refresh the page (F5)
4. Data should still be there!

## Default Admin Account

```javascript
{
  id: 1,
  username: "admin",
  password: "adminpassword",
  role: "admin"
}
```

Login with:
- **Username**: admin
- **Password**: adminpassword

---

**All data is stored locally in your browser and never sent to any server!**
