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

@automovil.route('/get_marcas', methods=['POST', 'GET'])
def get_marcas():
    query = model_automovil.get_marcas()
    marcas = [row[0] for row in query]
    return jsonify({ "data": marcas})

@automovil.route('/get_modelos', methods=['POST', 'GET'])
def get_modelos():
    query = model_automovil.get_modelos()
    modelos = [row[0] for row in query]
    return jsonify({ "data": modelos})

@automovil.route('/get_years', methods=['POST', 'GET'])
def get_years():
    query = model_automovil.get_years()
    years = [row[0] for row in query]
    return jsonify({ "data": years})

@automovil.route('/get_colores', methods=['POST', 'GET'])
def get_colores():
    query = model_automovil.get_colores()
    colores = [row[0] for row in query]
    return jsonify({ "data": colores})

@automovil.route('/get_motores', methods=['POST', 'GET'])
def get_motores():
    query = model_automovil.get_motores()
    motores = [row[0] for row in query]
    return jsonify({ "data": motores})

@automovil.route('/get_transmisiones', methods=['POST', 'GET'])
def get_transmisiones():
    query = model_automovil.get_transmisiones()
    transmisiones = [row[0] for row in query]
    return jsonify({ "data": transmisiones})


