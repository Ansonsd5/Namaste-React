
import React from 'react';
import UserClass from './UserClass';
import UserFunction from './UserFunction';
import UserClassApi from './UserclassApi';
import UserContext from '../utils/userContext';
class AboutUsClass extends React.Component{
constructor(props){
 super(props)
  console.log("Parent constructor");
}

componentDidMount(){
  console.log("Parent did Mount");
}
  render(){
    console.log("Parent Render");

    <UserContext.Consumer ></UserContext.Consumer>
    return (
      <section className="flex-col p-10 bg-green-200">
        <div className="about-content">
          <h1 className='text-center from-neutral-600 text-4xl'>About Us</h1>
          {/* <UserFunction name={"Anson Saver Dsouza"} role={"Frontend Developer @Niveus Solution"} workLocation= {"Mangaluru Karnataka"}/> */}
         
          <UserClass />
          {/* <UserClass name={"Anson Dsouza"} role={"FrontEnd Developer"} company={"Niveus Solutions"} workLocation= {"Mangalore Karnataka"}/> */}
          <UserClassApi />
          <div>About Us using useContext
            userName : 
            <UserContext.Consumer>{(data)=><h1>{data.loggedInUser}</h1>}</UserContext.Consumer>
          </div>
        </div>
        <div className="about-image">
          <img src="about-image.jpg" alt="Team at work" />
        </div>
        
      </section>
      
    );
  }

}
export default AboutUsClass;

// const AboutUs = () => {
//   return (
//     <section className="about-us">
//       <div className="about-content">
//         <h1>About Us</h1>
//         <UserFunction name={"Anson Saver Dsouza"} role={"Frontend Developer @Niveus Solution"} workLocation= {"Mangaluru Karnataka"}/>
       
//         <UserClass name={"Renol"} role={"FrontEnd Developer"} company={"Niveus Solutions"} workLocation= {"Mangalore Karnataka"}/>
//       </div>
//       <div className="about-image">
//         <img src="about-image.jpg" alt="Team at work" />
//       </div>
      
//     </section>
    
//   );
// };

// export default AboutUs;

