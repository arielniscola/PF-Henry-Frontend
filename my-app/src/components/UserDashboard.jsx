import React from "react";
import { Link } from "react-router-dom";
import perfil from "../data/perfil.jpeg";





const UserDashboard = () => {


  return (
    <div className="flex border border-gray-300 m-10 rounded-2xl p-2 "
    style={{
      height: "300px",
      backgroundImage: `url(${perfil})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
    >
     <div className="mt-10 ml-10">
        <img src="https://i.ibb.co/0nQqZ3r/undraw-Online-chat-re-4r4y.png"
        className="w-36 h-36 mb-3 border border-white rounded-md p-2" 
        alt="undraw-Online-chat-re-4r4y" 
        border="0" />
        <h1 className="text-2xl font-bold mb-3 text-white"
        >Nombre</h1>
        </div>
        <div className="mt-10 ml-10">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-10"
        >New Reservation</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-10"
        >My Reservations</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-10"
        >My Favorites</button>
        <button className="bg-pink-400 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded ml-10"
        >Edit Profile</button>
    </div>
    </div>
  )

};

export default UserDashboard;
