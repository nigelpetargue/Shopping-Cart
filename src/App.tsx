import { Routes, Route } from 'react-router-dom';
import { Container } from '@mantine/core';
import { Home } from './pages/Home';
import { Store } from './pages/Store';
import { About } from './pages/About';
import { Navbar } from './components/Navbar';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import { Notifications } from '@mantine/notifications';

export default function App() {
  return (
    <ShoppingCartProvider>
      <Notifications />
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}
