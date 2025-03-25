import http.client
import json


conn = http.client.HTTPSConnection("moviesdatabase.p.rapidapi.com")

def search_title(query: str = ""):
    pass
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

def _api_search(query: str = ""):
    headers = {
        'x-rapidapi-key': "55ac4600b1msh1c5fb05def23611p1d9dfcjsncc23727ca870",
        'x-rapidapi-host': "moviesdatabase.p.rapidapi.com"
    }
    url = "/titles/search/title/%7Btitle%7D?exact=true&titleType=movie"
    

def _make_request(url: str,method: str = "GET", headers: dict = {}, body: dict = {}):

    conn.request("GET", url, headers=headers)

    res = conn.getresponse()
    data = res.read()

    
    print(data.decode("utf-8"))
#enddef
