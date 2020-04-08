import React from 'react';
// css
import './index.css'

const Header = props => {
  return (
    <header className="wp-header">
      <div className="logo">
        <img src={props.logo} alt="Warung Pintar"/>
      </div>
    </header>
  );
}

export default Header;