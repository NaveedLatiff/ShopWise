import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Hero'
import Title from '../../Components/Title/Title'
import About from '../../Components/About/About'
import Products from '../../Components/Products/Products'
import Contact from '../../Components/Contact/Contact'
import Footer from '../../Components/Footer/Footer'
import { Element } from 'react-scroll'

const Home = () => {
    return (
        <>
            <Element name="navbar">
                <Navbar />
            </Element>
            <Hero />
            <div className="container">
                <Title title={"About Us"} />
                <Element name="about">
                    <About />
                </Element>
            </div>
            <Element name="products">
                <Products />
            </Element>
            <div className="container">
                <Title title={"Contact Us"} />
                <Element name="contact">
                    <Contact />
                </Element>
            </div>
            <Footer />
        </>
    )
}

export default Home
