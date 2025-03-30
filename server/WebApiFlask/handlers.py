import http.client
from models import *
import json


conn = http.client.HTTPSConnection("moviesdatabase.p.rapidapi.com")

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

def _database_search(query: str = ""):
    pass
#enddef

def _database_library():
    films = Film.query.all()
    result = [film.to_dict() for film in films]
    return result
#enddef

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

