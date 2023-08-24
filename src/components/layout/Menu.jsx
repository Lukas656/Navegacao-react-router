import React from "react";
import './menu.css'

import {Link} from 'react-router-dom'

function Menu(props) {
  return (
    <aside className="menu">
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/param/123">Param #01</Link></li>
        <li><Link to="/param/text">Param #02</Link></li>
        <li><Link to="/about">Sobre</Link></li>
      </ul>
    </nav>
  </aside>
    );
}
export default Menu;

