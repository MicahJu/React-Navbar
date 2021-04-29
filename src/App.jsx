import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Forum from './pages/Forum';
import Schedule from './pages/Schedule';
import UserPlants from './pages/UserPlants';
import Request from './pages/Request';
import Login from './pages/Login';




function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/forum' component={Forum} />
          <Route path='/schedule' component={Schedule} />
          <Route path='/UserPlants' component={UserPlants} />
          <Route path='/Request' component={Request} />
          <Route path='/Login' component={Login} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
