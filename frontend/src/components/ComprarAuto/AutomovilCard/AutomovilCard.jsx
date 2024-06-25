import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { MapPin } from '@phosphor-icons/react';
import { formatoPrecio } from '../../../utils/formatoPrecio.js';
import { formatoKilometraje } from '../../../utils/formatoKilometraje.js';
import { formatoFecha } from '../../../utils/formatoFecha.js';
import 'bootstrap/dist/css/bootstrap.min.css'
import './AutomovilCard.css'

/**
 * Componente Card para automoviles
 * @param {String} marca - marca del automovil
 * @param {String} modelo - modelo del automovil
 * @param {Number} year - año del automovil
 * @param {Number} kilometraje - kilometraje del automovil
 * @param {Date} fechaEntrada - fecha de entrada del automovil
 * @param {Float} precio - precio del automovil
 * @param {String} imagen - imagen del automovil en base64
 * @returns {JSX.Element} Componente Card para automoviles
 */
export const AutomovilCard = ({marca, modelo, year, kilometraje, fechaEntrada, precio, imagen}) => {

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img className='card-image' variant="top" src={imagen} />
      <Card.Body className='card-body'>
        <Card.Title className='card-title'>{marca} &bull; {modelo}</Card.Title>
        <p className='descripcion'>{year} &bull; {formatoKilometraje(kilometraje)} &bull; {formatoFecha(fechaEntrada)}</p>
        <hr />
        <p>Contado</p>
        <p className='precio'>{formatoPrecio(precio)}</p>
        <hr />
        <MapPin /> Ciudad de Mexico
      </Card.Body>
    </Card>
  );
}