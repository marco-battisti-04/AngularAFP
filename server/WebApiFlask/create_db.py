# create_db.py

from app import app, db  # Import the app and db instance
from models import *# User, Group  # Import your models

# Create the database tables
# with app.app_context():
#     db.create_all()

def create_database():
    with app.app_context():
        db.create_all()
        print("Database created successfully.")

if __name__ == "__main__":
    create_database()
