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
    const { name, location, avatar_url,login,created_at } = this.state.userInfo;

   
   
    return (
      
      <div className="flex-row btnTextColor" >
        <h1 className="text-xl" >This is a Class Based React Component</h1>
        <h1 className=" text-xl">{name}</h1>
        <h5>{login}</h5>
        <h5>{location}</h5>
        <h5>Since from {created_at}</h5>
        <img className="m-2" src={avatar_url} alt="avatar" style={{height:44,width:44,borderRadius:"50%"}} />
        
      
      </div>
    );
  }
}

export default UserClass;
