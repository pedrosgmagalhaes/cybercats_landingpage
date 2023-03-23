// src/components/Footer/index.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import styles from './footer.module.scss';

const Footer = () => {
    return (
        <footer id={styles.Footer}>
            <Container>
                <Row>
                    <Col lg={8}>
                        <div className={styles.footer_text}>
                            <Image
                                src="/assets/images/footer_logo.svg"
                                alt="Logo"
                                width={140}
                                height={52}
                            />
                            <p>
                                Cyber Cats is a decentralized web application built on blockchain technology, allowing users to buy, sell, and trade unique URLs NFTs. Turn any URL into a valuable digital asset, from documents and images to videos and beyond!
                            </p>
                        </div>
                        <div className={styles.social_medias}>
                            <Link href="/linkedin" passHref>
                                <Image
                                    src="/assets/images/social_linkedin.svg"
                                    alt="Linkedin"
                                    width={20}
                                    height={20}
                                />
                            </Link>
                            <Link href="/twitter" passHref>
                                <Image
                                    src="/assets/images/social_twitter.svg"
                                    alt="Twitter"
                                    width={20}
                                    height={20}
                                />
                            </Link>
                            <Link href="/instagram" passHref>
                                <Image
                                    src="/assets/images/social_instagram.svg"
                                    alt="Instagram"
                                    width={20}
                                    height={20}
                                />
                            </Link>
                            <Link href="/medium" passHref>
                                <Image
                                    src="/assets/images/social_medium.svg"
                                    alt="Medium"
                                    width={20}
                                    height={20}
                                />
                            </Link>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <Row>
                            <Col className="mt-4">
                                <h4>DEVELOPERS</h4>
                                <ul>
                                    <li>
                                        <Link href="/smart-contracts" passHref>
                                            <span>Smart contracts</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/github" passHref>
                                            <span>Github</span>
                                        </Link>
                                    </li>
                                </ul>
                            </Col>
                            <Col className="mt-4">
                                <h4>ABOUT</h4>
                                <ul>
                                    <li>
                                        <Link href="/contact" passHref>
                                            <span>Contact</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/community" passHref>
                                            <span>Community</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blog" passHref>
                                            <span>Blog</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/whitepaper" passHref>
                                            <span>Whitepaper</span>
                                        </Link>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
