import React from 'react';
import Header from "./Containers/Header/Header";
import {Route, Routes} from "react-router-dom";
import Content from "./Containers/Content/Content";

const App = () => {
  return (
      <div>
          <Header/>
          <Routes>
              <Route path="/" element={(<Header/>)}></Route>
              <Route path="/:id" element={(<Content/>)}></Route>
          </Routes>
      </div>
  );
};

export default App;
