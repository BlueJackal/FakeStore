import { Container } from 'react-bootstrap';
import styles from '../styles/Intro.module.css';

export default function Intro() {
    return (
        <Container className={styles.introContainer}>
            <h1 className={styles.introText}>Welcome to FakeStore!</h1>
            <p>Your one-stop-shop for all the best fake products. Just don&apos;t ask where we got them.</p>
        </Container>
    );
}