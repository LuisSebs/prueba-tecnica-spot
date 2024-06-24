from alchemyClasses import db
from sqlalchemy import Column, Integer, String, Float, Date

class Automovil(db.Model):

    __tablename__ = 'Automovil'

    idAutomovil = Column(Integer, primary_key=True, nullable=False, unique=True, autoincrement=True)
    marca = Column(String(64), nullable=False)
    modelo = Column(String(64), nullable=False)
    year = Column(Integer, nullable=False)
    precio = Column(Float, nullable=False)
    color = Column(String(20), nullable=False)
    tipoMotor = Column(String(20), nullable=False)
    transmision = Column(String(20), nullable=False)
    kilometraje = Column(Integer, nullable=False)
    fechaEntrada = Column(Date, nullable=False)
    stock = Column(Integer, nullable=False)

    def __init__(self, marca, modelo, year, precio, color, tipoMotor, transmision, kilometraje, fechaEntrada, stock) -> None:
        self.marca = marca
        self.modelo = modelo
        self.year = year
        self.precio = precio
        self.color = color
        self.tipoMotor = tipoMotor
        self.transmision = transmision
        self.kilometraje = kilometraje
        self.fechaEntrada = fechaEntrada
        self.stock = stock

    def __str__(self) -> str:
        return f"Automovil:\n\tidAutomovil: {self.idAutomovil}\n\tmarca: {self.marca}\n\tmodelo: {self.modelo}\n\tyear: {self.year}\n\tprecio: {self.precio}\n\tcolor: {self.color}\n\ttipoMotor: {self.tipoMotor}\n\ttransmision: {self.transmision}\n\tkilometraje: {self.kilometraje}\n\tfechaEntrada: {self.fechaEntrada}\n\tstock: {self.stock}"