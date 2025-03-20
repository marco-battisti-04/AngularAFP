from flask import Blueprint, jsonify, request, render_template
from models import *

# Create a Blueprint
swagger = Blueprint('swagger', __name__)


@swagger.route('/home', methods=['GET'])
def get_swagger():
    return render_template('swagger.html')
#enddef
