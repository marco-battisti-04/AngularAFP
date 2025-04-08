import http.client
import requests
from models import *
import json


conn = http.client.HTTPSConnection("moviesdatabase.p.rapidapi.com")

##################
# TMDB FUNCTIONS #
##################

def search_title(query: str = "", page: int = 1, adult: str = "false"):
    url = f"/search/movie?query={query}&include_adult={adult}&language=en-US&page={page}"
    _api_search(url=url, method="GET")
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
    object = Film.query.get(id)
    if object:
        return object.to_dict()
    else:
        return {"message": f"Object with id '{id}' in class '{Film.__name__}' was not found"}
    #endif
#enddef

#############
# UTILITIES #
#############

async def _api_search(url: str = "", method: str ="GET", body: dict = {}):
    headers = {
        # 'x-rapidapi-key': "55ac4600b1msh1c5fb05def23611p1d9dfcjsncc23727ca870",
        # 'x-rapidapi-host': "moviesdatabase.p.rapidapi.com"
    }

    # if method in ["POST", "PUT", "DELETE", "PATCH", "GET"]:
    #     return await _make_request(url, method=method, headers=headers, body=body)
    # else:
    #     return {"message": "Method not allowed"}
#enddef

async def _make_request(url: str, method: str = "GET", headers: dict = {}, body: dict = {}):

    
    base_url = 'https://api.themoviedb.org/3'
    access_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTYwNDc1MDJhZWNiZmNmMTQ2YzVhZjE1Y2Y0Y2U5NCIsIm5iZiI6MTc0NDEwMDc3NC44MjA5OTk5LCJzdWIiOiI2N2Y0ZGRhNjZjMzU4M2M5NzU5OTY3ZjMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.R6Z8-vb9eHc75sMaOHphfs8xEHUcjFlMc5_uU9sAASY"

    headers = {
        "accept": "application/json",
        "Content-Type": "application/json;charset=utf-8",
        "Authorization": f"Bearer {access_token}"
    }

    if method == "GET":
        response = requests.get()

    if method == "POST":
        pass
    if method == "PUT":
        pass
    if method == "DELETE":
        pass
    if method == "PATCH":
        pass

    # await conn.request(method, url, headers=headers)

    # res = conn.getresponse()
    # data = res.read()

    # result = json.loads(data.decode("utf-8"))

    # return result
#enddef

# FIXME: do not commit
# https://rapidapi.com/SAdrian/api/moviesdatabase/playground/apiendpoint_ac984b70-5a8c-4b09-9ef8-8a4e52389c47

