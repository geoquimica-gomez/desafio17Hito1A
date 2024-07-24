import { Carousel, Container } from 'react-bootstrap';


const Header = () => {
    return (
        <header>
            <Container fluid className="p-0" style={{ height: '250px' }}>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://via.placeholder.com/1920x600.png?text=Pizzeria+Delicias+de+Alondra"
                            alt="Pizzeria Delicias de Alondra"
                            style={{ height: '250px', objectFit: 'cover' }}
                        />
                        <Carousel.Caption>
                            <h1>Pizzeria Delicias de Alondra</h1>
                            <p>¡Las mejores pizzas al alcance de tu paladar!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://via.placeholder.com/1920x600.png?text=Delicious+Pizzas"
                            alt="Delicious Pizzas"
                            style={{ height: '250px', objectFit: 'cover' }}
                        />
                        <Carousel.Caption>
                            <h3>Delicious Pizzas</h3>
                            <p>¡Prueba nuestras variedades únicas!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://via.placeholder.com/1920x600.png?text=Fresh+Ingredients"
                            alt="Fresh Ingredients"
                            style={{ height: '250px', objectFit: 'cover' }}
                        />
                        <Carousel.Caption>
                            <h3>Fresh Ingredients</h3>
                            <p>Solo usamos los ingredientes más frescos.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </header>
    );
};

export default Header;
