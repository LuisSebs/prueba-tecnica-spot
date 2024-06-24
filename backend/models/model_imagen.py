from alchemyClasses import db
from alchemyClasses.Imagen import Imagen

def get_imagenes():
    return Imagen.query.all()

def get_imagenes_by_idAutomovil(idAutomovil):
    return Imagen.query.filter_by(idAutomovil=idAutomovil).all()