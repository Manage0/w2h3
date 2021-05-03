import React from 'react'
import {Redirect, Route} from "react-router-dom"
import {letMeTrough} from "./mainPage"

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