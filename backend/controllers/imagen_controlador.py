import io
from flask import Blueprint, jsonify
from models import model_imagen
from base64 import encodebytes
from PIL import Image

imagen = Blueprint('imagen', __name__)

@imagen.route('/get_imagenes', methods=['POST', 'GET'])
def get_imagenes():
    # Imagenes
    imagenes = model_imagen.get_imagenes()
    # Imagenes como diccionario
    imagenes_dic = []
    for i in imagenes:
        pil_img = Image.open("imagenes_productos/"+i.ruta, mode='r')
        byte_arr = io.BytesIO()
        pil_img.save(byte_arr, format='JPEG')
        encoded_img = encodebytes(byte_arr.getvalue()).decode('ascii')
        imagenes_dic.append({
            "idImagen": i.idImagen,
            "idAutomovil": i.idAutomovil,
            "imagen": encoded_img
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
        pil_img = Image.open("imagenes_productos/"+i.ruta, mode='r')
        byte_arr = io.BytesIO()
        pil_img.save(byte_arr, format='JPEG')
        encoded_img = encodebytes(byte_arr.getvalue()).decode('ascii')
        imagenes_dic.append({
            "idImagen": i.idImagen,
            "idAutomovil": i.idAutomovil,
            "imagen": encoded_img
        })
    # JSON
    return jsonify({"data": imagenes_dic})


