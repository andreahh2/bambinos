import React from 'react';
import './style.css';
import { Container, Row, Col } from 'react-bootstrap';

import ByGirasolo1 from '../../global/img/footer/inicio.png';
import ByGirasolo2 from '../../global/img/footer/fin.png';

export const Footer = () => {
  return (
    <div className='footer'>
      <Container>
        <Row>
          <Col xl='6' lg='6' sm='12' className='f-r lg-footer'>
            <a href="https://girasolo.mx" className="by-girasolo" id="byGirasolo">
              <span><img src={ByGirasolo1} alt="Girasolo" /> </span>
              <div className="icon">
                <div className="heart"></div>
              </div>
              <span><img src={ByGirasolo2} alt="Girasolo" /></span>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
