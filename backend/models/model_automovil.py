from alchemyClasses import db
from alchemyClasses.Automovil import Automovil

def get_automoviles():
    return Automovil.query.all()
