import React from 'react';
import Main from './components/Main'
import NavBar from './components/NavBar'
import Projects from './components/projects'
import './App.css';
import ReactGA from 'react-ga';

function App() {

  const trackingId = "UA-158261004-1";
  ReactGA.initialize(trackingId);
  ReactGA.pageview('/homepage');

  return (
    <div className="App">
      <NavBar />
      <Main />
      <Projects />
    </div>
  );
}

export default App;
