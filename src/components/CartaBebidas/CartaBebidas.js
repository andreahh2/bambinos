import React from 'react';
import { categorias_bebidas } from '../../data/categorias_bebidas';
import { Typography } from '../../global/fonts/typography';
import { ListItem } from '../ListItem/ListItem';

export const CartaBebidas = () => {
  return (
    <>

      <div className="m-4">
        <div className="mt-4">
          <h2 style={Typography.titleMenu}>Carta de <br/> bebidas</h2>
        </div>
        {
          categorias_bebidas.map((cat) => (
            <ListItem key={cat.nombre} cat={cat} />
          ))
        }
      </div>
    </>
  );
};
