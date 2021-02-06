import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactMe from './pages/ContactMe';
import PageNotFound from './pages/PageNotFound';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <Router>
      <Navbar />
      <div>
        <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/about" component={AboutPage} />
            <Route path="/projects" component={ProjectsPage} />
            <Route path="/contactme" component={ContactMe} />
            <Route component={PageNotFound} />
        </Switch>
        </div>
    </Router>
  )
};

export default App;