import io
from flask import Blueprint, jsonify
from models import model_imagen
from base64 import encodebytes


imagen = Blueprint('imagen', __name__)

@imagen.route('/get_imagenes', methods=['POST', 'GET'])
def get_imagenes():
    # Imagenes
    imagenes = model_imagen.get_imagenes()
    # Imagenes como diccionario
    imagenes_json = []
    for i in imagenes:
        with open(i.ruta, 'rb') as f:
            img = f.read()
            img_base64 = base64.b64encode(img).decode('utf-8')
        imagenes_json.append({
            "idImagen": i.idImagen,
            "idAutomovil": i.idAutomovil,
            "imagen": img_base64
        })
    # JSON
    return jsonify({"data": imagenes})

@imagen.route('/get_imagenes_by_idAutomovil/<idAutomovil>', methods=['POST','GET'])
def get_imagenes_by_idAutomovil(idAutomovil):
    # Imagenes
    imagenes = model_imagen.get_imagenes_by_idAutomovil(idAutomovil=idAutomovil)
    # Imagenes como diccionario
    imagenes_json = []
    for i in imagenes:
        with open("imagenes_productos/"+i.ruta, 'rb') as f:
            img = f.read()
            img_base64 = base64.b64encode(img).decode('utf-8')
        imagenes_json.append({
            "idImagen": i.idImagen,
            "idAutomovil": i.idAutomovil,
            "imagen": img_base64
        })
    # JSON
    return jsonify({"data": imagenes})


