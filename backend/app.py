from flask import Flask
from alchemyClasses import db

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = "mysql+pymysql://sebs:sebsDev123!@localhost:3306/espot"
app.config.from_mapping(
    SECRET_KEY='dev'
)
db.init_app(app)

@app.route('/')
def main():
    return 'Hola mundo!'

if __name__ == '__main__':
    app.run()

