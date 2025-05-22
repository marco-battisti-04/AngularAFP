import http.client
import requests
from models import *
import json

import configparser

conn = http.client.HTTPSConnection("moviesdatabase.p.rapidapi.com")

##################
# TMDB FUNCTIONS #
##################

def search_title(query: str = "", page: int = 1, adult: str = "false"):
    url = f"/search/movie?query={query}&include_adult={adult}&language=en-US&page={page}"
    return _api_search(url=url, method="GET")
#enddef

def search_genre(query: str = ""):
    pass
#enddef

def search_actors(query: str = ""):
    pass
#enddef


######################
# DATABASE FUNCTIONS #
######################

def database_all_films():
    films = Film.query.all()
    result = [film.to_dict() for film in films]
    return result
#enddef

def database_search_film(query: str = ""):
    films = Film.query.filter(Film.title.icontains(query))
    result = [film.to_dict() for film in films]
    return result
#enddef

def database_get_film(id: int):
    pass
#enddef

#############
# UTILITIES #
#############

def _api_search(url: str = "", method: str ="GET", body: dict = {}):


    # Read the configuration file
    config = configparser.ConfigParser()
    config.read('application.cfg')

    access_token = str(config['Database']['API_KEY_TOKEN'])

    headers = {
        "accept": "application/json",
        "Content-Type": "application/json;charset=utf-8",
        "Authorization": f"Bearer {access_token}"
    }

    return _make_request(url, method=method, headers=headers, body=body)
#enddef

def _make_request(url: str, method: str = "GET", headers: dict = {}, body: dict = {}):

    base_url = 'https://api.themoviedb.org/3'

    if method == "GET":
        response = requests.get(f"{base_url}{url}", headers=headers)

        data = json.loads(response.text)
        return data['results']
    #endif
#enddef

