import React from 'react';
import Homepage from './pages/homepage/homepage';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path='/' component={Homepage} />
    </Router>
      

  );
}

export default App;