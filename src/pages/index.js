import React, { Suspense } from 'react';
import { Header, Cases, Footer, Hero, SetupSteps, Whitelist } from '../components';

const HomePage = () => {
  return (
    <div>
        <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>} />
        <Hero />
        <Cases />
        <SetupSteps />
        <Whitelist />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomePage;
