import React from 'react';
import { Typography } from '../../global/fonts/typography';

export const CardImage = ({ cat, setNameCat, select, nombre }) => {
  return (
    <>
      <img className="card-img" src={cat.img} />
      <div onClick={() => setNameCat(cat.nombre, !select)} className="card-img-overlay d-flex flex-column justify-content-center">
        <div className="d-flex flex justify-content-between">
          <h2 className="text-category pl-2" style={Typography.category}>
            {cat.nombre}
          </h2>
          <p
            style={Typography.iconFont}
            onClick={() => setNameCat(cat.nombre, !select)}
            className="btn btn-sm size-btn">
            {nombre === cat.nombre ? '2' : '1'}
          </p>
        </div>
      </div>
    </>
  );
};
