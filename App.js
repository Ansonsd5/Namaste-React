import React from "react";
import  ReactDOM  from "react-dom";
import { Header } from "./Header";
import { Body } from "./Body";

const AppLayout = () =>{
return (
  <div className="app">
    <Header />
    <Body />

  </div>
)
} 

  ReactDOM.render(<AppLayout />,document.getElementById("root"));