import React from 'react';
import { categorias } from '../../data/categorias_alimentos';
import { Typography } from '../../global/fonts/typography';
import { ListItem } from '../ListItem/ListItem';

export const CartaAlimentos = () => {
  return (
    <>
      <div className="m-4">
        <div className="mt-6 animate__animated animate__fadeInUp" id="menu">
          <h2 style={Typography.titleMenu}>Carta de<br/> alimentos</h2>
        </div>
        {
          categorias.map((cat) => (
            <ListItem key={cat.nombre} cat={cat} />
          ))
        }
      </div>
    </>
  );
};
