import React from 'react';
// images
import pokeBall from '../../assets/images/pokeball.png';
// css
import './index.css'

const Header = props => {
  return (
    <header className="wp-header">
      <div className="logo">
        <img src={props.logo} alt="Warung Pintar"/>
      </div>
      <div className="pokeball">
        <img src={pokeBall} className="pokeball-logo"/>
      </div>
    </header>
  );
}

export default Header;