import React from 'react';

const Blog = () => {
    const [header] = React.useState({
        mainHeader: "Blog",
        subHeading: "My Blogs",
        text:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.",
      });
    return (
        
            <div className="blogs" id='blog'>
      <div className="container">
        <div className="common">
          <h3 className="heading">{header.mainHeader}</h3>
          <h1 className="mainHeader">{header.subHeading}</h1>
          <div className="commonBorder"></div>
        </div>
        <div className="row">
        <div class="card blog" style={{width: '20rem'}}>
          <img style={{width: '100%', borderRadius: '8px 8px 0px 0px'}} src="images/project1.png" class="card-img-top" alt="..."/>
          <div class="card-body p-2">
            <h5 class="card-title priceHeading">Creative Agency</h5>
            <p class="card-text">A full-stack IT company website using React, Node & MongoDB</p>
            <div className="row p-3">
              <div className="col-md-6 mx-auto"><a href='' type="button" class="btn btn-smart">Read More</a></div>
            </div>
          </div>
        </div>
        <div class="card blog" style={{width: '20rem'}}>
          <img style={{width: '100%', borderRadius: '8px 8px 0px 0px'}} src="images/project2.png" class="card-img-top" alt="..."/>
          <div class="card-body p-2">
            <h5 class="card-title priceHeading">Online Shopping</h5>
            <p class="card-text">A full-stack online shopping website using React, Node & MongoDB</p>
            <div className="row p-3">
              <div className="col-md-6 mx-auto"><a href='' type="button" class="btn btn-smart">Read More</a></div>
              
            </div>
          </div>
        </div>
        <div class="card blog" style={{width: '20rem'}}>
          <img style={{width: '100%', borderRadius: '8px 8px 0px 0px'}} src="images/project3.png" class="card-img-top" alt="..."/>
          <div class="card-body p-2">
            <h5 class="card-title priceHeading">Volunteer Network</h5>
            <p class="card-text">A full-stack volunteer finding website using React, Node & MongoDB</p>
            <div className="row p-3">
              <div className="col-md-6 mx-auto"><a href="" type="button" class="btn btn-smart">Read More</a></div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
        
    );
};

export default Blog;