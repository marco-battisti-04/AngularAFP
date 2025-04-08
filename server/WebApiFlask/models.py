from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import backref

db = SQLAlchemy()

# film_author = db.Table(
#     'film_author',
#     db.Model.metadata,
#     db.Column('film_id', db.Integer, db.ForeignKey('film.id'), primary_key=True),
#     db.Column('author_id', db.Integer, db.ForeignKey('author.id'), primary_key=True)
# )

# film_genre = db.Table('film_genre',
#     db.Model.metadata,
#     db.Column('film_id', db.Integer, db.ForeignKey('film.id'), primary_key=True),
#     db.Column('genre_id', db.Integer, db.ForeignKey('genre.id'), primary_key=True)
# )

class BaseModel(db.Model):

    __abstract__ = True
    _methods_to_avoid = ['save', 'to_dict']

    id = db.Column(db.Integer, primary_key=True, autoincrement = True)

    def __repr__(self):
        return f'<{self._classname} {self.title}>'
    #enddef

    def save(self):
        db.session.add(self)
        db.session.commit()
    #enddef

    def to_dict(self):
        result = {}
        for key, value in vars(self).items():
            if not key.startswith('_') and key not in self._methods_to_avoid:
                result[key] = value
        return result
    #enddef

    def __repr__(self):
        return f'<{self._classname} {self.name}>'
    #enddef
#endclass

class Film(BaseModel):

    _classname = 'Film'
    __tablename__ = 'film'

    movie_api_id = db.Column(db.Integer, nullable=False, unique=True)
    adult = db.Column(db.Boolean, default=False, nullable=False)
    backdrop_path = db.Column(db.Text, nullable=True)

    original_language = db.Column(db.String(255), nullable=False)
    original_title = db.Column(db.String(255), nullable=False)
    overview = db.Column(db.Text, nullable=False)
    popularity = db.Column(db.Float, nullable=True)
    poster_path = db.Column(db.Text, nullable=True)
    release_date = db.Column(db.Date, nullable=False)
    title = db.Column(db.String(255), nullable=False)
    runtime = db.Column(db.Integer, nullable=True) # minutes

    vote_average = db.Column(db.Float, nullable=True)
    personal_vote = db.Column(db.Float, nullable=True)
    vote_count = db.Column(db.Integer, nullable=True)

    #enddef
#endclass

# class Author(BaseModel):

#     _classname = 'Author'
#     __tablename__ = 'author'

#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(100), nullable=False)
#     surname = db.Column(db.String(100), nullable=False)

#     def __repr__(self):
#         return f'<Author {self.name} {self.surname}>'
#     #enddef
# #endclass


# class Genre(BaseModel):

#     _classname = 'Genre'
#     __tablename__ = 'genre'

#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(100), nullable=False)

#     def __repr__(self):
#         return f'<Genre {self.name}>'
#     #enddef
# #endclass