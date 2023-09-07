import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { Header } from "./Components/Header";
import { Body } from "./Components/Body";
import AboutUs from "./Components/About";
import Contactus from "./Components/Contactus";
import Error from "./Components/Error";
import Cart from "./Components/Cart";
import RestaurantMenu from "./Components/RestaurantMenu";
import UserContext from "./utils/userContext";
// import Grocery from "./Components/Grocery";

const Grocery = lazy(()=> import("./Components/Grocery"));

const AppLayout = () => {
  const [ userName, setUserName ] = useState();
  useEffect(()=>{
    const data = {
      name : "Calvin Dsouza",
    }
    setUserName(data.name);
    },[])
  return (
    <UserContext.Provider value={{loggedInUser : userName,setUserName}}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
  );
};
const appRouters = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/grocery",
        element:<div><Suspense fallback={<div>This my step step towrads lazy loading</div>}><Grocery /></Suspense> </div>
      },
      {
        path: "/contact",
        element: <Contactus />,
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path : "/restaurant/:resId",
        element: <RestaurantMenu />
      }
      
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouters} />);
