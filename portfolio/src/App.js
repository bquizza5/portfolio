import React from 'react';
import Main from './components/Main'
import NavBar from './components/NavBar'
import Projects from './components/projects'
import Footer from './components/Footer'
import AboutMe from './components/AboutMe'
import Carousel from './components/carousel/Carousel'
import './App.css';
import ReactGA from 'react-ga';
import ScrollableAnchor, {goToAnchor, configureAnchors} from 'react-scrollable-anchor'

const init = () => {
  // looks like its working
  const trackingId = "UA-158261004-1";
  ReactGA.initialize(trackingId);
  ReactGA.pageview(window.location.pathname + window.location.search);
}
configureAnchors({scrollDuration: 1000})



function App() {

  init()
  
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Main goToAnchor={goToAnchor} />
      <ScrollableAnchor id={'aboutMe'}>
          <div></div>
      </ScrollableAnchor>
      <Carousel />
      {/* <AboutMe /> */}
      <ScrollableAnchor id={'projects'}>
          <div></div>
      </ScrollableAnchor>
        <Projects />

      <Footer />
    </div>
  );
}

export default App;
