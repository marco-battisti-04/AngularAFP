
from app import db

film_author = db.Table('film_author',
    db.Column('film_id', db.Integer, db.ForeignKey('film.id'), primary_key=True),
    db.Column('author_id', db.Integer, db.ForeignKey('author.id'), primary_key=True)
)

film_genre = db.Table('film_genre',
    db.Column('film_id', db.Integer, db.ForeignKey('film.id'), primary_key=True),
    db.Column('genre_id', db.Integer, db.ForeignKey('genre.id'), primary_key=True)
)

class Film(db.Model):

    _classname = 'Film'
    __tablename__ = 'film'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    year = db.Column(db.Integer, nullable=False)
    short_description = db.Column(db.String(1000), nullable=False)
    duration = db.Column(db.Integer, nullable=False)
    rating = db.Column(db.Float, nullable=False)

    # Many to many relationship with Author
    authors = db.relationship('Author', secondary=film_author, backref=db.backref('films', lazy='dynamic'))

    # Many to many relationship with Genre
    genres = db.relationship('Genre', secondary=film_genre, backref=db.backref('films', lazy='dynamic'))

    def __repr__(self):
        return f'<Film {self.title}>'
    #enddef
#endclass

class Author(db.Model):

    _classname = 'Author'
    __tablename__ = 'author'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    surname = db.Column(db.String(100), nullable=False)

    def __repr__(self):
        return f'<Author {self.name} {self.surname}>'
    #enddef
#endclass


class Genre(db.Model):

    _classname = 'Genre'
    __tablename__ = 'genre'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)

    def __repr__(self):
        return f'<Genre {self.name}>'
    #enddef
#endclass