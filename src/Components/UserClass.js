import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    console.log("Child constructor");
    super(props);

    this.state = {
       count: 0,
       unlike:0
      
    }
   
  }
  componentDidMount(){
    console.log("child component did mount");
  }
  render() {
    {console.log("Child Render")}
    const { name, role, company, workLocation } = this.props;
    const { count , unlike} = this.state;
    const updateCount = () =>{
      this.setState({count : this.state.count + 1})
    }

   
    return (
      
      <div className="classComponent" >
        <h1>This is a Class Based React Component</h1>
        <h1 style={{color:"red"}}>{name}</h1>
        <h2>{role + " " + company}</h2>
        <h5>{workLocation}</h5>
        <h4>Count : {count}</h4>
        <h4>unLike : {unlike}</h4>
       <button onClick={updateCount}>Like</button>
       <button onClick={() => {this.setState({unlike :this.state.unlike -1})}}>disLike</button>
      </div>
    );
  }
}

export default UserClass;
