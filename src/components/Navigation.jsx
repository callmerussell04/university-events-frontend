import { Container, Nav, Navbar, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { useAuth } from '../components/auth/AuthContext';

const Navigation = () => {
    const { user } = useAuth();
    const userRole = user?.roles?.[0] ?? null;

    return (
        <header className="text-center">
             <Navbar bg="dark" data-bs-theme="dark">
                <Container fluid>
                <Navbar.Brand>Университет. Культурно-массовые мероприятия</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Главная</Nav.Link>
                    <Nav.Link as={Link} to="/">Мероприятия</Nav.Link>
                    <Nav.Link as={Link} to="/profile">Профиль</Nav.Link>
                    {(userRole === 'ROLE_ADMIN' || userRole === 'ROLE_EMPLOYEE') && (
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Управление
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item as={Link} to="/admin/events">Мероприятия</Dropdown.Item>
                            <Dropdown.Item as={Link} to="/admin/invitations">Приглашения</Dropdown.Item>
                            <Dropdown.Item as={Link} to="/admin/faculties">Факультеты</Dropdown.Item>
                            <Dropdown.Item as={Link} to="/admin/groups">Группы</Dropdown.Item>
                            <Dropdown.Item as={Link} to="/admin/locations">Помещения</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    )}
                </Nav>
                </Container>
            </Navbar>
        </header>

    );
};

export default Navigation;