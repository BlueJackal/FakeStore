import { Container } from 'react-bootstrap';
import styles from '../styles/Intro.module.css';

export default function Intro2() {
    return (
        <Container className={styles.introContainer}>
            <h1 className={styles.introText}>Check out our current sales!</h1>
            <p>The hottest seasonal merch.</p>
        </Container>
    );
}