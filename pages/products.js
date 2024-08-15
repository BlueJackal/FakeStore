/********************************************************************************
*  WEB422 – Assignment 4
*  
*  I declare that this assignment is my own work in accordance with Seneca's 
*  Academic Integrity Policy: 
*  
*  https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html 
*  `
*  Name: Christopher Simon   Student ID: 123382228   Date: July 13th, 2024
*
********************************************************************************/


import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Container, Row, Col, Table } from 'react-bootstrap';
import ProductModal from '../components/ProductModal';
import styles from '../styles/Products.module.css';
import Image from 'next/image';

export default function Products() {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const router = useRouter();
    const { search } = router.query;

    useEffect(() => {
        let apiUrl = 'https://fakestoreapi.com/products';
        if (search) {
            apiUrl += `?name=${encodeURIComponent(search)}`;
        }

        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                if (search) {
                    const filtered = data.filter(product =>
                        product.title.toLowerCase().includes(search.toLowerCase())
                    );
                    setProducts(filtered);
                } else {
                    setProducts(data);
                }
            });
    }, [search]);

    const handleShowModal = (product) => {
        setSelectedProduct(product);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setSelectedProduct(null);
        setShowModal(false);
    };

    return (
        <Container className={styles.productsContainer}>
            <Row>
                <Col>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Description</th>
                                <th>Category</th>
                                <th>Image</th>
                                <th>Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(product => (
                                <tr key={product.id} onClick={() => handleShowModal(product)}>
                                    <td>{product.id}</td>
                                    <td>{product.title}</td>
                                    <td>${product.price.toFixed(2)}</td>
                                    <td>{product.description}</td>
                                    <td>{product.category}</td>
                                    <td>
                                        <Image src={product.image} alt={product.title} className={styles.productImage} layout="responsive" width={500} height={500} />
                                    </td>
                                    <td>{product.rating.rate} ({product.rating.count} Reviews)</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <ProductModal
                show={showModal}
                handleClose={handleCloseModal}
                product={selectedProduct}
            />
        </Container>
    );
}
