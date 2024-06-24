import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { MapPin } from '@phosphor-icons/react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './AutomovilCard.css'

export const AutomovilCard = ({marca, modelo, year, kilometraje, precio, imagen}) => {

  const formatoPrecio = (precio) => {
    // Convertir el número a cadena y agregar comas separadoras de miles
    let precioFormateado = precio.toLocaleString('en-US');
    // Agregar el símbolo de dolar al inicio
    precioFormateado = `$${precioFormateado}`;
    return precioFormateado;
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body className='card-body'>
        <Card.Title className='card-title'>{marca} &bull; {modelo}</Card.Title>
        <p className='descripcion'>{year} &bull; {kilometraje} km</p>
        <hr />
        <p>Contado</p>
        <p className='precio'>{formatoPrecio(precio)}</p>
        <hr />
        <MapPin /> Ciudad de Mexico
      </Card.Body>

    </Card>
  );
}