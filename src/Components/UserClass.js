import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
       count: 0,
      
    }
   
  }

  render() {
    const { name, role, company, workLocation } = this.props;
    const { count } = this.state;
    const updateCount = () =>{
      console.log(count);
      this.setState({count : count + 1})
    }
    return (
      <div className="classComponent" >
        <h1>This is a Class Based React Component</h1>
        <h1 style={{color:"red"}}>{name}</h1>
        <h2>{role + " " + company}</h2>
        <h5>{workLocation}</h5>
        <h4>Count : {count}</h4>
       <button onClick={updateCount}>Click me to Update Count</button>
      </div>
    );
  }
}

export default UserClass;
