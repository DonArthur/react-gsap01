import React, { useRef, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { TweenMax, Power3 } from 'gsap'

function App() {
  let logoItem = useRef(null)
  let textItem = useRef(null)

  useEffect(() => {
    TweenMax.to(
      logoItem,
      1.5,
      {
        opacity: 1,
        y: -50,
        ease: Power3.easeOut
      }
    )
    TweenMax.to(
      textItem,
      1.5,
      {
        opacity: 1,
        x: -50,
        ease: Power3.easeOut
      }
    )
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img
          ref={el => {logoItem = el}} 
          src={logo} 
          className="App-logo" 
          alt="logo" 
        />
        <p className="text-title" ref={el => {textItem = el}}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
