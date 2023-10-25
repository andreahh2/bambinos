import React from 'react';
import { Banner } from './Banner/Banner';
import { CartaAlimentos } from './CartaAlimentos/CartaAlimentos';
import { CartaBebidas } from './CartaBebidas/CartaBebidas';
import { CartaLitros } from './CartaLitros/CartaLitros';
import { Footer } from './Footer/Footer';


export const Main = () => {
  return (
    <div className="container-banner">
      <Banner />
      <CartaAlimentos />
      <CartaLitros />
      <CartaBebidas />
      <Footer />
    </div>
  );
};
