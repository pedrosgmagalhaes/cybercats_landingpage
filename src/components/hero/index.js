import React from 'react';
import { Container } from 'react-bootstrap';
import Image from 'next/image';
import styles from './hero.module.scss';

const Hero = () => {
    return (
        <Container id={styles.Hero}>
            <div className={styles['hero-container']}>
                <div className={styles['hero-content']}>
                    <h2 className={styles['hero-title']}>Cyber Cats dominate the digital realm.</h2>
                    <p className={styles['hero-text']}>
                        The ultimate platform for buying, selling, and trading digital links
                        as NFTs in the world of Web3! Dive into our unique marketplace
                        designed for creators, collectors, and enthusiasts.
                    </p>
                    <button className={styles.button}>Connect your wallet</button>
                </div>
                <div className={styles['hero-image']}>
                    <Image
                        src="/assets/images/hero_cat.png"
                        alt="Cyber Cat"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </Container>
    );
};

export default Hero;
