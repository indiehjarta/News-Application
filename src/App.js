import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// imports components

// imports screens
import HomeScreen from './screens/HomeScreen';
import ArticleScreen from './screens/ArticleScreen';
//import PageNotFoundScreen from './screens/PageNotFoundScreen';

function App() {
  return (
    <Router>
      <Route exact path="/" component={HomeScreen} />
      <Route path="/article" component={ArticleScreen} />
    </Router>
  );
}

export default App;
