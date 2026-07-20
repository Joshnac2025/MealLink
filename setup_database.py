"""
MealLink Database Setup Script
Creates the database and imports the schema
"""
import mysql.connector
import os
from dotenv import load_dotenv

load_dotenv()

# Get MySQL credentials from .env
MYSQL_HOST = os.getenv('MYSQL_HOST', 'localhost')
MYSQL_USER = os.getenv('MYSQL_USER', 'root')
MYSQL_PASSWORD = os.getenv('MYSQL_PASSWORD', '')
MYSQL_DB = os.getenv('MYSQL_DB', 'meallink')

def setup_database():
    """Create database and import schema"""
    try:
        # Connect to MySQL server (without database)
        connection = mysql.connector.connect(
            host=MYSQL_HOST,
            user=MYSQL_USER,
            password=MYSQL_PASSWORD
        )
        cursor = connection.cursor()
        
        # Create database
        print(f"Creating database '{MYSQL_DB}'...")
        cursor.execute(f"CREATE DATABASE IF NOT EXISTS {MYSQL_DB}")
        print(f"✅ Database '{MYSQL_DB}' created successfully")
        
        # Close connection to server
        cursor.close()
        connection.close()
        
        # Connect to the new database
        connection = mysql.connector.connect(
            host=MYSQL_HOST,
            user=MYSQL_USER,
            password=MYSQL_PASSWORD,
            database=MYSQL_DB
        )
        cursor = connection.cursor()
        
        # Read and execute schema.sql
        print("Importing schema from Sql/schema.sql...")
        schema_path = os.path.join(os.path.dirname(__file__), 'Sql', 'schema.sql')
        
        with open(schema_path, 'r', encoding='utf-8') as schema_file:
            schema_sql = schema_file.read()
            
        # Split by semicolon and execute each statement
        statements = [stmt.strip() for stmt in schema_sql.split(';') if stmt.strip()]
        
        for statement in statements:
            if statement:
                cursor.execute(statement)
        
        connection.commit()
        print("✅ Schema imported successfully")
        
        # Show created tables
        cursor.execute("SHOW TABLES")
        tables = cursor.fetchall()
        print("\n📊 Tables created:")
        for table in tables:
            print(f"  - {table[0]}")
        
        cursor.close()
        connection.close()
        
        print("\n✅ Database setup completed successfully!")
        print(f"\nYou can now run the application:")
        print(f"  python app.py")
        
    except mysql.connector.Error as err:
        print(f"❌ Error: {err}")
        return False
    
    return True

if __name__ == "__main__":
    print("=" * 50)
    print("MealLink Database Setup")
    print("=" * 50)
    setup_database()
