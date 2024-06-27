from alchemyClasses import db
from sqlalchemy import Column, Integer, String, Float, Date

class Automovil(db.Model):
    """
        ORM Automovil

        Representa la tabla 'Automovil' en la base de datos.

        Atributos:
        ----------
            idAutomovil : int
                ID unico del automovil, se autoincrementa y es la clave primaria.
            marca : str
                Marca del automovil (maximo 64 caracteres).
            modelo : str
                Modelo del automovil (maximo 64 caracteres).
            year : int
                Año de fabricacion del automovil.
            precio : float
                Precio del automovil.
            color : str
                Color del automovil (maximo 20 caracteres).
            tipoMotor : str
                Tipo de motor del automovil (maximo 20 caracteres).
            transmision : str
                Tipo de transmisión del automovil (maximo 20 caracteres).
            kilometraje : int
                Kilometraje del automovil.
            fechaEntrada : datetime.date
                Fecha de entrada del automovil al stock.
            stock : int
                Cantidad en stock del automovil.
    """

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