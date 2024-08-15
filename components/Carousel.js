import { Carousel, Container } from 'react-bootstrap';
import Image from 'next/image';
import styles from '../styles/Carousel.module.css';

const customLoader = ({ src }) => {
    return src;
};

export default function ProductCarousel({ products }) {
    return (
        <Container className={styles.carouselContainer}>
            <Carousel className={styles.carousel}>
                {products.slice(0, 5).map(product => (
                    <Carousel.Item key={product.id}>
                        <Image
                            className={`d-block w-100 ${styles.carouselImage}`}
                            loader={customLoader}
                            src={product.image}
                            alt={product.title}
                            layout="responsive"
                            width={500}
                            height={500}
                        />
                        <Carousel.Caption className={styles.carouselCaption}>
                            <h3 className={styles.productTitle}>{product.title}</h3>
                            <p className={styles.productPrice}>${product.price}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </Container>
    );
}