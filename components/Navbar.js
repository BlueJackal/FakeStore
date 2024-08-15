import { useState } from 'react';
import { useRouter } from 'next/router';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import CartModal from './CartModal';
import AccountModal from './AccountModal.js';

export default function CustomNavbar() {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();
  const { cart } = useCart();
  const { user, logout } = useAuth();
  const [showCart, setShowCart] = useState(false);
  const [showAccountModal, setShowAccountModal] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/products?search=${encodeURIComponent(searchTerm)}`);
  };

  const handleNavigation = (e, path) => {
    e.preventDefault();
    router.push(path);
  };

  const handleCartClick = () => {
    setShowCart(true);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/" onClick={(e) => handleNavigation(e, '/')}>
          <img
            src="/img/header_logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
          {' '}
          Chris Simon - Web Assignment 5
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" onClick={(e) => handleNavigation(e, '/')}>Home</Nav.Link>
            <Nav.Link href="/about" onClick={(e) => handleNavigation(e, '/about')}>About</Nav.Link>
            <Nav.Link href="/products" onClick={(e) => handleNavigation(e, '/products')}>Products</Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleSearch}>
            <FormControl
              type="search"
              placeholder="Search Products"
              className="me-2"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button variant="outline-success" type="submit">Search</Button>
          </Form>
          <Button variant="outline-primary" onClick={handleCartClick}>
            Cart ({cart.length})
          </Button>
          {user ? (
            <>
              <Button variant="outline-info" onClick={() => setShowAccountModal(true)} className="ms-2">
                Account
              </Button>
              <Button variant="outline-danger" onClick={logout} className="ms-2">
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button variant="outline-primary" onClick={() => router.push('/login')} className="ms-2">
                Login
              </Button>
              <Button variant="outline-secondary" onClick={() => router.push('/register')} className="ms-2">
                Register
              </Button>
            </>
          )}
        </Navbar.Collapse>
      </Container>
      <CartModal show={showCart} onHide={() => setShowCart(false)} />
      <AccountModal show={showAccountModal} onHide={() => setShowAccountModal(false)} />
    </Navbar>
  );
}