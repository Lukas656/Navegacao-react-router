import "./content.css";
import React from "react";
import { Routes, Route } from "react-router-dom"; 
 
import Home from "../../views/examples/Home";
import NotFound from "../../views/examples/NotFound";
import UseState from '../../views/examples/UseState.jsx'
import UseEffect from '../../views/examples/UseEffect.jsx'
import UseRef from '../../views/examples/UseRef.jsx'
import UseCallback from '../../views/examples/UseCallback.jsx'
import UseMemo from '../../views/examples/UseMemo.jsx'
import UseContext from '../../views/examples/UseContext.jsx'
import UseReducer from '../../views/examples/UseReducer.jsx'
import UseCustom from '../../views/examples/UseCustom.jsx'
import About from "../../views/examples/About";
import Param from "../../views/examples/Param.jsx";
 
const Content = props => (
  <main className="Content">
  
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/useState"  element={<UseState />} />
      <Route path="/useEffect" element={<UseEffect />} />
      <Route path="/useRef" element={<UseRef />} />
      <Route path="/useCallback" element={<UseCallback />} />
      <Route path="/useMemo" element={<UseMemo />} />
      <Route path="/useContext" element={<UseContext />} />
      <Route path="/useReducer" element={<UseReducer />} />
      <Route path="/useCustom" element={<UseCustom />} />
      <Route path="/about" element={<About />} />
      <Route path="/param/:id" element={<Param />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
   
  </main>
);
 
export default Content;