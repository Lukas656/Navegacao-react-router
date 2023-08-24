import React from "react";
import './app.css'

import { BrowserRouter } from  'react-router-dom' 

import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'

function App(props) {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Menu />
          <Content />
        </BrowserRouter>
      </div>
    </>
    );
}
export default App;