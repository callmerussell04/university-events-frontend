import { Container, Nav, Navbar, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {

    return (
        <header className="text-center">
             <Navbar bg="dark" data-bs-theme="dark">
                <Container fluid>
                <Navbar.Brand>Университет. Культурно-массовые мероприятия</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Главная</Nav.Link>
                    <Nav.Link as={Link} to="/">Мероприятия</Nav.Link>
                    <Nav.Link as={Link} to="/">Профиль</Nav.Link>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Админ панель
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item as={Link} to="/admin/events">Мероприятия</Dropdown.Item>
                            <Dropdown.Item as={Link} to="/admin/faculties">Факультеты</Dropdown.Item>
                            <Dropdown.Item as={Link} to="/admin/groups">Группы</Dropdown.Item>
                            <Dropdown.Item as={Link} to="/admin/locations">Помещения</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
                </Container>
            </Navbar>
        </header>

    );
};

export default Navigation;