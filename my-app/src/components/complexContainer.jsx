import React from 'react'
import Filters from './Filters'
import ComplexCard from "./ComplexCard";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ComplexContainer = () => {

  const complexs = useSelector(state => state.complexs)

  return (
    <div>
        <Filters/>
        <div className='flex w-full flex-col items-start'>
        {complexs?.map(complex =>(<Link key={complex.id} to={`/search/${complex.id}`}><ComplexCard complexDetails={complex} /></Link>))}
        </div>
    </div>
  )
}

export default ComplexContainer