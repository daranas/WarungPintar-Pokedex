import React from 'react';
import { Link } from "react-router-dom";
// images
import pokeBall from '../../assets/images/pokeball.png';
// css
import './index.css'

const Header = props => {
  return (
    <header className="wp-header">
      <div className="logo">
        <Link to="/">
          <img src={props.logo} alt="Warung Pintar"/>
        </Link>
      </div>
      <div className="pokeball">
        <img src={pokeBall} className="pokeball-logo" alt="pokeball"/>
      </div>
    </header>
  );
}

export default Header;