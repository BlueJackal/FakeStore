import { Modal, Button, ListGroup } from 'react-bootstrap';
import { useCart } from '../contexts/CartContext';

export default function CartModal({ show, onHide }) {
    const { cart, removeFromCart, clearCart } = useCart();

    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>Shopping Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <ListGroup>
                        {cart.map((item) => (
                            <ListGroup.Item key={item.id}>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <h5>{item.title}</h5>
                                        <p>Price: ${item.price}</p>
                                        <p>Quantity: {item.quantity}</p>
                                    </div>
                                    <Button variant="danger" onClick={() => removeFromCart(item.id)}>
                                        Remove
                                    </Button>
                                </div>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
                <hr />
                <h4>Total: ${totalPrice.toFixed(2)}</h4>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
                <Button
                    variant="success"
                    onClick={() => {
                        alert('Payment received!');
                        clearCart();
                        onHide();
                    }}
                >
                    Checkout
                </Button>
            </Modal.Footer>
        </Modal>
    );
}