from flask import Blueprint, jsonify, request
from models import *

# Create a Blueprint
api = Blueprint('film', __name__)

@api.route('/film', methods=['POST'])
def create_film():

    # data = request.json
    # new_film = Film(**data)
    # db.session.add(new_film)
    # db.session.commit()
    # film = Film(title='Test Film 4', year=2023, short_description='Test Description', duration=120, rating=8.5)
    # film2 = Film(title='Test Film 5', year=2023, short_description='Test Description', duration=120, rating=8.5)
    # film3 = Film(title='Test Film 6', year=2023, short_description='Test Description', duration=120, rating=8.5)

    # db.session.add(film)
    # db.session.add(film2)
    # db.session.add(film3)

    db.session.commit()
    # return jsonify({"message": "Film created", "id": film.id}), 201

@api.route('/genre', methods=['POST'])
def create_genre():
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
    films = Film.query.all()  # Use User.query.all() to fetch all users
    film_list = [{"id": film.id, "name": film.title} for film in films]
    return jsonify(film_list), 200
#enddef
