import React from 'react';
import { Carousel } from 'react-bootstrap';
import { promociones } from '../../data/promociones';
import { Typography } from '../../global/fonts/typography';
import $ from 'jquery';

const handleMenu = () => {
  $('html, body').animate(
    {
      scrollTop: $('#menu').offset().top
    }, 1200);
};

export const Carrusel = () => (
  <Carousel>
    {
      promociones.map((item) => (
        <Carousel.Item key={item.descripcion}>
          <img
            className="d-block w-100 img-item__carousel"
            src={item.img}
            alt={item.descripcion}
          />
          <Carousel.Caption>
            <div className="container-caption">
              <h3 style={Typography.titlePromo}>Promociones</h3>
              <h2 style={Typography.namePromo}>{item.descripcion}</h2>
              <br />
              <p style={Typography.restrictionPromo}>{item.restricciones}</p>
              <small className="text-xs" style={Typography.restrictionPromoSm}>(Aplican restricciones)</small>
            </div>
            <a href="#menu"
              onClick={() => handleMenu()}
              className="btn btn-see__menu smoothScroll"
              style={Typography.seeMenu}>
              ver menu
            </a>

          </Carousel.Caption>
        </Carousel.Item>
      ))
    }
  </Carousel>
);
