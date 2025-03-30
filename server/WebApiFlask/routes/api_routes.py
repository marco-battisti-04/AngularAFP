from flask import Blueprint, jsonify, request
from handlers import _database_library
from models import db

# Create a Blueprint
api = Blueprint('film', __name__)

@api.route('/film', methods=['POST'])
def create_film():
    return jsonify({"message": "Not implemented" }), 200
#enddef

@api.route('/genre', methods=['POST'])
def create_genre():
    return jsonify({"message": "Not implemented" }), 200
    data = request.json
    new_genre = Genre(**data)
    db.session.add(new_genre)
    db.session.commit()
    return jsonify({"message": "Genre created", "id": new_genre.id}), 201

# @api.route('/groups/<int:group_id>/users', methods=['GET'])
# def get_users_in_group(group_id):
#     group = Group.query.get(group_id)
    
#     if group:
#         users = [{"id": user.id, "name": user.name} for user in group.users]
#         return jsonify(users), 200
#     else:
#         return jsonify({"message": "Group not found"}), 404




@api.route('/films', methods=['GET'])
def fetch_all_films():
    films_dict = _database_library()
    return jsonify(films_dict), 200
#enddef
