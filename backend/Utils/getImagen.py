from io import BytesIO
import base64, json
from PIL import Image

def getImagen(ruta):
    """
    pil_img = Image.open("imagenes_productos/"+ruta, mode='r')
    byte_arr = io.BytesIO()
    pil_img.save(byte_arr, format='JPEG')
    encoded_img = encodebytes(byte_arr.getvalue()).decode('ascii')
    """
    with open("imagenes_productos/"+ruta, 'rb') as imgFile:
        base64_bytes = base64.b64encode(imgFile.read())
        base64_encoded = base64_bytes.decode()
 
    return "data:image/jpeg;base64,"+base64_encoded