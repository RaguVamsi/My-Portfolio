import React from 'react'
import "./Footer.css"
import {FaHome, FaPhone, FaMailBulk, FaLinkedin, FaGithub, FaTwitter} from "react-icons/fa"

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    <div>
                        <p>House No:03 Pilliyar Koil ST</p>
                        <p>Potheri, Chennai</p>
                    </div>
                </div>
                <div className='phone'>
                        <h4><FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>8333010971</h4>
                </div>
                <div className='gmail'>
                        <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>raguvamsikashyap@gmail.com</h4>
                    </div>
            </div>
            <div className='right'>
                <h4>About</h4>
                <p>Hi this is Ragu a self-driven and ambitious student with a passion for web development.<br/>With a strong interest in creating dynamic and interactive web experiences, dedicated my time and energy to mastering the art of JavaScript and ReactJS.</p>
                <div className='social'>
                <FaLinkedin size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                <FaGithub size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                <FaTwitter size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Footer