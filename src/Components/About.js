
import React from 'react';
import UserClass from './UserClass';
import UserFunction from './UserFunction';

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-content">
        <h1>About Us</h1>
        <UserFunction name={"Anson Saver Dsouza"} role={"Frontend Developer @Niveus Solution"} workLocation= {"Mangaluru Karnataka"}/>
       
        <UserClass name={"Renol"} role={"FrontEnd Developer"} company={"Niveus Solutions"} workLocation= {"Mangalore Karnataka"}/>
      </div>
      <div className="about-image">
        <img src="about-image.jpg" alt="Team at work" />
      </div>
      
    </section>
    
  );
};

export default AboutUs;

