import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { Header } from "./Header";
import { Body } from "./Body";
import AboutUs from "./Components/About";
import Contactus from "./Components/Contactus";
import Error from "./Components/Error";
import Cart from "./Components/Cart";
import RestaurantMenu from "./Components/RestaurantMenu";
// import Grocery from "./Components/Grocery";

const Grocery = lazy(()=> import("./Components/Grocery"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
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
