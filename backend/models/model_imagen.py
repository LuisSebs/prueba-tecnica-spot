from alchemyClasses import db
from alchemyClasses.Imagen import Imagen

def get_imagenes():
    """
    Obtiene todas las imagenes de la base de datos.

    Returns:
    --------
    list
        Lista de objetos Imagen, representando todas las imagenes almacenadas.
    """
    return Imagen.query.all()

def get_imagenes_by_idAutomovil(idAutomovil):
    """
    Obtiene todas las imagenes asociadas a un automovil especifico segun su ID.

    Parameters:
    -----------
    idAutomovil : int
        ID del automovil del cual se desean obtener las imagenes.

    Returns:
    --------
    list
        Lista de objetos Imagen asociados al automovil especificado por idAutomovil.
    """
    return Imagen.query.filter_by(idAutomovil=idAutomovil).all()