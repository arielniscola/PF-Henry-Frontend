import React from 'react'
import Filters from './Filters'
import ComplexCard from "./ComplexCard";
import { useSelector } from 'react-redux';
import MapComplex from "./mapForComplexs"
import { useLoadScript } from '@react-google-maps/api';

const ComplexContainer = () => {

  const complexs = useSelector(state => state.complexs)
  const {isLoaded} = useLoadScript({googleMapsApiKey:"AIzaSyDnQobr1nh7e9Y5r3In5Rmc38aZIqJsMcs"})

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