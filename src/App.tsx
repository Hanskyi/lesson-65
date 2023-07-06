import React from 'react';
import Header from "./Containers/Header/Header";
import {Route, Routes} from "react-router-dom";
import Content from "./Containers/Content/Content";
import AddEdit from "./Containers/AddEdit/AddEdit";

const App = () => {
  return (
      <div>
          <Header/>
          <Routes>
              <Route path="/" element={(<AddEdit/>)}></Route>
              <Route path="/pages/:id" element={(<Content/>)}></Route>
              <Route path="/pages/admin" element={(<AddEdit/>)}></Route>
          </Routes>
      </div>
  );
};

export default App;
