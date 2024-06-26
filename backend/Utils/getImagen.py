from io import BytesIO
import base64, json
from PIL import Image

def getImagen(ruta):
    """
    Convierte una imagen ubicada en el directorio "imagenes_productos" a formato base64.

    Parameters:
    -----------
    ruta : str
        Nombre de archivo de la imagen ubicada en el directorio "imagenes_productos".

    Returns:
    --------
    str
        Cadena de datos de la imagen en formato base64, con el prefijo "data:image/jpeg;base64,".
    """
    with open("imagenes_productos/"+ruta, 'rb') as imgFile:
        base64_bytes = base64.b64encode(imgFile.read())
        base64_encoded = base64_bytes.decode()
 
    return "data:image/jpeg;base64,"+base64_encoded