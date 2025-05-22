from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import backref

db = SQLAlchemy()

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


    def delete(self):
        db.session.delete(self)
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

    genre_ids = db.Column(db.Text, nullable=True) # comma separated list of genre ids
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
#endclass

class Comment(BaseModel):

    _classname = 'Comment'
    __tablename__ = 'comment'

    film_id = db.Column(db.Integer, db.ForeignKey('film.id'), nullable=False)
    name = db.Column(db.String(100), nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    description = db.Column(db.Text, nullable=False)
#endclass
