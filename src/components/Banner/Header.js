import React from 'react';
import BannerLogo from '../../global/img/banner.png';

export const Header = () => (
  <div className="d-flex justify-content-center pt-4 pb-3">
    <div className="text-center">
      <img className="img-fluid-header w-10 h-5" src={BannerLogo} />
    </div>
  </div>
);
