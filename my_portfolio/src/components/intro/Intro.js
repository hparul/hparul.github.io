import React from 'react';
   
import "./intro.css";
import Me from "../../images/MyImage.jpg";

const Intro = () => {
  return (
    <div className="intro" id='about'>
      <div className="intro-bg"></div>
      <div className="intro-left">
        <div className="intro-left-wrapper">
          <h2 className="intro-intro">Hello, I am </h2>
          <h1 className="intro-name">Parul
          </h1>
              {/* <div className="intro-title">
            <div className="intro-title-wrapper">
              <div className="intro-title-item">Web Developer</div>
              <div className="intro-title-item">UI/UX Designer</div>
              <div className="intro-title-item">Photographer</div>
              <div className="intro-title-item">Writer</div>
              <div className="intro-title-item">Content Creator</div>
            </div>
          </div>  */}
     <p className="intro-desc">
            
            I am a front-end developer with good analytical skills and a scientific approach towards problem solving.I bring forth a positive attitude and willingness and motivation to learn new skills independently or in a team.
          </p><br/>
          <p className="intro-desc">I love to design and develop services for customers,
            specializing in creating stylish, modern websites and
            online stores.</p>
          <div className="intro-links">
            <a href
              ="#contact"
              className="contact">
              Contact Me
            </a>
            <a href="#projects"
              className="project">
              See My Past Work
            </a>
            <a href
              ="#cv"
              className="project">
              Download CV
            </a>

          </div>
        </div>
        </div>
        
      {/* </div> */}
      <div className="intro-right">
        <div className="intro-rbg"></div>
        <img src={Me} alt="my photograph" className="intro-img" />
      </div>
    </div>
  );
};




export default Intro;
