from flask import Blueprint, jsonify
from models import model_imagen
from Utils.getImagen import getImagen

imagen = Blueprint('imagen', __name__)

@imagen.route('/get_imagenes', methods=['POST', 'GET'])
def get_imagenes():
    """
    Obtiene la lista de imagenes de automoviles.

    Returns:
    --------
    JSON
        Devuelve un objeto JSON con la lista de imagenes de automoviles en la base de datos.
    """
    # Imagenes
    imagenes = model_imagen.get_imagenes()
    # Imagenes como diccionario
    imagenes_dic = []
    for i in imagenes:
        
        imagenes_dic.append({
            "idImagen": i.idImagen,
            "idAutomovil": i.idAutomovil,
            "imagen": getImagen(i.ruta)
        })
    # JSON
    return jsonify({"data": imagenes_dic})

@imagen.route('/get_imagenes_by_idAutomovil/<idAutomovil>', methods=['POST','GET'])
def get_imagenes_by_idAutomovil(idAutomovil):
    """
    Obtiene la lista de imagenes de un automovil especifico.

    Parameters:
    -----------
    idAutomovil : str
        El ID del automovil del cual se desean obtener las imagenes.

    Returns:
    --------
    JSON
        Devuelve un objeto JSON con la lista de imagenes de un automovil especifico en la base de datos.
    """
    # Imagenes
    imagenes = model_imagen.get_imagenes_by_idAutomovil(idAutomovil=idAutomovil)
    # Imagenes como diccionario
    imagenes_dic = []
    for i in imagenes:
        imagenes_dic.append({
            "idImagen": i.idImagen,
            "idAutomovil": i.idAutomovil,
            "imagen": getImagen(i.ruta)
        })
    # JSON
    return jsonify({"data": imagenes_dic})


