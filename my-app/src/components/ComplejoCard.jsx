import axios from "axios";
import React from "react";

const ComplejoCard = ({complejo}) => {
    return (
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <img src={complejo.image} alt="" />
            <p>{complejo.name}</p>
            <p>{complejo.event}</p>
            <p>{complejo.city}</p>
            <p className="text-sm font-medium text-gray-900">${complejo.price}</p>
            <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={()=> {
                axios.post('http://localhost:3001/payment', complejo).then((res)=> window.location.href = res.data.response.body.init_point)
            }}
            >
                Pagar
            </button>
        </div>
    )
}

export default ComplejoCard;