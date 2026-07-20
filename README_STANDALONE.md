
# MealLink Frontend (Standalone Mode)

This application has been converted to run in **Standalone Mode**. It no longer requires a backend server or a SQL database. All data is stored locally in your browser's `localStorage`.

## Features
- **No Backend Required**: The application runs entirely in the browser.
- **Data Persistence**: Data is saved to `localStorage`, so it persists across page reloads (but not across different browsers/devices).
- **Mock API**: A `mockApi.js` service intercepts all API calls and simulates backend logic.

## How to Run
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```

## Default Credentials
Since the database is local, you can register new users.
However, a default admin account is created automatically:
- **Username**: `admin`
- **Password**: `adminpassword`

## Resetting Data
To clear all data, open your browser's developer tools (F12), go to the **Application** tab, select **Local Storage**, and clear the entries for this site.
