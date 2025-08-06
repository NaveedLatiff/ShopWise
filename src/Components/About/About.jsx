import React, { useEffect, useRef, useState } from 'react'
import './About.css'
import img1 from '../../assets/slider-1.jpg'
import img2 from '../../assets/slider-2.jpg'
import img3 from '../../assets/slider-3.jpg'
import img4 from '../../assets/slider-4.jpg'
import img5 from '../../assets/slider-5.jpg'
import Title from '../Title/Title'

const About = () => {
    let images = [img1, img2, img3, img4, img5]
    let [counter, setCounter] = useState(0)
    let intervalRef = useRef(null)

    function nextSlide() {
        setCounter(prev => prev === images.length - 1 ? 0 : prev + 1)
    }

    function bulletActive(indx) {
        setCounter(indx)
    }

    function startSlider() {
        if (intervalRef.current) return
        intervalRef.current = setInterval(() => {
            nextSlide()
        }, 3000)
    }

    function stopSlider() {
        clearInterval(intervalRef.current)
        intervalRef.current = null
    }

    useEffect(() => {
        startSlider()
        return () => stopSlider()
    }, [])

    return (
        <div id='about' className='about-cont'>

            <div className="part part-1">
                <div
                    className="slider"
                    onMouseEnter={stopSlider}
                    onMouseLeave={startSlider}
                >
                    <img
                        src={images[counter]}
                        className='slide'
                        alt="slide"
                    />

                    <div className='bullets'>
                        {images.map((_, index) => (
                            <span
                                key={index}
                                className='bullet'
                                id={index === counter ? "bullet-active" : ""}
                                onClick={() => bulletActive(index)}
                            ></span>
                        ))}
                    </div>
                </div>
            </div>
            <div className="part part-2">
                <div className="about-text">
                    <h2>Why Shop With <span>ShopWise</span>?</h2>
                    <p>
                        At <strong>ShopWise</strong>, we believe shopping should be simple, fast, and joyful.
                        Explore thousands of quality products across fashion, electronics, home & living, and more  all from trusted brands.
                    </p>
                    <ul>
                        <li><b>Fast & Free Delivery</b></li>
                        <li><b>Secure Payment Options</b></li>
                        <li><b>24/7 Customer Support</b></li>
                        <li><b>Easy Returns & Refunds</b></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About
