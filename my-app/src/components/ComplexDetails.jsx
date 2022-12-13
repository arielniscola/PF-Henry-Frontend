import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {getComplexDetails} from '../redux/actions'


const ComplexDetails = () => {
  const dispatch = useDispatch()
  const complexs = useSelector(state => state.allComplexs)
  const complex = useSelector(state => state.detail)
  const id = useParams().id

  useEffect(() =>{
    dispatch(getComplexDetails(id,complexs))
  },[dispatch,id,complexs])

    return (
        <div className="flex flex-col m-10  justify-around ">
        <div className="flex flex-row ">
          <img className="max-w-[400px] h-52 rounded-lg shadow-xl" src={complex.image} alt={complex.name} />
          <div className="mx-5">
            <p className="text-lg font-bold text-gray-500">Event: {complex.event}</p>
            <p className="text-2xl mb-2 py-2">{complex.name} </p>
            <p className="text-gray-400 mb-2">Address: {complex.address}</p>
            <span className="p-2 w-9 rounded-2xl border-gray-500 border">
              $500
            </span>
            <span className="p-2 ml-2 w-9 rounded-2xl border-gray-500 border">
              2HS
            </span>
          </div>
          <span className="self-center text-xl">Rating: {complex.rating} ★</span>
        </div>
        <button className="m-5 self-start bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Reserve
        </button>
      </div>
    );
    }

export default ComplexDetails;