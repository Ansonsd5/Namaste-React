import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    console.log("Child constructor");
    super(props);

    this.state = {
      userInfo :{
        name: "NO name",
        location: "default",
        avatar: "",
      }
      
      
    }
   
  }
 async componentDidMount(){
    const data = await fetch("https://api.github.com/users/Ansonsd5");
    const jsonData = await data.json();
    console.log(jsonData);
    

    this.setState({userInfo : jsonData})
  }
  render() {
    {console.log("Child Render")}
    const { name, location, avatar_url,login } = this.state.userInfo;

   
   
    return (
      
      <div className="classComponent" >
        <h1>This is a Class Based React Component</h1>
        <h1 style={{color:"red"}}>{name}</h1>
        <h5>{login}</h5>
        <img src={avatar_url} alt="avatar" style={{height:44,width:44,borderRadius:"50%"}} />
        
      
      </div>
    );
  }
}

export default UserClass;
