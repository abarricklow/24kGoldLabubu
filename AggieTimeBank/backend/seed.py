'''
INSTRUCTIONS: 
update your mysql password below 
in your myswl create a schema called "timebank" or run command 
    CREATE DATABASE timebank;
run command
    python seed.py
'''

import mysql.connector
import random
from datetime import datetime

import time

time.sleep(10)

# CONNECT TO MYSQL
conn = mysql.connector.connect(
    host="db",
    user="root",
    password="rootpass",
    database="timebank"
)

cursor = conn.cursor()

# ----------------------
# CREATE TABLES
# ----------------------

cursor.execute("""
CREATE TABLE IF NOT EXISTS USER (
    userID INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255),
    password VARCHAR(255),
    timeBalance INT
)
""")

cursor.execute("""
CREATE TABLE IF NOT EXISTS POST (
    postID INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    timeCost INT,
    creatorID INT,
    workerID INT,
    status ENUM('available', 'pending', 'completed')
)
""")

cursor.execute("""
CREATE TABLE IF NOT EXISTS USERPOSTINTEREST (
    interestID INT AUTO_INCREMENT PRIMARY KEY,
    userID INT,
    postID INT,
    createdAt DATETIME
)
""")

# ----------------------
# CLEAR DATA
# ----------------------

cursor.execute("DELETE FROM USERPOSTINTEREST")
cursor.execute("DELETE FROM POST")
cursor.execute("DELETE FROM USER")

# ----------------------
# INSERT USERS
# ----------------------

for i in range(10):
    cursor.execute("""
    INSERT INTO USER (username, password, timeBalance)
    VALUES (%s, %s, %s)
    """, (
        f"user{i}",
        "password",
        random.randint(0, 20)
    ))

# ----------------------
# INSERT POSTS
# ----------------------

statuses = ["available", "pending", "completed"]

for i in range(20):
    cursor.execute("""
    INSERT INTO POST (title, description, timeCost, creatorID, workerID, status)
    VALUES (%s, %s, %s, %s, %s, %s)
    """, (
        f"Task {i}",
        "Help needed with something",
        round(random.uniform(1, 5), 2),
        random.randint(1, 10),
        None,
        random.choice(statuses)
    ))

# ----------------------
# INSERT INTERESTS
# ----------------------

for i in range(30):
    cursor.execute("""
    INSERT INTO USERPOSTINTEREST (userID, postID, createdAt)
    VALUES (%s, %s, %s)
    """, (
        random.randint(1, 10),
        random.randint(1, 20),
        datetime.now()
    ))

conn.commit()
cursor.close()
conn.close()

print("✅ MySQL database seeded!")