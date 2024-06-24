from alchemyClasses import db
from sqlalchemy import Column, Integer, ForeignKey, Text

class Imagen(db.Model):

    __tablename__ = 'Imagen'

    idImagen = Column(Integer, primary_key=True, nullable=False, unique=True, autoincrement=True)
    idAutomovil = Column(Integer, ForeignKey('Automovil.idAutomovil'), nullable=False)
    ruta = Column(Text, nullable=False)

    def __init__(self, idAutomovil, ruta) -> None:
        self.idAutomovil = idAutomovil
        self.ruta = ruta

    def __str__(self) -> str:
        return f"Imagen:\n\tidImagen: {self.idImagen}\n\tidAutomovil: {self.idAutomovil}\n\truta: {self.ruta}"