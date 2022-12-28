import React from 'react'
import Filters from './Filters'
import ComplexCard from "./ComplexCard";
import { useSelector } from 'react-redux';

const ComplexContainer = () => {

  const complexs = useSelector(state => state.complexs)

  return (
    <div>
        <Filters/>
        <div className='flex w-full flex-col items-start'>
        {complexs?.map(complex =>(<ComplexCard key={complex.id} complexDetails={complex}/>))}
        </div>
    </div>
  )
}

export default ComplexContainer