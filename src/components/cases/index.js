// src/components/Cases/index.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import styles from './cases.module.scss';

const Cases = () => {
    return (
        <section id={styles.Cases}>
            <Container className={styles.content}>
                <h2>cases of use</h2>
                <h3>Uniting <b>Creatives</b>, <b>Innovators</b>, and <b>Knowledge-Sharers</b></h3>
                <Image
                    src="assets/images/cases.svg"
                    alt="Use Cases from Cyber Cats"
                    width={1300}
                    height={450}
                />
            </Container>
        </section >
    );
};

export default Cases;
