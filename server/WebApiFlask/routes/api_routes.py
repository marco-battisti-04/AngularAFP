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
def library_search_films(query: str = ""):
    return jsonify(database_search_film(query)), 200
#enddef

@api.route("/library/all", methods=['GET'])
def library_get_films():
    return jsonify(database_all_films()), 200
#enddef

@api.route("/library/get/:id", methods=['GET'])
def library_get_film(id: int):
    return jsonify({database_get_film(id)}), 200
#enddef

@api.route("/library/delete/:id", methods=['DELETE'])
def library_delete_film(id: int):
    # return jsonify({"message": database_delete_film(id)}), 200
    pass
#enddef

@api.route("/library/update/:id", methods=['PUT'])
def library_update_film(id: int):
    # return jsonify({"message": database_update_film(id)}), 200
    pass
#enddef

@api.route("/library/add", methods=['POST'])
def library_add_film():
    # return jsonify({"message": database_add_film()}), 200
    response = {}
    # try:
    film = Film(title="Film 0", year=2023, short_description="test", duration=120, rating=5.0)

    # response["message"] = "Film added successfully"
    # response["id"] = 0# film.id
    # response['status'] = 200

    # author1 = Author(name="Author 1", surname="test").save()
    # author2 = Author(name="Author 2", surname="test").save()
    # author3 = Author(name="Author 3", surname="test").save()
    # author4 = Author(name="Author 4", surname="test").save()
    # author5 = Author(name="Author 5", surname="test").save()

    # genre1 = Genre(name="Genre 1").save()
    # genre2 = Genre(name="Genre 2").save()
    # genre3 = Genre(name="Genre 3").save()
    # genre4 = Genre(name="Genre 4").save()
    # genre5 = Genre(name="Genre 5").save()

    # Film(title="Film 1", year=2023, short_description="test", duration=120, rating=5.0).save()
    # Film(title="Film 2", year=2023, short_description="test", duration=120, rating=5.0).save()
    # Film(title="Film 3", year=2023, short_description="test", duration=120, rating=5.0).save()
    # Film(title="Film 4", year=2023, short_description="test", duration=120, rating=5.0).save()
    # Film(title="Film 5", year=2023, short_description="test", duration=120, rating=5.0).save()
    # Film(title="Film 6", year=2023, short_description="test", duration=120, rating=5.0).save()
    # Film(title="Film 7", year=2023, short_description="test", duration=120, rating=5.0).save()
    # Film(title="Film 8", year=2023, short_description="test", duration=120, rating=5.0).save()
    # Film(title="Film 9", year=2023, short_description="test", duration=120, rating=5.0).save()
    # Film(title="Film 10", year=2023, short_description="test", duration=120, rating=5.0).save()

    # except Exception as e:
    #     response["message"] = "Error while adding the film"
    #     response["id"] = -1
    #     response['status'] = 500

    return jsonify(response), 200
#enddef

#endregion - LIBRARY ROUTES ----- #



#region ---- SEARCH ROUTES ----- #

@api.route("/api/film/title/:query", methods=['GET'])
def api_search_film(query: str = ""):
    return  jsonify(search_title(query)), 200
    # return jsonify(database_search_film(query)), 200

#endregion - SEARCH ROUTES ----- #









@api.route("/test", methods=['GET'])
def test_add_film():

    films = Film.query.all()
    return [film.to_dict() for film in films], 200
#enddef

