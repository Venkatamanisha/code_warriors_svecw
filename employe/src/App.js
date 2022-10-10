import React from 'react';
import Home from './components/Home';
import { Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Addtask from './components/Addtask';
import Navbars from './components/Navbars';
import EntryForm from './components/EntryForm';
import Piecharts from './components/Piecharts';

const App = () => {
  return (
    <div>
  
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Addtask" element={<Addtask/>}/>
      <Route path="/EntryForm" element={<EntryForm/>}/>
      <Route path="/Dashboard" element={<Navbars/>}/>
      <Route path="/Piecharts" element={<Piecharts/>}/>
      </Routes> 
    </div>
  );
};

export default App;