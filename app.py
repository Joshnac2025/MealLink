# app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_babel import Babel, gettext as _
from config import db
import os
from dotenv import load_dotenv
from urllib.parse import quote_plus

# import your blueprints as before
from routes.donor_routes import donor_bp
from routes.orphanage_routes import orphanage_bp
from routes.admin_routes import admin_bp
from routes.admin_dashboard_routes import admin_dashboard_bp
from routes.event_donation_routes import event_bp

app = Flask(__name__)

# --- Config ---
app.config['BABEL_DEFAULT_LOCALE'] = 'en'
app.config['BABEL_TRANSLATION_DIRECTORIES'] = 'translations'
app.config['LANGUAGES'] = ['en', 'hi', 'kn']

# SQLAlchemy config: load settings from .env
load_dotenv()

MYSQL_HOST = os.getenv('MYSQL_HOST', 'localhost')
MYSQL_USER = os.getenv('MYSQL_USER', 'root')
MYSQL_PASSWORD = os.getenv('MYSQL_PASSWORD', '')
MYSQL_DB = os.getenv('MYSQL_DB', 'meallink')

encoded_password = quote_plus(MYSQL_PASSWORD)

app.config['SQLALCHEMY_DATABASE_URI'] = (
    f"mysql+pymysql://{MYSQL_USER}:{encoded_password}@{MYSQL_HOST}:3306/{MYSQL_DB}"
)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

CORS(app, resources={r"/api/*": {"origins": ["http://localhost:5173", "http://127.0.0.1:5173"]}})

def get_locale():
    lang = request.args.get('lang')
    if lang in app.config['LANGUAGES']:
        return lang
    return app.config['BABEL_DEFAULT_LOCALE']

babel = Babel(app, locale_selector=get_locale)

# initialize db
db.init_app(app)

# register blueprints and routes (same as before)
app.register_blueprint(donor_bp, url_prefix='/api/donors')
app.register_blueprint(orphanage_bp, url_prefix='/api/orphanages')
app.register_blueprint(admin_bp, url_prefix='/api/admin')
app.register_blueprint(admin_dashboard_bp, url_prefix='/api/admin-dashboard')
app.register_blueprint(event_bp, url_prefix='/api/events')

@app.route('/api/')
def hello_api():
    return jsonify({
        "message": _("Welcome to MealLink! Making kindness accessible for everyone")
    })

@app.route('/')
def home():
    return _("Welcome to MealLink! Making kindness accessible for everyone")

if __name__ == '__main__':
    print("MealLink backend is running at http://127.0.0.1:5000")
    app.run(debug=True)