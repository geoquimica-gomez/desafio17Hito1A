import { Card, Button } from 'react-bootstrap';

const CardPizza = ({ name, price, ingredients, img }) => {
    return (
        <Card className="h-100">
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <strong>Ingredientes:</strong>
                    <ul>
                        {ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                </Card.Text>
                <Card.Text>
                    <strong>Precio:</strong> ${price}
                </Card.Text>
                <Button variant="primary">Ver Más</Button>
                <Button variant="secondary" className="ml-2">Añadir</Button>
            </Card.Body>
        </Card>
    );
}

export default CardPizza;


