import React from 'react'
import axios from 'axios'

export default function BotonPagar({complejo}) {
  // const {userId, id, name, image,event, price, comision}= complejo
  return (
    <div>
        <button 
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    onClick={()=> {
        axios.post('http://localhost:3001/mercadopago/payment', complejo).then((res)=> window.location.href = res.data.response.body.init_point)
    }}
    >
        Pagar
    </button>
    </div>
  )
}
