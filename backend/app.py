from flask import Flask
from flask_cors import CORS
from alchemyClasses import db
from controllers.automovil_controlador import automovil
from controllers.imagen_controlador import imagen

app = Flask(__name__)

app.register_blueprint(automovil)
app.register_blueprint(imagen)

app.config['SQLALCHEMY_DATABASE_URI'] = "mysql+pymysql://sebs:sebsDev123!@localhost:3306/espot"
app.config.from_mapping(
    SECRET_KEY='dev'
)
db.init_app(app)

CORS(app)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)

