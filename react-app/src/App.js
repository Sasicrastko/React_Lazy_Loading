import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage.js'
import ProductDetail from './components/ProductDetail.js'

import {BrowserRouter as Router, Route} from 'react-router-dom';

const App = () => (
  <Router>
        <Route exact path='/' component={LandingPage} />
        <Route path="/product/:productId"  render={(props) => <ProductDetail {...props}/> } />
  </Router>
);

export default App;