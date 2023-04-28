import "./HeroimgStyles.css"
import React from 'react'
import IntroImg from './ragu.jpeg'
import {Link} from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
            <h3>Hi, I'm RAGU VAMSI,</h3>
            <h1>React Developer</h1>
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
    </div>
  )
}

export default Heroimg