import React from "react";

const Prices = () => {
  const [header] = React.useState({
    mainHeader: "Project",
    subHeading: "My Projects",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.",
  });
 
  return (
    <div className="prices" id='projects'>
      <div className="container">
        <div className="common">
          <h3 className="heading">{header.mainHeader}</h3>
          <h1 className="mainHeader">{header.subHeading}</h1>
          <div className="commonBorder"></div>
        </div>
        <div className="row">
        <div class="card price" style={{width: '20rem'}}>
          <img style={{width: '100%', borderRadius: '8px 8px 0px 0px'}} src="images/project1.png" class="card-img-top" alt="..."/>
          <div class="card-body p-2">
            <h5 class="card-title priceHeading">Creative Agency</h5>
            <p class="card-text">A full-stack IT company website using React, Node & MongoDB</p>
            <div className="row mx-auto p-3">
              <div className="col-md-6"><a href='https://github.com/TazoArT-27/creative-agency-client' type="button" class="btn btn-smart">Github</a></div>
              <div className="col-md-6"><a href='https://creative-agency-ba4ee.firebaseapp.com/' type="button" class="btn btn-smart">Website</a></div>
            </div>
          </div>
        </div>
        <div class="card price" style={{width: '20rem'}}>
          <img style={{width: '100%', borderRadius: '8px 8px 0px 0px'}} src="images/project2.png" class="card-img-top" alt="..."/>
          <div class="card-body p-2">
            <h5 class="card-title priceHeading">Online Shopping</h5>
            <p class="card-text">A full-stack online shopping website using React, Node & MongoDB</p>
            <div className="row mx-auto p-3">
              <div className="col-md-6"><a href='https://github.com/TazoArT-27/ema-john-simple-final' type="button" class="btn btn-smart">Github</a></div>
              <div className="col-md-6"><a href='https://tender-newton-e9bc95.netlify.app/' type="button" class="btn btn-smart">Website</a></div>
            </div>
          </div>
        </div>
        <div class="card price" style={{width: '20rem'}}>
          <img style={{width: '100%', borderRadius: '8px 8px 0px 0px'}} src="images/project3.png" class="card-img-top" alt="..."/>
          <div class="card-body p-2">
            <h5 class="card-title priceHeading">Volunteer Network</h5>
            <p class="card-text">A full-stack volunteer finding website using React, Node & MongoDB</p>
            <div className="row mx-auto p-3">
              <div className="col-md-6"><a href="https://github.com/TazoArT-27/Volunteer-Network-Client" type="button" class="btn btn-smart">Github</a></div>
              <div className="col-md-6"><a href='https://volunteernetwork-ad5f9.web.app/' type="button" class="btn btn-smart">Website</a></div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Prices;
