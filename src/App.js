import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";


import { Header } from "./Header";
import { Body } from "./Body";
import AboutUs from "./Components/About";
import Contactus from "./Components/Contactus";
import Error from "./Components/Error";


const AppLayout = () =>{
return (
  <div className="app">
    <Header />
    <Body />
  
  </div>
)
} 
const appRouters = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout />,
    errorElement: <Error />,
  },
  {
    path:"/about",
    element: <AboutUs />,
    errorElement: <Error />,
  },
  {
    path:"/contact",
    element: <Contactus />,
    errorElement: <Error />,
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouters} />);