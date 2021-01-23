import React from 'react';
import Homepage from './pages/homepage/Homepage';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreatePostPage from './pages/create-post-page/CreatePostPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/posts/new' component={CreatePostPage} />
      </Switch>
    </Router>
  );
}

export default App;