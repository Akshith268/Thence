import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch ,Routes} from 'react-router-dom';
import Home from "./pages/home/home"

import Register from './pages/Registration/Register';
import Confirm from './pages/confirm/confirm';
function App() {
  return (
    <div className="App">
          <Router>
            <Routes >
              <Route path="/" exact element={<Home/>} />
              <Route path="/Register" element={<Register/>} />
              <Route path= "/confirm" element={<Confirm/>}/>
            </Routes>
          </Router>
    </div>
  );
}

export default App;
