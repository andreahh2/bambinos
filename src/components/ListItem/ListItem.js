import React, { useState } from 'react';
import { Typography } from '../../global/fonts/typography';
import { filterByCategory } from '../../helpers/filters';
import { CardBackgroundColor } from '../Cards/CardBackgroundColor';
import { CardImage } from '../Cards/CardImage';
import { Item } from './Item';

export const ListItem = ({ cat }) => {
  const [select, setSelect] = useState(false);
  const [nombre, setNombre] = useState('');

  const setNameCat = (item, status) => {
    setNombre(item);
    if (item === nombre) {
      setNombre('');
      setSelect(!status);
    }
  };

  return (
    <>
      <div className="card mt-3 mb-1" >
        {
          cat.img ? (
            <CardImage
              cat={cat}
              setNameCat={setNameCat}
              select={select}
              nombre={nombre}
            />
          ) : (
            <CardBackgroundColor
              cat={cat}
              setNameCat={setNameCat}
              select={select}
              nombre={nombre}
            />
          )
        }

      </div>

      {
        (
          <div
            className={
              nombre === cat.nombre ? 'animate__animated animate__fadeIn' : 'collapse'}>
            <div className="mt-3">
              {
                filterByCategory(cat.nombre, cat.tipo).map((rs) => (
                  <Item key={rs.nombre} rs={rs} />
                ))
              }
              <h3 style={Typography.plateTitleText}></h3>
            </div>
          </div>
        )
      }

    </>
  );
};