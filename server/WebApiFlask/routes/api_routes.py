from flask import Blueprint, jsonify, request
from handlers import *
from models import db

# Create a Blueprint
api = Blueprint('film', __name__)

@api.route('/film', methods=['POST'])
def create_film():
    return jsonify({"message": "Not implemented yet"}), 200
#enddef

@api.route('/genre', methods=['POST'])
def create_genre():
    return jsonify({"message": "Not implemented yet"}), 200
    data = request.json
    new_genre = Genre(**data)
    db.session.add(new_genre)
    db.session.commit()
    return jsonify({"message": "Genre created", "id": new_genre.id}), 201

@api.route("/author", methods=["POST"])
def create_author():
    return jsonify({"message": "Not implemented yet"}), 200
#enddef

# @api.route('/groups/<int:group_id>/users', methods=['GET'])
# def get_users_in_group(group_id):
#     group = Group.query.get(group_id)
    
#     if group:
#         users = [{"id": user.id, "name": user.name} for user in group.users]
#         return jsonify(users), 200
#     else:
#         return jsonify({"message": "Group not found"}), 404



# THE MOVIE DATABASE

# https://developer.themoviedb.org/reference/search-movie
# https://developer.themoviedb.org/docs/image-basics
# https://www.themoviedb.org/settings/api
# https://developer.themoviedb.org/docs/getting-started
# https://developer.themoviedb.org/docs/getting-started
# https://developer.themoviedb.org/reference/search-movie

# https://developer.themoviedb.org/reference/movie-images

# @api.route('/films', methods=['GET'])
# def fetch_all_films():
#     films_dict = database_all_films()
#     return jsonify(films_dict), 200
# #enddef

# @api.route("/film/:query", methods=['GET'])
# def search_film(query: str = ""):
#     films_dict = database_search_film(query)
#     return jsonify(films_dict), 200
# #enddef


#region ---- LIBRARY ROUTES ----- #

@api.route("/library/title/:query", methods=['GET'])
def search_films(query: str = ""):
    return jsonify(database_search_film(query)), 200
#enddef

@api.route("/library/all", methods=['GET'])
def get_films():
    return jsonify(database_all_films()), 200
#enddef

@api.route("/library/:id", methods=['GET'])
def get_film(id: int):
    return jsonify({database_get_film(id)}), 200
#enddef

#endregion - LIBRARY ROUTES ----- #












@api.route("/test", methods=['GET'])
def test_add_film():

    films = Film.query.all()
    return [film.to_dict() for film in films], 200
#enddef

