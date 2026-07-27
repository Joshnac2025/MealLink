USE meallink;

CREATE TABLE donors (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(150),
  email VARCHAR(150) UNIQUE,
  phone VARCHAR(30),
  password VARCHAR(255),
  aadhar_number VARCHAR(20),
  otp VARCHAR(6),
  is_verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE orphanages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(150),
  email VARCHAR(150) UNIQUE,
  phone VARCHAR(30),
  address VARCHAR(255),
  password VARCHAR(255),
  is_verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE donations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  donor_id INT,
  donation_type VARCHAR(50),
  item_description TEXT,
  quantity VARCHAR(100),
  item_condition VARCHAR(50),
  prepared_time VARCHAR(100),
  hygiene_confirmed BOOLEAN DEFAULT NULL,
  status VARCHAR(30) DEFAULT 'Pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (donor_id) REFERENCES donors(id)
);

CREATE TABLE money_donations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  donor_id INT,
  orphanage_id INT,
  amount DECIMAL(10,2),
  payment_mode VARCHAR(50),
  payment_status VARCHAR(30) DEFAULT 'Pending',
  purpose VARCHAR(255),
  transaction_id VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (donor_id) REFERENCES donors(id),
  FOREIGN KEY (orphanage_id) REFERENCES orphanages(id)
);

CREATE TABLE events (
  id INT AUTO_INCREMENT PRIMARY KEY,
  donor_id INT,
  orphanage_id INT,
  event_name VARCHAR(150),
  event_date DATE,
  event_time TIME,
  description TEXT,
  photo_permission BOOLEAN DEFAULT FALSE,
  status VARCHAR(30) DEFAULT 'Pending',
  feedback TEXT,
  emotional_impact VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (donor_id) REFERENCES donors(id),
  FOREIGN KEY (orphanage_id) REFERENCES orphanages(id)
);