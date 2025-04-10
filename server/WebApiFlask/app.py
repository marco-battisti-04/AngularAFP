
from flask import Flask, request, jsonify
from models import db
from flask_cors import CORS

from routes.api_routes import api
from routes.swagger_routes import swagger

import configparser

# Read the configuration file
config = configparser.ConfigParser()
config.read('application.cfg')

# api prefix
api_prefix = f'/api/v{int(config["App"]["VERSION"])}'
swagger_prefix = f'/swagger/v{int(config["App"]["VERSION"])}'

# Database URI
DATABASE_URI = config['Database']['SQLALCHEMY_DATABASE_URI']

# Create the Flask app
app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_URI
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize SQLAlchemy
db.init_app(app)

##############
# API ROUTES #
#region ######

# api routes
app.register_blueprint(api, url_prefix=api_prefix)

# swagger routes
app.register_blueprint(swagger, url_prefix=swagger_prefix)

##################
# END API ROUTES #
#endregion #######

# CREATE DATABASE STRUCTURE
# from models import *# User, Group  # Import your models
# with app.app_context():
#     db.create_all()

if __name__ == '__main__':
    app.run(debug=bool(config['App']['DEBUG']), host='0.0.0.0', port=int(config['App']['PORT']))
#endif
