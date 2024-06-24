from flask import Blueprint, jsonify
from models import model_automovil

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
