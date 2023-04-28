import { Link } from "react-router-dom"
import "./AboutContentStyles.css"
import React from 'react'
import Contact from './Contact.png'
import Contact1 from './Contact1.png'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am I?</h1>
            <p>Im a Final Year UnderGrad from SRM University, Who is Passionate about Design and Developing a responsive secure websites.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        {/* <div className="right">
            <div className="img-container">
                <div className="img-stack-top">
                    <img src={Contact} className="img" alt="true"/>
                </div>
                <div className="img-stack-bottom">
                    <img src={Contact1} className="img" alt="true"/>
                </div>
            </div>
        </div> */}
    </div>
  )
}

export default AboutContent