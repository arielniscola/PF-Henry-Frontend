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
  const {isLoaded} = useLoadScript({googleMapsApiKey:process.env.REACT_APP_GOOGLE_MAPS_API_KEY})

  return (
    <div>
        <Filters/>
        <div className='grid grid-cols-2'>
          <div className='flex col-span-1 w-full h-full flex-col items-start'>
          {complexs?.map(complex =>(<ComplexCard key={complex.id} complexDetails={complex} id={complex.id} />))}
          </div>
          <div className='col-span-1 bg-blue-500 h-full w-full'>
            {isLoaded && <MapComplex array={complexs}/>}
          </div>
        </div>
    </div>
  )
}

export default ComplexContainer