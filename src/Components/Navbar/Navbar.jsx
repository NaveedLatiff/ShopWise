import React, { useEffect, useState } from 'react'
import './Navbar.css'
import menu from '../../assets/menu.svg'
import close from '../../assets/close.svg'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { Link } from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom'

gsap.registerPlugin(useGSAP)

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    function OpenSidebar() {
        setIsSidebarOpen(true)
        gsap.set('.page', {
            x: '1000%',
            opacity: 0
        })
        gsap.set('.close', {
            x: '250%',
            opacity: 0
        })

        let t1 = gsap.timeline()
        t1.to('.sidebar', {
            x: 0,
            duration: 0.5,
            ease: "power4.out",
        })
            .to('.page', {
                x: 0,
                opacity: 1,
                duration: 0.3,
                ease: "power4.out",
                stagger: {
                    each: 0.3,
                    from: "end"
                }
            })
            .to('.close', {
                x: 0,
                duration: 0.4,
                opacity: 1,
                ease: "power4.out",
            })
    }

    function CloseSidebar() {
        setIsSidebarOpen(false)

        let t1 = gsap.timeline()
        t1.to('.close', {
            x: "250%",
            duration: 0.4,
            opacity: 0,
            ease: "power4.out",
        })
            .to('.sidebar', {
                x: "1000%",
                duration: 0.5,
                ease: "ease-in",
            })
            .to('.page', {
                x: "1000%",
                duration: 0.1,
                opacity: 0,
                ease: "power4.out",
            })
    }

    useEffect(() => {
        const handleScroll = () => {
            if (isSidebarOpen) {
                CloseSidebar()
            }
        }

        if (isSidebarOpen) {
            window.addEventListener('scroll', handleScroll)
            window.addEventListener('touchmove', handleScroll)
        }

        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('touchmove', handleScroll)
        }
    }, [isSidebarOpen])

    return (
        <div className='header'>
            <nav className='Navbar'>
                <div>
                    <p className='web-logo'>Shop<span style={{ color: "#007bff" }}>Wise</span></p>
                </div>
                <img
                    src={menu}
                    alt="menu"
                    className='menu'
                    onClick={OpenSidebar}
                />
            </nav>
            <div className='sidebar'>
                <div className='close-icon'>
                    <img
                        src={close}
                        alt="close"
                        className='close'
                        onClick={CloseSidebar}
                    />
                </div>
                <div className='pages'>
                    <p>
                        <span className='page'>
                            <Link
                                to="navbar"
                                smooth={true}
                                duration={500}
                                offset={0}
                                onClick={CloseSidebar}
                            >
                                Home
                            </Link>
                        </span>
                    </p>
                    <p>
                        <span className="page">
                            <Link
                                to="about"
                                smooth={true}
                                duration={500}
                                offset={-70}
                                onClick={CloseSidebar}
                            >
                                About
                            </Link>
                        </span>
                    </p>
                    <p>
                        <span className='page'>
                            <Link
                                to="products"
                                smooth={true}
                                duration={500}
                                offset={-70}
                                onClick={CloseSidebar}
                            >
                                Products
                            </Link>
                        </span>
                    </p>
                    <p>
                        <span className='page'>
                            <Link
                                to="contact"
                                smooth={true}
                                duration={500}
                                offset={-70}
                                onClick={() => {
                                    CloseSidebar();
                                    setTimeout(() => {
                                        const el = document.querySelector('[name="contact"]');
                                        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }, 700);
                                }}
                            >
                                Contact
                            </Link>
                        </span>
                    </p>
                    <p>
                        <span className='page'>
                            <RouterLink
                                className='link'
                                to="/cart"
                                onClick={CloseSidebar}
                            >
                                Cart
                            </RouterLink>
                        </span>
                    </p>
                </div>
            </div>
        </div >
    )
}

export default Navbar
