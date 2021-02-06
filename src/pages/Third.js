import React, { useEffect, useRef } from 'react'
import { Power2, TimelineLite } from 'gsap'
import Image from '../assets/images/image01.webp'
import CSSRulePlugin from 'gsap/CSSRulePlugin'

const Third = () => {
    let container = useRef(null)
    let image = useRef(null)
    let imageReveal = CSSRulePlugin.getRule('.img-container:after')

    const tl = new TimelineLite()

    useEffect(() => {
        tl.to(container, 0, { css: {visibility: 'visible'}})
        .to(imageReveal, 0, { width: '100%' })
        .to(imageReveal, 1, { width: '0%', ease: Power2.easeInOut })
        .from(image, 2, { scale: 2.5, ease: Power2.easeOut, delay: -1.5 })
    }, [])

    return (
        <div ref={el => { container = el }} className="container">
            <div></div>
            <div className="img-container">
                <img ref={el => { image = el}} src={Image} alt="img" />
            </div>
            <div></div>
        </div>
    )
}

export default Third