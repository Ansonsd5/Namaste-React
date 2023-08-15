import React from "react";
import { useRouteError, Link } from "react-router-dom";

const Error = () =>{
    const routeError = useRouteError();
    return <div>
        <h5>{routeError.status}</h5>
        <h4>{routeError.statusText}</h4>
        <button><Link>Home</Link></button>
    </div>
}
export default Error;