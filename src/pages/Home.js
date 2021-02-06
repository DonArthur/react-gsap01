import React, { useRef, useEffect } from 'react'
import logo from '../assets/images/man-united.png';
import '../App.css';
import { TweenMax, Power3 } from 'gsap'

const Home = () => {
    let container = useRef(null)
    let logoItem = useRef(null)
    let textItem = useRef(null)
    let textItemLeft = useRef(null)
  
    useEffect(() => {
      TweenMax.to(container, 0, { css: {visibility: 'visible' }})
      TweenMax.to(
        logoItem,
        1.5,
        {
          opacity: 1,
          x: 50,
          ease: Power3.easeOut
        }
      )
      TweenMax.to(
        textItem,
        1.5,
        {
          opacity: 1,
          y: 20,
          ease: Power3.easeOut
        }
      )
      TweenMax.to(
        textItemLeft,
        1.5,
        {
          opacity: 1,
          y: 20,
          ease: Power3.easeOut
        }
      )
    },[])
      
    return (
        <div ref={el => { container = el }} className="container">
            <div>
                <p className="text-title" ref={el => {textItemLeft = el}}>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
            <div>
                <img
                    ref={el => {logoItem = el}} 
                    src={logo} 
                    className="App-logo" 
                    alt="logo" 
                />
            </div>
            <div>
                <p className="text-title" ref={el => {textItem = el}}>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        </div>
    )
}

export default Home