import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4 custom-footer">
            <Container>
                <Row>
                    <Col md={4}>
                        <h5>Pizzeria Delicias de Alondra</h5>
                        <p>
                            Disfruta de las mejores pizzas en nuestra pizzería. Ingredientes frescos y recetas únicas para una experiencia inolvidable.
                        </p>
                    </Col>
                    <Col md={4}>
                        <h5>Enlaces Útiles</h5>
                        <ul className="list-unstyled">
                            <li><a href="/" className="text-light">Inicio</a></li>
                            <li><a href="/menu" className="text-light">Menú</a></li>
                            <li><a href="/contact" className="text-light">Contacto</a></li>
                            <li><a href="/about" className="text-light">Sobre Nosotros</a></li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5>Contacto</h5>
                        <ul className="list-unstyled">
                            <li><i className="bi bi-geo-alt-fill"></i> Dirección: Calle Falsa 123, Santiago</li>
                            <li><i className="bi bi-telephone-fill"></i> Teléfono: +56 9 1234 5678</li>
                            <li><i className="bi bi-envelope-fill"></i> Email: info@pizzeriadeliciasdealondra.com</li>
                        </ul>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col md={12} className="text-center">
                        <p className="mb-0">&copy; 2024 Pizzeria Delicias de Alondra. Todos los derechos reservados.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
