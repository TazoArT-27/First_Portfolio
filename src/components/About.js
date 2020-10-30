import React from "react";
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
          <div className="col-6">
            <div className="about__info">
              <h1>My Skills</h1>
                <div className="header__ul">
                  <li>
                    <FaReact className="headerIcon" />
                  </li>
                  <li>
                    <FaNodeJs className="headerIcon" />
                  </li>
                  <li>
                    <SiMongodb className="headerIcon" />
                  </li>
                  <li>
                    <SiBootstrap className="headerIcon" />
                  </li>
                  <li>
                    <SiMaterialUi className="headerIcon" />
                  </li>
                  <li>
                    <SiHeroku className="headerIcon" />
                  </li>
                </div>
                <div className="header__ul">
                  <li>
                    <SiNetlify className="headerIcon" />
                  </li>
                  <li>
                    <FaGithub className="headerIcon" />
                  </li>
                  <li>
                    <SiPhp className="headerIcon" />
                  </li>
                  <li>
                    <DiJavascript1 className="headerIcon" />
                  </li>
                  <li>
                    <DiMysql className="headerIcon" />
                  </li>
                  <li>
                    <FaNpm className="headerIcon" />
                  </li>
                </div>
                <div className="header__ul">
                  <li>
                    <SiFirebase className="headerIcon" />
                  </li>
                  <li>
                    <SiApache className="headerIcon" />
                  </li>
                  <li>
                    <SiAngular className="headerIcon" />
                  </li>
                  <li>
                    <SiVisualstudio className="headerIcon" />
                  </li>
                  <li>
                    <SiAtom className="headerIcon" />
                  </li>
                  <li>
                    <SiPython className="headerIcon" />
                  </li>
                </div>
              <br />
              <br/>
              
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <h1>Hi There</h1>
              <div className="about__info-p1">
              With due respect I would like to introduce myself as a software developer who loves his work and would want to build my career in this sector.  I’m highly motivated, fast learner, creative, curious and a hard worker in the field of software development.

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
