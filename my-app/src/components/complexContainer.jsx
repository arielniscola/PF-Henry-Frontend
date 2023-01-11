import React from 'react'
import Filters from './Filters'
import ComplexCard from "./ComplexCard";
import { useSelector } from 'react-redux';
import MapComplex from "./mapForComplexs"
import { useLoadScript } from '@react-google-maps/api';
import { useState } from 'react';
import { useEffect } from 'react';
import { updateFavorite } from '../redux/actions';

const ComplexContainer = () => {

  const complexs = useSelector(state => state.complexs)
  const currentUser = useSelector(state => state.currentUser)
  const {isLoaded} = useLoadScript({googleMapsApiKey:"AIzaSyDnQobr1nh7e9Y5r3In5Rmc38aZIqJsMcs"})

  const [arrfav,setArrfav] = useState([])

  const noRep = [...new Set([...currentUser?.favorites,...arrfav])]
  console.log("esto es noRep",noRep)

  useEffect(()=>{
    return updateFavorite(currentUser?.id,{...currentUser, favorites:noRep},true)
  },[])

  return (
    <div>
        <Filters/>
        <div className='grid grid-cols-2'>
          <div className='flex col-span-1 w-full h-full flex-col items-start'>
          {complexs?.map(complex =>(<ComplexCard key={complex.id} arrfav={arrfav} setArrfav={setArrfav} complexDetails={complex} id={complex.id} />))}
          </div>
          <div className='col-span-1 bg-blue-500 h-full w-full'>
            {isLoaded && <MapComplex array={complexs}/>}
          </div>
        </div>
    </div>
  )
}

export default ComplexContainer