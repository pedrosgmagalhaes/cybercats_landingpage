// src/components/Whitelist/index.js

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'next/image';
import styles from './whitelist.module.scss'

const Whitelist = () => {
    return (
        <section>
            <Container id={styles.Whitelist}>
                <Row>
                    <Col className={styles.imageFeature}>
                        <Image
                            src="/assets/images/partycat.png"
                            alt="Join the Party"
                            width={300}
                            height={300}
                        />
                    </Col>
                    <Col className={styles.formFeature}>
                        <h2>Join the Party</h2>
                        <p>
                            Connect your wallet and score early access with our whitelist.
                            Users will snag an NFT to launch test-drive URL NFTs.
                        </p>
                         <button className={styles.button}>Whitelist</button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Whitelist;
