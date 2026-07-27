# MealLink Backend - Database Setup Guide

## Prerequisites
- MySQL Server installed and running
- Python 3.7+
- MySQL Connector for Python

## Quick Setup

### 1. Install MySQL Connector
```bash
pip install mysql-connector-python
```

### 2. Configure Database Credentials
Edit `.env` file with your MySQL credentials:
```env
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=your_password_here
MYSQL_DB=meallink
```

### 3. Run Database Setup Script
```bash
python setup_database.py
```

This will:
- Create the `meallink` database
- Import the schema from `Sql/schema.sql`
- Create all required tables

### 4. Verify Database
Connect to MySQL and verify:
```bash
mysql -u root -p
```
```sql
USE meallink;
SHOW TABLES;
```

You should see:
- `donors`
- `orphanages`
- `donations`
- `events`
- `money_donations`

### 5. Start the Backend
```bash
python app.py
```

The backend will run at: http://127.0.0.1:5000

## Manual Database Setup (Alternative)

If you prefer manual setup:

### Create Database
```sql
CREATE DATABASE meallink;
USE meallink;
```

### Import Schema
```bash
mysql -u root -p meallink < Sql/schema.sql
```

## Database Schema Overview

### Tables

#### donors
- `id` (PK, auto-increment)
- `name` (varchar 150)
- `email` (varchar 150, unique)
- `phone` (varchar 30)
- `aadhar_number` (varchar 50)
- `password` (varchar 255)
- `is_verified` (boolean, default 0)
- `created_at` (timestamp)

#### orphanages
- `id` (PK, auto-increment)
- `name` (varchar 150)
- `email` (varchar 150, unique)
- `phone` (varchar 30)
- `address` (varchar 255)
- `password` (varchar 255)
- `is_verified` (boolean, default 0)
- `created_at` (timestamp)

#### donations
- `id` (PK, auto-increment)
- `donor_email` (varchar 150)
- `donation_type` (varchar 50)
- `quantity` (varchar 100)
- `description` (text)
- `quality_info` (varchar 255)
- `location` (varchar 255)
- `status` (enum: Pending/Accepted, default Pending)
- `created_at` (timestamp)

#### events
- `id` (PK, auto-increment)
- `donor_id` (int)
- `event_name` (varchar 200)
- `event_date` (date)
- `event_time` (time)
- `description` (text)
- `photo_permission` (boolean)
- `status` (enum: Pending/Approved/Rejected, default Pending)
- `created_at` (timestamp)

#### money_donations
- `id` (PK, auto-increment)
- `donor_email` (varchar 150)
- `amount` (decimal 10,2)
- `purpose` (varchar 255)
- `created_at` (timestamp)

## Troubleshooting

### "Unknown database 'meallink'" Error
Run `python setup_database.py` to create the database

### "Access denied" Error
Check your `.env` file credentials match your MySQL setup

### "Table doesn't exist" Error
Import the schema: `python setup_database.py`

### Connection Refused
Ensure MySQL server is running:
```bash
# Windows
net start MySQL80

# Linux/Mac
sudo systemctl start mysql
```

## Resetting the Database

To start fresh:
```sql
DROP DATABASE meallink;
```
Then run `python setup_database.py` again
