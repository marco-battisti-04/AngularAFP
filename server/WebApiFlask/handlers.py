import http.client
from models import *
import json


conn = http.client.HTTPSConnection("moviesdatabase.p.rapidapi.com")

#################
# RAPIDAPI FUNCTIONS #
#################

def search_title(query: str = "", exact: bool = False, titleType: str ="movie"):
    exact = "true" if exact else "false"
    url = f"/titles/search/title/{query}?exact={exact}&titleType={titleType}"
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

#region AUTHORS

def database_all_authors():
    authors = Author.query.all()
    result = [item.to_dict() for item in authors]
    return result
#enddef

def database_search_author(query: str = ""):
    authors = Author.query.filter(Author.name.icontains(query)).all()
    result = [author.to_dict() for author in authors]
    return result
#enddef

def database_edit_author():
    # TODO: implement
    pass
#enddef

def database_delete_author(id: int):
    # TODO: implement
    pass
#enddef
#endregion AUTHORS

def database_search_genre(query: str = ""):
    genres = Genre.query.filter(Genre.name.icontains(query)).all()
    result = [genre.to_dict() for genre in genres]
    return result
#enddef




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
        'x-rapidapi-key': "55ac4600b1msh1c5fb05def23611p1d9dfcjsncc23727ca870",
        'x-rapidapi-host': "moviesdatabase.p.rapidapi.com"
    }

    if method in ["POST", "PUT", "DELETE", "PATCH", "GET"]:
        return await _make_request(url, method=method, headers=headers, body=body)
    else:
        return {"message": "Method not allowed"}
#enddef

async def _make_request(url: str, method: str = "GET", headers: dict = {}, body: dict = {}):

    await conn.request(method, url, headers=headers)

    res = conn.getresponse()
    data = res.read()

    result = json.loads(data.decode("utf-8"))

    return result
#enddef

# FIXME: do not commit
# https://rapidapi.com/SAdrian/api/moviesdatabase/playground/apiendpoint_ac984b70-5a8c-4b09-9ef8-8a4e52389c47

