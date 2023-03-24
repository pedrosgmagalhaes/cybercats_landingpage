import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import styles from "./header.module.scss";
import Head from 'next/head';


const Header = () => {
    return (
        <section >
            <Head>
                <title>cybercats - create urls dynamic nfts</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar id={styles.Navbar} variant="dark" expand="lg">
                <Container>
                    <Link href="/" passHref>
                        <Navbar.Brand>
                            <Image
                                src="/assets/images/logo.svg"
                                alt="Logo"
                                width={150}
                                height={50}
                            />
                        </Navbar.Brand>
                        <Navbar.Text>
                            <Image
                                src="/assets/images/cybercats.svg"
                                alt="Logo"
                                width={150}
                                height={50}
                            />
                        </Navbar.Text>
                    </Link>
                </Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <a href="/uses" passHref>
                            <Nav.Link as="a">uses</Nav.Link>
                        </a>
                        <a href="/how-works passHref" passHref>
                            <Nav.Link as="a">setup</Nav.Link>
                        </a>
                        <a href="/whitelist" passHref>
                            <Nav.Link as="a">whitelist</Nav.Link>
                        </a>
                        <a href="/community" passHref>
                            <Nav.Link as="a">community</Nav.Link>
                        </a>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </section>
    );
};

export default Header;
