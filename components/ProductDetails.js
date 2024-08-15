import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Container, Row, Col, Image } from 'react-bootstrap';

export default function ProductDetails({ productId }) {
    const [product, setProduct] = useState(null);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (id) {
            fetch(`https://fakestoreapi.com/products/${id}`)
                .then(res => res.json())
                .then(data => setProduct(data));
        }
    }, [id]);

    if (!product) return <p>Loading...</p>;

    return (
        <Container>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.title} layout="responsive" width={500} height={500} />
                </Col>
                <Col md={6}>
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <h3>${product.price}</h3>
                    <p>Category: {product.category}</p>
                    <p>Rating: {product.rating.rate} ({product.rating.count} Reviews)</p>
                </Col>
            </Row>
        </Container>
    );
}

export async function getServerSideProps({ params }) {
    const { id } = params;
    return {
        props: {
            productId: id,
        },
    };
}