import React from 'react'
import {Redirect, Route} from "react-router-dom"
import {letMeTrough} from "./mainPage"

//letmetraough helyett token az axiosban, ha az valid, akkor mehet

export const PrivateRoute=({
    component: Component, ...rest
}) =>(
    <Route {...rest}
    render={props=>
   letMeTrough?
(
<Component {...props}/>)
:
(
    <Redirect
    to={{pathname: "/",
state:{from:props.location}}}
/>
)}></Route>
)