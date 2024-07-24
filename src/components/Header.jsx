import { Carousel, Container } from 'react-bootstrap';
import banner1 from '../assets/imgs/banner1.png'
import banner2 from '../assets/imgs/banner2.png'


const Header = () => {
    return (
        <header>
            <Container fluid className="p-0" style={{ height: '250px' }}>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner1}
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
                            src={banner2}
                            alt="Delicious Pizzas"
                            style={{ height: '250px', objectFit: 'cover' }}
                        />
                        <Carousel.Caption>
                            <h3>Recibe solo por hoy 50% de descuento</h3>
                            <p>¡Prueba nuestras variedades únicas!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </header>
    );
};

export default Header;
