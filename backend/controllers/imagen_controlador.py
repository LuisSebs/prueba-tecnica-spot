from flask import Blueprint, jsonify
from models import model_imagen
from Utils.getImagen import getImagen

imagen = Blueprint('imagen', __name__)

@imagen.route('/get_imagenes', methods=['POST', 'GET'])
def get_imagenes():
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


