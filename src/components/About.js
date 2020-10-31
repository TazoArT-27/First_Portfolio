import React, { useEffect } from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'
import {
   SiMongodb,
   SiBootstrap,
   SiMaterialUi,
   SiHeroku,
   SiNetlify,
   SiPhp,
   SiFirebase,
   SiApache,
   SiAngular,
   SiVisualstudio,
   SiAtom,
   SiPython
 } from "react-icons/si";
 import {
   DiJavascript1,
   DiMysql,
  } from "react-icons/di";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaNpm,
  FaLinkedinIn,
  FaPlay,
} from "react-icons/fa";

const About = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])


  const [header] = React.useState({
    subHeader: "About Me",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.",
  });
  const [state] = React.useState([
    { id: 1, title: "Name:", text: "Md. Shafayat Tazoar" },
    { id: 2, title: "Email:", text: "shafayattazoar27.official@gmail.com" },
    { id: 3, title: "Phone:", text: "+8801799313189" },
    { id: 4, title: "Linkedin", text: "Shafayat Tazoar" },
  ]);
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <div className="commonBorder"></div>
        </div>
        <div className="row  h-650 alignCenter">
          <div className="col-lg-6 col-md-12 col-12" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
            <div className="about__info">
              <h1>My Skills</h1>
                <div className="header__ul">
                  <div className='about__info-logoDiv'>
                  <li>
                    <FaReact className="headerIcon" />
                  </li>
                  <p className='about__info about__info-logo'>React.js</p>
                  </div>
                  <div className='about__info-logoDiv'>
                  <li>
                    <FaNodeJs className="headerIcon" />
                  </li>
                  <p className='about__info about__info-logo'>Node.js</p>
                  </div>
                  <div className='about__info-logoDiv'>
                  <li>
                    <SiMongodb className="headerIcon" />
                  </li>
                  <p className='about__info about__info-logo'>MongoDB</p>
                  </div>
                  <div className='about__info-logoDiv'>
                  <li>
                    <SiBootstrap className="headerIcon" />
                  </li>
                  <p className='about__info about__info-logo'>Bootstrap</p>
                  </div>
                  <div className='about__info-logoDiv'>
                  <li>
                    <SiMaterialUi className="headerIcon" />
                  </li>
                  <p className='about__info about__info-logo'>MaterialUI</p>
                  </div>
                  <div className='about__info-logoDiv'>
                  <li>
                    <SiHeroku className="headerIcon" />
                  </li>
                  <p className='about__info about__info-logo mx-2'>Heroku</p>
                  </div>
                </div>
                <div className="header__ul">
                  <div className="about__info-logoDiv">
                  <li>
                    <SiNetlify className="headerIcon" />
                  </li>
                  <p className='about__info about__info-logo mx-2'>Netlify</p>
                  </div>
                  <div className="about__info-logoDiv">
                  <li>
                    <FaGithub className="headerIcon" />
                  </li>
                  <p className='about__info about__info-logo mx-2'>Github</p>
                  </div>
                  <div>
                  <li>
                    <SiPhp className="headerIcon" />
                  </li>
                  <p className='about__info about__info-logo mx-3'>PHP</p>
                  </div>
                  <div>
                  <li>
                    <DiJavascript1 className="headerIcon" />
                  </li>
                  <p className='about__info about__info-logo mx-0'>JavaScript</p>
                  </div>
                  <div>
                  <li>
                    <DiMysql className="headerIcon" />
                  </li>
                  <p className='about__info about__info-logo mx-2'>MySQL</p>
                  </div>
                  <div>
                  <li>
                    <FaNpm className="headerIcon" />
                  </li>
                  <p className='about__info about__info-logo mx-3'>NPM</p>
                  </div>
                </div>
                <div className="header__ul">
                  <div>
                  <li>
                    <SiFirebase className="headerIcon" />
                  </li>
                  <p className='about__info about__info-logo mx-1'>Firebase</p>
                  </div>
                  <div>
                  <li>
                    <SiApache className="headerIcon" />
                  </li>
                  <p className='about__info about__info-logo mx-1'>Apache</p>
                  </div>
                  <div>
                  <li>
                    <SiAngular className="headerIcon" />
                  </li>
                  <p className='about__info about__info-logo mx-1'>Angular</p>
                  </div>
                  <div>
                  <li>
                    <SiVisualstudio className="headerIcon" />
                  </li>
                  <p className='about__info about__info-logo mx-1'>VS Code</p>
                  </div>
                  <div>
                  <li>
                    <SiAtom className="headerIcon" />
                  </li>
                  <p className='about__info about__info-logo mx-2'>Atom</p>
                  </div>
                  <div>
                  <li>
                    <SiPython className="headerIcon" />
                  </li>
                  <p className='about__info about__info-logo mx-2'>Python</p>
                  </div>
                </div>
              <br />
              <br/>
              
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
            <div className="about__info">
              <h1>Hi There</h1>
              <div className="about__info-p1">
              I'm a software developer who loves his work and would like to build my career in this sector.  I’m highly motivated, fast learner, creative, curious and a hard worker in the field of software development.

              </div>
              <div className="about__info-p2">
              Currently I’m studying B.Sc in Electrical & Computer Engineering at Rajshahi University of Engineering & Technology. Besides study and updating my skills in software development, I am also involved in some volunteer activities throughout the year.
              </div>
              <div className="info__contacts">
                <div className="row">
                  {state.map((info) => (
                    <div className="col-6">
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
