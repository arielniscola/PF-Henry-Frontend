import React from "react";
import SearchCity from "./SearchCity";
import home1 from "../data/home1.jpeg";

const Header = () => {
    return (
        <div className="bg-cover  bg-right-top lg:pb-40 ">
            <img className="w-screen max-h-screen opacity-60 absolute bg-right-top" src={home1}  alt="Messi" />
            <div className="relative px-4 py-16 sm:py-24 sm:px-6 lg:py-32 lg:px-8">
                <h1 className="text-4xl font-extrabold tracking-tight text-black sm:text-5xl lg:text-6xl">Welcome !</h1>
                <p className="mt-6 max-w-3xl text-2xl text-black">Organize the event you want, wherever you want!</p>
                <div className="mt-6">
                     <SearchCity />  
                </div>
            </div>
        </div>
    )
    }

export default Header;