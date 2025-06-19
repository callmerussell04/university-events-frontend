import { Container, Nav, Navbar, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { useAuth } from '../components/auth/AuthContext';

const Navigation = () => {
    const { user } = useAuth();
    const userRole = user?.roles?.[0] ?? null;

    return (
        <header className="text-center">
            <Navbar expand="lg" bg="dark" data-bs-theme="dark">
            <Container fluid>
                <Navbar.Brand>Университет. Культурно-массовые мероприятия</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Главная</Nav.Link>
                        {userRole === 'ROLE_STUDENT' &&
                            <Nav.Link as={Link} to="/events">Мероприятия</Nav.Link>
                        }
                        {user ? (
                            <Nav.Link as={Link} to="/profile">Профиль</Nav.Link>
                        ) : (
                            <Nav.Link as={Link} to="/login">Вход</Nav.Link>
                        )}
                        {(userRole === 'ROLE_ADMIN' || userRole === 'ROLE_EMPLOYEE') && (
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic">
                                Управление
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item as={Link} to="/admin/events">Мероприятия</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/admin/invitations">Приглашения</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/admin/faculties">Факультеты</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/admin/groups">Группы</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/admin/locations">Помещения</Dropdown.Item>
                                {userRole === 'ROLE_ADMIN' ? (
                                    <Dropdown.Item as={Link} to="/admin/users">Пользователи</Dropdown.Item>
                                ) : (
                                    <Dropdown.Item as={Link} to="/admin/users">Cтуденты</Dropdown.Item>
                                )}
                                <Dropdown.Item as={Link} to="/admin/support-tickets">Тех-поддержка</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </header>

    );
};

export default Navigation;