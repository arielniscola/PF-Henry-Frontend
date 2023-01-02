import React from 'react'
import Filters from './Filters'
import ComplexCard from "./ComplexCard";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ComplexContainer = () => {

  const complexs = useSelector(state => state.complexs)
  const favorites = useSelector(state => state.favorites.favorites)

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
        <div className='flex w-full flex-col items-start'>
        {complexs?.map(complex =>(<Link key={complex.id} to={`/search/${complex.id}`}><ComplexCard complexDetails={complex} id={complex.id} favorite={(e) => find(e)} /></Link>))}
        </div>
    </div>
  )
}

export default ComplexContainer