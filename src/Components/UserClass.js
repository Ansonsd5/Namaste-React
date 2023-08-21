import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
       count: 0,
       count2: 2,
       count3:3
    }
   
  }

  render() {
    const { name, role, company, workLocation } = this.props;
    const { count, count2, count3} = this.state;
    return (
      <div className="classComponent" >
        <h1>This is a Class Based React Component</h1>
        <h1 style={{color:"red"}}>{name}</h1>
        <h2>{role + " " + company}</h2>
        <h5>{workLocation}</h5>
        <h4>Count : {count}</h4>
        <h4>Count2 :{count2}</h4>
        <h4>Count3 :{count3}</h4>
      </div>
    );
  }
}

export default UserClass;
