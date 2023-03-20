import React, { Component } from 'react';
import Portfolio from './Portfolio';
import ContactUs from './ContactUs';

export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;

    return (
      <section >
         <header>
            <div className="row banner">
              <div className="banner-text">
                <h1 className="responsive-headline">{resumeData.name}.</h1>
                <h3 style={{ color: '#fff', fontFamily: 'sans-serif ' }}>
                  {resumeData.roleDescription}
                </h3>
                <hr />
                <ul className="social">
                  {resumeData.socialLinks &&
                    resumeData.socialLinks.map((item) => {
                      return (
                        <li key={item.name}>
                          <a href={item.url} target="_blank" rel="noreferrer">
                            <i className={item.className}></i>
                          </a>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>

            
            <p className="scrolldown">
              <a className="smoothscroll" href="#about">
                <i className="icon-down-circle"></i>
              </a>
            </p>
         </header>
            
         <div className="row" id="about">
            <div className="three columns">
               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />
            </div>
            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>{resumeData.name}</span>
                     <br></br>
       						   <span>
                     {resumeData.address}
                    </span>
                    <br></br>
                    <span>{resumeData.website}</span>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
         <Portfolio  resumeData={resumeData}/>
         <ContactUs  resumeData={resumeData}/>
      </section>
    );
  }
}