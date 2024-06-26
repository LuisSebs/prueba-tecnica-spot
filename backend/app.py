from flask import Flask
from flask_cors import CORS
from alchemyClasses import db
from controllers.automovil_controlador import automovil
from controllers.imagen_controlador import imagen

app = Flask(__name__)

# Registra los blueprints de los controladores
app.register_blueprint(automovil)
app.register_blueprint(imagen)

# Configura la URI de la base de datos y la clave secreta
app.config['SQLALCHEMY_DATABASE_URI'] = "mysql+pymysql://sebs:sebsDev123!@localhost:3306/espot"
app.config.from_mapping(
    SECRET_KEY='dev'
)
# Inicializa la base de datos de SQLAlchemy con la aplicación Flask
db.init_app(app)

# Habilita CORS para permitir solicitudes cruzadas entre dominios
CORS(app)

if __name__ == '__main__':
    # Ejecuta la aplicación Flask en modo de desarrollo
    app.run(host='0.0.0.0', port=5000, debug=True)

