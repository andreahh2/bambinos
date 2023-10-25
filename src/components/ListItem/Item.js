import React from 'react';
import { Typography } from '../../global/fonts/typography';

export const Item = ({ rs }) => {
  return (
    <div className="mt-3">
      <div className="d-flex justify-content-between">
        <p style={Typography.plateTitleText} >
          {rs.nombre}
          {
            rs.mas_vendido && (
              <small className="pl-1" style={Typography.label}> más vendido</small>
            )
          }
        </p>
        {rs.precio &&
          <p style={Typography.plateTitleText}>
            ${rs.precio}
          </p>
        }
      </div>
      <div className="row align-items-center ">
        <div className="col">
          <p style={Typography.plateBodyText}>{rs.descripcion}</p>
          {
            rs.tiempo_preparacion && (
              <div>
                <p style={Typography.label}>Tiempo de preparación</p>
                <div className="d-flex flex-row align-items-center time-content">
                  <p style={Typography.iconFont} className="mr-2 time-clock">3</p>
                  <p style={Typography.plateBodyText}>{rs.tiempo_preparacion}</p>
                </div>
              </div>
            )
          }
        </div>
      </div>

    </div>
  );
};
