import React from 'react';
import Header from './Header'
import Hero from './Hero';
import Cards from './Cards';
import Tips from './Tips';
import Banner from './Banner';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <div className="herocard-box">
      <Hero />
      <Cards />
      </div>
      <Tips />
      <Banner />
      <Footer />
    </div>
  )
}

export default Home
