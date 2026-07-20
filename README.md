# MealLink - Interactive Standalone Frontend

A beautiful, interactive food waste management system that runs entirely in your browser using localStorage. No backend required!

## ✨ Features

### 🎨 Interactive UI
- **Live Statistics**: Real-time stats that update automatically
- **Smooth Animations**: Fade-in effects and hover interactions
- **Responsive Design**: Works perfectly on all devices
- **Modern Aesthetics**: Glassmorphism effects and vibrant colors

### 🔧 Standalone Operation
- **No Backend Needed**: Everything runs in the browser
- **localStorage**: All data persists in your browser
- **Offline Capable**: Works without internet connection
- **Instant Setup**: Just run and go!

### 👥 User Roles

#### Donors
- Register and login
- Add food donations (Food, Money, Materials)
- Sponsor events for orphanages
- Track donation history

#### Orphanages
- Register and login
- View available donations
- Accept donations
- Request specific items

#### Admins
- View dashboard with live statistics
- Approve/reject event sponsorships
- Monitor all donations and users

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Navigate to frontend directory
cd "MealLinkFrontend/meallink"

# Install dependencies
npm install

# Start development server
npm run dev
```

### Access Application

Open your browser to: **http://localhost:5173**

That's it! No database, no backend server needed.

## 🎯 Default Credentials

### Admin Account
- **Username**: `admin`
- **Password**: `adminpassword`

> You can register new donors and orphanages directly from the app!

## 📊 How It Works

### Data Storage

All data is stored in your browser's localStorage:

| Key | Description |
|-----|-------------|
| `meallink_users` | User accounts (donors, orphanages, admins) |
| `meallink_donations` | All donations |
| `meallink_events` | Event sponsorships |

### Mock API

The app uses a mock API (`src/services/mockApi.js`) that simulates backend behavior:
- User authentication
- CRUD operations for donations
- Event management
- Admin operations

## 🎨 Interactive Features

### Homepage
- **Live Stats**: Updates every 5 seconds
  - Meals Served
  - Total Donations
  - Active Donors
  - Registered Orphanages
- **Animated Hero Section**: Smooth fade-in
- **Interactive Cards**: Hover effects with lift and scale
- **Glassmorphism**: Modern UI effects

### Dashboards
- **Donor Dashboard**: Submit donations with real-time feedback
- **Orphanage Dashboard**: View and accept donations
- **Admin Dashboard**: Comprehensive statistics and event management
- **Event Dashboard**: Public events and sponsorship forms

## 🛠️ Tech Stack

- **React 18**: Modern UI library
- **Vite**: Lightning-fast build tool
- **React Router**: Client-side routing
- **localStorage**: Data persistence
- **CSS3**: Animations and effects

## 📦 Build for Production

```bash
# Create production build
npm run build

# Output will be in dist/ folder
```

Deploy the `dist/` folder to any static hosting:
- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting

## 🔄 Resetting Data

To clear all data and start fresh:

1. Open browser DevTools (F12)
2. Go to **Application** tab
3. Select **Local Storage**
4. Find your site (localhost:5173)
5. Click **Clear All**

Or use this in console:
```javascript
localStorage.clear();
location.reload();
```

## 📱 Responsive Design

The app is fully responsive and works on:
- 📱 Mobile phones
- 📱 Tablets
- 💻 Laptops
- 🖥️ Desktops

## 🎭 User Flow

```
Homepage → Register → Login → Dashboard
                              ↓
                    Donor / Orphanage / Admin
                              ↓
                    Perform Actions → Data Saved to localStorage
```

## 🐛 Troubleshooting

### Stats not showing?
- Make sure you've registered and added some data
- Check browser console for errors
- Try refreshing the page

### Data disappeared?
- Check if localStorage is enabled in your browser
- Verify you're using the same browser
- Check browser privacy settings

### Animations not working?
- Ensure JavaScript is enabled
- Try a modern browser (Chrome, Firefox, Safari, Edge)
- Clear browser cache

## 📝 Project Structure

```
meallink/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── HomePage.jsx          # Interactive landing page
│   │   ├── Login.jsx              # Multi-role login
│   │   ├── Register.jsx           # User registration
│   │   ├── DonorDashboard.jsx     # Donor interface
│   │   ├── OrphanageDashboard.jsx # Orphanage interface
│   │   ├── AdminDashboard.jsx     # Admin interface
│   │   └── EventDashboard.jsx     # Events page
│   ├── services/
│   │   ├── api.js                 # API wrapper
│   │   └── mockApi.js             # Mock backend
│   ├── App.jsx                    # Main app component
│   ├── main.jsx                   # Entry point
│   └── index.css                  # Global styles
├── public/
├── index.html
└── package.json
```

## 🌟 Highlights

- ✅ **Zero Configuration**: No database setup needed
- ✅ **Instant Start**: Run and use immediately
- ✅ **Beautiful UI**: Modern design with animations
- ✅ **Live Updates**: Real-time statistics
- ✅ **Fully Functional**: All features work without backend
- ✅ **Lightweight**: ~197 KB total bundle size
- ✅ **Fast**: Instant page loads

## 📄 License

This project is open source and available for educational purposes.

## 🤝 Contributing

Feel free to fork and enhance this project!

---

**Made with ❤️ for reducing food waste and helping those in need**
