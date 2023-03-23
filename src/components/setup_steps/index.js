// src/components/SetupSteps/index.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './setup_steps.module.scss';
import Image from 'next/image';

const SetupSteps = () => {
    return (
        <section id={styles.SetupSteps}>
            <Container>
                <h2>ready, set, nft!</h2>
                <h3>
                    Discover the simple 3-step process to set up your <b>URL NFTs</b> with <b>Cyber
                    Cats</b> and ride the web3 wave
                </h3>
                <Row>
                    <Col >
                        <Container className={styles.card}>
                            <h4><b>First</b> step</h4>
                            <span className="mt-5" />
                            <Image
                                src="/assets/images/1connectyourwallet.png"
                                alt="Connect your wallet"
                                width={262}
                                height={253}
                            />

                            <h4>Connect your wallet</h4>
                            <p>
                                Jump in with your Metamask or Wallet Connect and kickstart your
                                groovy journey to craft your very own URL NFTs!
                            </p>
                        </Container>
                    </Col>
                    <Col>
                        <Container className={styles.card}>
                            <h4><b>Second</b> step</h4>
                            <span className="mt-5" />
                            <Image
                                src="/assets/images/2mintyournfts.png"
                                alt="Connect your wallet"
                                width={262}
                                height={253}
                            />
                            <h4>Mint your URL NFTs</h4>
                            <p>
                                Turn your digital link into a unique, secure, and tradable NFT
                                with just a few clicks
                            </p>
                        </Container>
                    </Col>
                    <Col>
                        <Container className={styles.card}>
                            <h4><b>Third</b> step</h4>
                            <span className="mt-5" />
                            <Image
                                src="/assets/images/3tradenfts.png"
                                alt="Connect your wallet"
                                width={262}
                                height={253}
                            />
                            <h4>Purchase, Swap, and Barter</h4>
                            <p>
                                Explore our eclectic gallery, market your one-of-a-kind URL NFTs,
                                or engage in trades with fellow users to expand your assemblage
                                on the OpenSea bazaar.
                            </p>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default SetupSteps;
