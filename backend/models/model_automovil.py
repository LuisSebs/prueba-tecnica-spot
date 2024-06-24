from alchemyClasses import db
from alchemyClasses.Automovil import Automovil
from alchemyClasses.Imagen import Imagen

def get_automoviles():
    return Automovil.query.all()