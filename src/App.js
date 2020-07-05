import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShowPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx'

function App() {
  return (
    <div>
      {/* <HomePage></HomePage> */}
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShowPage} />
      </Switch>
    </div>
  );
}

export default App;
