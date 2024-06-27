from alchemyClasses import db
from sqlalchemy import text
from alchemyClasses.Automovil import Automovil
from alchemyClasses.Imagen import Imagen

def get_automoviles():
    """
    Obtiene todos los automoviles almacenados en la base de datos.

    Returns:
    --------
    list
        Lista de objetos Automovil, representando todos los automoviles en la base de datos.
    """
    return Automovil.query.all()

def get_marcas():
    """
    Obtiene todas las marcas de automoviles almacenadas en la base de datos.

    Returns:
    --------
    sqlalchemy.orm.query.Query
        Objeto de consulta SQLAlchemy que devuelve marcas de automoviles.
    """
    # text ya tiene incluido la sentencia SELECT
    return db.session.query(text('DISTINCT marca FROM Automovil'))

def get_modelos():
    """
    Obtiene todos los modelos de automoviles almacenados en la base de datos.

    Returns:
    --------
    sqlalchemy.orm.query.Query
        Objeto de consulta SQLAlchemy que devuelve modelos de automoviles.
    """
    # text ya tiene incluido la sentencia SELECT
    return db.session.query(text('DISTINCT modelo FROM Automovil'))

def get_years():
    """
    Obtiene todos los años de automoviles almacenados en la base de datos.

    Returns:
    --------
    sqlalchemy.orm.query.Query
        Objeto de consulta SQLAlchemy que devuelve años de automoviles.
    """
    # text ya tiene incluido la sentencia SELECT
    return db.session.query(text('DISTINCT year FROM Automovil'))

def get_colores():
    """
    Obtiene todos los colores de automoviles almacenados en la base de datos.

    Returns:
    --------
    sqlalchemy.orm.query.Query
        Objeto de consulta SQLAlchemy que devuelve colores de automoviles.
    """
    # text ya tiene incluido la sentencia SELECT
    return db.session.query(text('DISTINCT color FROM Automovil'))

def get_motores():
    """
    Obtiene todos los tipos de motor de automoviles almacenados en la base de datos.

    Returns:
    --------
    sqlalchemy.orm.query.Query
        Objeto de consulta SQLAlchemy que devuelve tipos de motor de automoviles.
    """
    # text ya tiene incluido la sentencia SELECT
    return db.session.query(text('DISTINCT tipoMotor FROM Automovil'))

def get_transmisiones():
    """
    Obtiene todos los tipos de transmision de automoviles almacenados en la base de datos.

    Returns:
    --------
    sqlalchemy.orm.query.Query
        Objeto de consulta SQLAlchemy que devuelve tipos de transmision de automoviles.
    """
    # text ya tiene incluido la sentencia SELECT
    return db.session.query(text('DISTINCT transmision FROM Automovil'))
