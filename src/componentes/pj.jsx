import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Pj = ({ pjs = [], onDelete, onEdit}) => {
     console.log(pjs);
    return (
        <div className="d-flex flex-wrap  justify-content-center">

            {pjs.length > 0 ? (
                pjs.map((item, index) => (
                    <Card key={index} style={{ width: '18rem', margin: '10px' }}>
                    <Card.Img variant="top" src={item.img} />
                    <Card.Body>
                        <Card.Title>{item.Name }</Card.Title>
                        <Card.Text key={item.id_pj}>
                   
                        <span>id_Arma: {item.id_Arma}</span><br />
                        <span>id_Armadura: {item.id_Armadura} </span><br />
                        <span>Age: {item.Age}</span><br />
                        <span>ID: {item.id_pj}</span>

                    </Card.Text>
                    <Button variant="primary" style={{ marginRight: '10px' }} onClick={() => onEdit(item)}>Editar</Button>
                    <Button variant="danger" onClick={() => onDelete(item.id_pj)}>Eliminar</Button>
                    </Card.Body>
                    </Card>
                ))
            ) : (
                <p>No hay objetos</p>
            )}
        </div>
    );
};

export default Pj;