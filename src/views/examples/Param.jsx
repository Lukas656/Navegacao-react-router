import React from "react";
import {useParams} from 'react-router-dom'

function NotFound(props) {
  const { id } = useParams()

  return (
    <aside className="param">
        <h1>Param</h1>
        <p>Valor: {id}</p>
  </aside>
    );
}
export default NotFound;
