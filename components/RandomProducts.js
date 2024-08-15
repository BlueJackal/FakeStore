import { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import styles from '../styles/RandomProducts.module.css';
import ProductModal from './ProductModal';

export default function RandomProducts() {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                const shuffled = data.sort(() => 0.5 - Math.random());
                const selected = shuffled.slice(0, 6);
                setProducts(selected);
            });
    }, []);

    const handleShowModal = (product) => {
        setSelectedProduct(product);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setSelectedProduct(null);
        setShowModal(false);
    };

    return (
        <>
            <Container className={styles.productsContainer}>
                <Row>
                    {products.map(product => (
                        <Col key={product.id} xs={12} sm={6} md={4} className="mb-4">
                            <Card onClick={() => handleShowModal(product)} className={styles.card}>
                                <Card.Img variant="top" src={product.image} />
                                <Card.Body>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Text>${product.price}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            <ProductModal
                show={showModal}
                handleClose={handleCloseModal}
                product={selectedProduct}
            />
        </>
    );
}