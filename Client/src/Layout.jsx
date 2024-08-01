import React from "react";
import Navbar from './components/Navbar';
import { Outlet,ScrollRestoration } from "react-router-dom";


export default function Layout(){
   
    return(
        <>
            <ScrollRestoration/>
                <Navbar/>
                <Outlet/>
        </>

    );
}