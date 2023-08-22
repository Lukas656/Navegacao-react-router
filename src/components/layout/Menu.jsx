import React from "react";
import './menu.css'

function Menu(props) {
  return (
    <aside className="menu">
    <nav>
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/">Sobre</a></li>
      </ul>
    </nav>
  </aside>
    );
}
export default Menu;

