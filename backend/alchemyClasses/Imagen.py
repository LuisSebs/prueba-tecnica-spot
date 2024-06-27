from alchemyClasses import db
from sqlalchemy import Column, Integer, ForeignKey, Text

class Imagen(db.Model):

    """
        ORM Imagen

        Representa la tabla 'Imagen' en la base de datos.

        Atributos:
        ------
            idImagen : int
                ID único de la imagen, se autoincrementa y es la clave primaria.
            idAutomovil : int
                ID del automovil al que pertenece la imagen, es una clave foranea que referencia a la tabla Automovil.
            ruta : str
                Ruta donde se almacena la imagen.
    """

    __tablename__ = 'Imagen'

    idImagen = Column(Integer, primary_key=True, nullable=False, unique=True, autoincrement=True)
    idAutomovil = Column(Integer, ForeignKey('Automovil.idAutomovil'), nullable=False)
    ruta = Column(Text, nullable=False)

    def __init__(self, idAutomovil, ruta) -> None:
        self.idAutomovil = idAutomovil
        self.ruta = ruta

    def __str__(self) -> str:
        return f"Imagen:\n\tidImagen: {self.idImagen}\n\tidAutomovil: {self.idAutomovil}\n\truta: {self.ruta}"