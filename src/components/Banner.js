import React from "react";
import Typical from 'react-typical'
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaLinkedinIn,
  FaPlay,
} from "react-icons/fa";
const Banner = () => {
  const [state] = React.useState({
    title: "I am Shafayat",
    text:
      "i'm shafayat, passionate software developer with many self made projects​",
    image: "/images/man-01.png",
  });
  return (
    <header className="header" id="home">
    
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <ul className="header__ul">
                  <li>
                    <a href="https://www.facebook.com/shafayat.tazoar.31/"><FaFacebookF className="headerIcon" /></a>
                  </li>
                  <li>
                    <FaTwitter className="headerIcon" />
                  </li>
                  <li>
                    <a href='https://www.linkedin.com/in/afitazoar/'><FaLinkedinIn className="headerIcon" /></a>
                  </li>
                  <li>
                    <FaInstagram className="headerIcon" />
                  </li>
                </ul>
                {/* <Typical
                  steps={['I am ', 1000, 'Shafayat Tazoar', 100]}
                  loop={Infinity}
                  wrapper="h1"
                /> */}
                <h1>{state.title}</h1>
                <Typical
                  steps={['Software Developer', 1000, 'Web Designer', 1000, 'Programmer', 1000]}
                  loop={Infinity}
                  wrapper="h4"
                />
                <p className='mt-3'>{state.text}</p>
                <div className="header__buttons">
                  <a href="https://drive.google.com/file/d/1Oq9d4MQiWzN0oNmQXakjDN9hnDD7mWXt/view?usp=sharing" className="btn btn-outline">
                    My Resume
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  <a href="#contact" className="btn btn-outline">
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="banner__img">
              {/* <img src={state.image} alt="man" /> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
