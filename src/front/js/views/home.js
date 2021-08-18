import React from "react";

import {Product} from '../components/product'
import {Featured} from '../components/featured'
import {Footer} from '../components/footer'

const Home = () => {

  return (
      <main className="l-main bd-grid">
        <Product />
        <Featured />
        <Footer />
      </main>
  );
};

export default Home;
