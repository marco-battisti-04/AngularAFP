
from flask import Flask, request, jsonify
from models import db

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

if __name__ == '__main__':
    app.run(debug=True)
#endif

# API LINK
# "https://rapidapi.com/SAdrian/api/moviesdatabase/playground/apiendpoint_8a309a21-6ba0-4c48-8653-9d545f6fc946"'
