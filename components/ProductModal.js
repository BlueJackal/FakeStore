import { Modal, Button, Image } from 'react-bootstrap';
import { useCart } from '../contexts/CartContext';

export default function ProductModal({ show, handleClose, product }) {
    const { addToCart } = useCart();

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>{product?.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Image src={product?.image} alt={product?.title} layout="responsive" width={500} height={500} />
                <p>{product?.description}</p>
                <h3>${product?.price}</h3>
                <p>Category: {product?.category}</p>
                <p>Rating: {product?.rating?.rate} ({product?.rating?.count} Reviews)</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button
                    variant="primary"
                    onClick={() => {
                        addToCart(product);
                        handleClose();
                    }}
                >
                    Add to Cart
                </Button>
            </Modal.Footer>
        </Modal>
    );
}