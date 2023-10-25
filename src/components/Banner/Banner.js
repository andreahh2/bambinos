import { Carrusel } from './Carrusel';
import { Header } from './Header';

export const Banner = () => (
  <header>
    <Header />

    <div className="column">
      <Carrusel />
    </div>
  </header>
);
