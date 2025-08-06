import React from 'react'
import './Footer.css'
import githubLogo from '../../assets/githubLogo.png'
import linkedIn from '../../assets/linkedinImage.png'

const Footer = () => {
  return (
    <footer>
        <p>Made By Naveed <i><span style={{color:"#007bff"}}>Latif</span></i></p>
        <div className='accounts'>
            <span className='github'>
                <a href="https://github.com/NaveedLatiff" target="_blank" rel="noopener noreferrer"><img src={githubLogo}/></a>
            </span>
            <span className='linkedin'>
               <a href="https://www.linkedin.com/in/naveed-latif-9702b3287/" target="_blank" rel="noopener noreferrer"> <img src={linkedIn} /></a>
            </span>
            <span></span>
        </div>
    </footer>
  )
}

export default Footer
