import './App.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { AuthProvider } from './components/auth/AuthContext';

function App() {

  return (
    <>
      <AuthProvider>
        <Navigation />
        <Container className='p-2' as="main" fluid>
            <Outlet />
        </Container>
        <Footer />
      </AuthProvider>
    </>
  )
}

export default App
