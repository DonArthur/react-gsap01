import React, { useRef, useEffect, useState } from 'react'
import { TweenMax, Power3 } from 'gsap'

const Second = () => {
    let container = useRef(null)
    let textItemLeft = useRef(null)
    let textItemRight = useRef(null)
    let circle = useRef(null)
    let circleRed = useRef(null)
    let circleBlack = useRef(null)

    const [circleState, setCircleState] = useState(false)
    const [circleRedState, setCircleRedState] = useState(false)
    const [circleBlackState, setCircleBlackState] = useState(false)

    let handleExpand = () => {
        TweenMax.to(circle, 1, { width: 100, height: 100, ease: Power3.easeOut })
        setCircleState(true)
    }
    const handleShrink = () => {
        TweenMax.to(circle, 1, { width: 75, height: 75, ease: Power3.easeOut })
        setCircleState(false)
    }
    const handleRedExpand = () => {
        TweenMax.to(circleRed, 1, { width: 100, height: 100, ease: Power3.easeOut })
        setCircleRedState(true)
    }
    const handleRedShrink = () => {
        TweenMax.to(circleRed, 1, { width: 75, height: 75, ease: Power3.easeOut })
        setCircleRedState(false)
    }
    const handleBlackExpand = () => {
        TweenMax.to(circleBlack, 1, { width: 100, height: 100, ease: Power3.easeOut })
        setCircleBlackState(true)
    }
    const handleBlackShrink = () => {
        TweenMax.to(circleBlack, 1, { width: 75, height: 75, ease: Power3.easeOut })
        setCircleBlackState(false)
    }

    useEffect(() => {
        TweenMax.to(container, 0, { css: {visibility: 'visible' }})
        TweenMax.to(
          textItemLeft,
          1.5,
          {
            opacity: 1,
            x: 10,
            ease: Power3.easeOut
          }
        )
        TweenMax.to(
          textItemRight,
          1.5,
          {
            opacity: 1,
            x: 10,
            ease: Power3.easeOut
          }
        )
        TweenMax.from(circle, 1.2, { opacity: 0, x: 40, ease: Power3.easeOut})
        TweenMax.from(circleRed, 1.2, { opacity: 0, x: 40, ease: Power3.easeOut, delay: .4})
        TweenMax.from(circleBlack, 1.2, { opacity: 0, x: 40, ease: Power3.easeOut, delay: .8})
      },[])

      return (
        <div ref={el => { container = el }} className="container">
            <div>
                <h1 className="text-title" ref={el => {textItemLeft = el}}>Second Tutorial</h1>
            </div>
            <div>
                <div onClick={circleState ? handleShrink : handleExpand} ref={el => { circle = el}} className="circle"></div>
                <div onClick={circleRedState ? handleRedShrink : handleRedExpand} ref={el => { circleRed = el}} className="circle red"></div>
                <div onClick={circleBlackState ? handleBlackShrink : handleBlackExpand} ref={el => { circleBlack = el}} className="circle black"></div>
            </div>
            <div>
                <h1 className="text-title" ref={el => {textItemRight = el}}>Second Tutorial</h1>
            </div>
        </div>
    )
}

export default Second