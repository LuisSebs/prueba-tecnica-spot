from alchemyClasses import db
from sqlalchemy import text
from alchemyClasses.Automovil import Automovil
from alchemyClasses.Imagen import Imagen

def get_automoviles():
    return Automovil.query.all()

def get_marcas():
    # text ya tiene incluido la sentencia SELECT
    return db.session.query(text('DISTINCT marca FROM Automovil'))

def get_modelos():
    # text ya tiene incluido la sentencia SELECT
    return db.session.query(text('DISTINCT modelo FROM Automovil'))

def get_years():
    # text ya tiene incluido la sentencia SELECT
    return db.session.query(text('DISTINCT year FROM Automovil'))

def get_colores():
    # text ya tiene incluido la sentencia SELECT
    return db.session.query(text('DISTINCT color FROM Automovil'))

def get_motores():
    # text ya tiene incluido la sentencia SELECT
    return db.session.query(text('DISTINCT tipoMotor FROM Automovil'))

def get_transmisiones():
    # text ya tiene incluido la sentencia SELECT
    return db.session.query(text('DISTINCT transmision FROM Automovil'))
