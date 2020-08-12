import React from 'react';
import Navbar from '../navBar/Navbar';
import ShopNow from '../ShopNowButton/ShopNowButton';
import Catagories from '../catagories/catagories';
import Footer from '../footer/Footer';

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <ShopNow />
      <Catagories />
      <Footer />
    </div>
  );
}
