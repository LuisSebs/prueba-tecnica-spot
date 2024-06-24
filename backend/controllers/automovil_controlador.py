from flask import Blueprint
from models import model_automovil

automovil = Blueprint('automovil', __name__)

@automovil.route('/get_automoviles', methods=['POST','GET'])
def get_automoviles():
    automoviles = model_automovil.get_automoviles()
    print(automoviles)
    return "automoviles"