import React from 'react';
import Main from './components/Main'
import NavBar from './components/NavBar'
import Projects from './components/projects'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
      <Projects />
    </div>
  );
}

export default App;
