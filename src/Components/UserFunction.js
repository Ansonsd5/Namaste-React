import React, { useState } from "react";

const UserFunction = (props) =>{
    const [count, setCount] = useState(1000);
    const {name,role,workLocation}= props;

    return <div className="functionalComponent">
    <h1>This is a Class Based React Component</h1>
        <h1>{name}</h1>
        <h2>{role}</h2>
        <h3 style={{color:"red"}}>Count {count}</h3>
    </div>
}

export default UserFunction;