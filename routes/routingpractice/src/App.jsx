// import logo from './logo.svg';
import './App.css';

import Color from './components/Color';
import React, {useState} from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
  Link 
} from "react-router-dom";



function App() {


  return (
    <BrowserRouter>
  

    <Routes>

        <Route exact path="/" element={<h1>Welcome</h1>}>
          </Route>

        <Route path="/hello"  element={<h1>The word is: Hello</h1>}>
          
          </Route>
        
        <Route exact path = "/color/:id"  element={<Color/>}>
        
          </Route>

          <Route exact path = "/color/:id/:color/:bc"  element={<Color/>}>
          
          </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;

