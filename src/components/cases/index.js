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
                <Row className="d-flex">
                    <Col>
                        <Image
                            src="/assets/images/visualartcat.svg"
                            alt="Logo"
                            width={384}
                            height={360}
                        />
                    </Col>
                    <Col>
                        <Image
                            src="/assets/images/mentorcat.svg"
                            alt="Logo"
                            width={480}
                            height={360}
                        />
                    </Col>
                    <Col>
                        <Image
                            src="/assets/images/digitalcontent.svg"
                            alt="Logo"
                            width={384}
                            height={360}
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Cases;
