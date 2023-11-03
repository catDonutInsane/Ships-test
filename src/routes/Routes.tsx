import React from "react";
import { routeList } from "./routeList";
import {Routes, Route} from 'react-router-dom'
export const RoutesList =()=>{

    return(
        <Routes>
            {routeList.map(i=><Route path={i.path} element={i.element}></Route>)}
        </Routes>
    )
}