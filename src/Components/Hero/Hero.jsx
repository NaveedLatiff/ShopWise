import React from 'react'
import './Hero.css'
import img from '../../assets/heroimage.jpg'
import img2 from '../../assets/heroimage2.jpg'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="part part-1">
                <h1>Shop Smarter with <span >ShopWise</span></h1>
                <p>Discover the latest fashion trends, electronics, home essentials and more all in one place.</p>
               <div className='shopMore-cont'>
                <button className='shopMore'>Shop More</button>
               </div>
            </div>
            <div className="part part-2">
                <img className='image-1' src={img} alt="" />
                <img  className='image-2' src={img2} alt='' />
            </div>
        </div>
    )
}

export default Hero
