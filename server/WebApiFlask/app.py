from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy

# FIXME: circular import somehow
# from models import Film
import configparser


app = Flask(__name__)
config = configparser.ConfigParser()

config.read('application.cfg')
app.debug = config['App']['DEBUG']


app.config['SQLALCHEMY_DATABASE_URI'] = config['Database']['SQLALCHEMY_DATABASE_URI']
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = config['Database']['SQLALCHEMY_TRACK_MODIFICATIONS']
db = SQLAlchemy(app)



with app.app_context():
    db.create_all()

prefix = f'/api/v{int(config["App"]["VERSION"])}'

@app.route(f'{prefix}/films', methods=['GET'])
def get_all_films():
    films = Film.query.all()
    
    # for film in films:
    #     film_vars = {key: value for key, value in vars(film).items() if not key.startswith('_')}


    # return jsonify([{fil: film.to_dict()} for film in films])
    return {'films': [film.to_dict() for film in films]}
#enddef

@app.route(f'{prefix}/film', methods=['POST'])
def add_new_film():
    from models import Film

    print("test")
    # data = request.get_json()
    # film = Film(**data)
    film = Film(title='Test Film', year=2023, short_description='Test Description', duration=120, rating=8.5)

    db.session.add(film)
    db.session.commit()
    return {'id': film.id}

app.run()

# API LINK
# "https://rapidapi.com/SAdrian/api/moviesdatabase/playground/apiendpoint_8a309a21-6ba0-4c48-8653-9d545f6fc946"