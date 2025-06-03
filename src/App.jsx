import './App.css'
import Navigation from './components/Navigation'
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <Navigation />
      <Container className='p-2' as="main" fluid>
          <Outlet />
      </Container>
    </>
  )
}

export default App
