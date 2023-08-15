import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () =>{
    const routeError = useRouteError();
    return <div>
        <h5>{routeError.status}</h5>
        <h4>{routeError.statusText}</h4>
        <button>Home</button>
    </div>
}
export default Error;