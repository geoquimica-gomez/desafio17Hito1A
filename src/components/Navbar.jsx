import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavbarApp = () => {
    const total = 25000;
    const token = false;
    return (
        <Navbar collapseOnSelect expand="lg" className="custom-navbar" sticky="top">
            <Container>
                <Navbar.Brand href="#home" className="text-white ">
                    <img className='logo' src="https://static.vecteezy.com/system/resources/previews/036/485/265/original/kawaii-pizza-slice-cartoon-character-flat-design-png.png" alt="" />
                    Pizzería delicias de Alondra!
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className='btn1'>🍕Home</Nav.Link>
                        {
                            token
                            ? <Nav.Link href="#logout" className='btn1'>🔓Profile</Nav.Link>
                            : <Nav.Link href="#login" className='btn1'>🔐Login</Nav.Link>
                        }
                        {
                            token
                            ? <Nav.Link href="#logout" className='btn1'>🔒Logout</Nav.Link>
                            : <Nav.Link href="#login" className='btn1'>🔐Register</Nav.Link>
                        }
                    </Nav>
                    <Nav>
                        <Nav.Link href="#shoppingCart" className='btn2'>🛒Total: {total.toLocaleString()} $</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarApp;

