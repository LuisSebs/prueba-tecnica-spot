from flask import Flask
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

@app.route('/')
def main():
    return 'Hola mundo!'

if __name__ == '__main__':
    app.run(debug=True)

