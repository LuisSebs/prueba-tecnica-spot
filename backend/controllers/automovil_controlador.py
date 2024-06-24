from flask import Blueprint, jsonify
from models import model_automovil
from models import model_imagen
from Utils.getImagen import getImagen

automovil = Blueprint('automovil', __name__)

@automovil.route('/get_automoviles', methods=['POST','GET'])
def get_automoviles():
    # Automoviles
    automoviles = model_automovil.get_automoviles()
    # Automoviles como diccionarios
    automoviles = [{
        "idAutomovil": a.idAutomovil,
        "marca": a.marca,
        "modelo": a.modelo,
        "year": a.year,
        "precio": a.precio,
        "color": a.color,
        "tipoMotor": a.tipoMotor,
        "transmision": a.transmision,
        "kilometraje": a.kilometraje,
        "fechaEntrada": a.fechaEntrada,
        "stock": a.stock
    } for a in automoviles]
    # JSON
    return jsonify({ "data": automoviles })

@automovil.route('/get_automoviles_con_imagenes', methods=['POST', 'GET'])
def get_automoviles_con_imagen():
    # Automoviles
    automoviles = model_automovil.get_automoviles()
    # Automoviles como diccionarios
    automoviles_dic = []
    for a in automoviles:
        imagenes_automovil = model_imagen.get_imagenes_by_idAutomovil(a.idAutomovil)
        automoviles_dic.append(
            {
                "idAutomovil": a.idAutomovil,
                "marca": a.marca,
                "modelo": a.modelo,
                "year": a.year,
                "precio": a.precio,
                "color": a.color,
                "tipoMotor": a.tipoMotor,
                "transmision": a.transmision,
                "kilometraje": a.kilometraje,
                "fechaEntrada": a.fechaEntrada,
                "stock": a.stock,
                "imagenes": [{ "imagen": getImagen(i.ruta) } for i in imagenes_automovil]
            }
        )
    return jsonify({ "data": automoviles_dic})
