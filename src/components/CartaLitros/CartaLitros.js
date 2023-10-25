import React from 'react';
import { carta_litros } from '../../data/carta_litros';
import { Typography } from '../../global/fonts/typography';
import { ListItem } from '../ListItem/ListItem';
import LitrosImg from '../../global/img/litros/litros.png';

export const CartaLitros = () => {
  return (
    <>

      <div className="m-4">
        <div className="mt-4 d-flex flex-row align-items-center  justify-content-between">
          <h2 className="title-card" style={Typography.titleMenu}>
            Los Litros Bambinos
          </h2>
          <img className="img-litros img-fluid" src={LitrosImg} />
        </div>
        {
          carta_litros.map((cat) => (
            <ListItem key={cat.nombre} cat={cat} />
          ))
        }
      </div>
    </>
  );
};
