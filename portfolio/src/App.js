import React from 'react';
import Main from './components/Main'
import NavBar from './components/NavBar'
import Projects from './components/projects'
import Footer from './components/Footer'
import './App.css';
import ReactGA from 'react-ga';

const init = () => {
  // looks like its working
  const trackingId = "UA-158261004-1";
  ReactGA.initialize(trackingId);
  ReactGA.pageview(window.location.pathname + window.location.search);
}



function App() {

init()

  return (
    <div className="App">
      {/* <NavBar /> */}
      <Main />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
