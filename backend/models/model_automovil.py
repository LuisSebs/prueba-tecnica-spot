from alchemyClasses import db
from sqlalchemy import text
from alchemyClasses.Automovil import Automovil
from alchemyClasses.Imagen import Imagen

def get_automoviles():
    return Automovil.query.all()

def get_marcas():
    # text ya tiene incluido la sentencia SELECT
    return db.session.query(text('DISTINCT marca FROM Automovil'))
