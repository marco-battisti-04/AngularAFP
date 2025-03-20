from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import backref

db = SQLAlchemy()

film_author = db.Table(
    'film_author',
    db.Model.metadata,
    db.Column('film_id', db.Integer, db.ForeignKey('film.id'), primary_key=True),
    db.Column('author_id', db.Integer, db.ForeignKey('author.id'), primary_key=True)
)

film_genre = db.Table('film_genre',
    db.Model.metadata,
    db.Column('film_id', db.Integer, db.ForeignKey('film.id'), primary_key=True),
    db.Column('genre_id', db.Integer, db.ForeignKey('genre.id'), primary_key=True)
)

class BaseModel(db.Model):

    __abstract__ = True
    _methods_to_avoid = ['save', 'to_dict']

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
#endclass

class Film(BaseModel):

    _classname = 'Film'
    __tablename__ = 'film'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    year = db.Column(db.Integer, nullable=False)
    short_description = db.Column(db.String(1000), nullable=False)
    duration = db.Column(db.Integer, nullable=False)
    rating = db.Column(db.Float, nullable=False)

    # Many to many relationship with Author
    authors = db.relationship('Author', secondary=film_author, backref=backref('films', lazy='dynamic'))

    # groups = db.relationship("Group", secondary=user_group_association, back_populates="users")
    # Many to many relationship with Genre
    genres = db.relationship('Genre', secondary=film_genre, backref=backref('films', lazy='dynamic'))

    
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