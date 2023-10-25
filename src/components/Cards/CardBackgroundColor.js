import React from 'react';
import { Typography } from '../../global/fonts/typography';

export const CardBackgroundColor = ({ cat, setNameCat, select, nombre }) => {
  return (
    <div
      onClick={() => setNameCat(cat.nombre, !select)}
      className="no-image__content d-flex justify-content-between align-items-center pl-4">
      <h2 className="text-category pl-2" style={Typography.category}>
        {cat.nombre}
      </h2>
      <p
        style={Typography.iconFont}
        onClick={() => setNameCat(cat.nombre, !select)}
        className="btn btn-sm size-btn mr-4">
        {nombre === cat.nombre ? '2' : '1'}
      </p>
    </div>
  );
};
