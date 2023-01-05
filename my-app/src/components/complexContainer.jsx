import React from 'react'
import Filters from './Filters'
import ComplexCard from "./ComplexCard";
import { useSelector } from 'react-redux';
import MapComplex from "./mapForComplexs"
import { useLoadScript } from '@react-google-maps/api';

const ComplexContainer = () => {

  const complexs = useSelector(state => state.complexs)
  const favorites = useSelector(state => state.favUser)
  const {isLoaded} = useLoadScript({googleMapsApiKey:"AIzaSyDnQobr1nh7e9Y5r3In5Rmc38aZIqJsMcs"})

  const filter = (array) =>{
    let hash = {};
    const arr = array.filter(o => hash[o.id] ? false : hash[o.id] = true);
    return arr
}
  const noRep = filter([...complexs, ...favorites])

  const find = (e) => {
    const find = noRep.some(complex =>complex.id === e.target.id)
    return find
  }

  return (
    <div>
        <Filters/>
        <div>
          <div>
            {isLoaded && <MapComplex array={complexs}/>}
          </div>
          <div className='flex w-full flex-col items-start'>
          {complexs?.map(complex =>(<ComplexCard key={complex.id} complexDetails={complex} id={complex.id} favorite={(e) => find(e)} />))}
          </div>
        </div>
    </div>
  )
}

export default ComplexContainer