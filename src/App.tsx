import React from "react";
import {
  BrowserRouter,
  Routes, 
  Route,
} from "react-router-dom";

import './App.css';
import { PrivateRoute } from './helpers/PrivateRoute';
import layoutComponent from './Layout/Layout';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Login/>} path="/login" />
          <Route element={<Signup/>} path="/signup" />
        </Routes>
        {/* <PrivateRoute exact component={layoutComponent} path="/" /> */}
      </BrowserRouter>
         </div>
  );
}

export default App;
