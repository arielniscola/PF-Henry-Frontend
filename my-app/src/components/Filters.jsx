import React from 'react'
import data from '../utils/data'
import {useDispatch, useSelector} from 'react-redux'
import {filterServices, filterSports, orderAZ,orderFav} from '../redux/actions'

function Filters() {

const elements = useSelector(state =>  state.complexs)
const dispatch = useDispatch()


const handleOrder = (e) =>{
    e.preventDefault()
    if(e.target.value === 'az'){dispatch(orderAZ(elements))}
    if(e.target.value === 'fav'){dispatch(orderFav())}
}
const handleSports = (e) =>{
    e.preventDefault()
    dispatch(filterSports(e.target.value,elements))
}

const handleService = (e) =>{
    e.preventDefault()
    dispatch(filterServices(e.target.value,elements))
}

  return (
    <section>
        
        <div>
            <select onChange={(e) => handleOrder(e)}>
                <option value='az'>A-Z</option>
                <option value='fav'>Favorites</option>
            </select>
        </div>
        <div>
            <select onChange={(e) => handleSports(e)}>
            {
                data.sports?.map((s,index) =>{
                    return <option key={index} value={s}>{s}</option>
                })
            }
            </select>
        </div>
        <div>
            <select onChange={(e) => handleService(e)}>
            {
                data.services?.map((s,index) =>{
                    return <option key={index} value={s}a>{s}</option>
                })
            }
            </select>
        </div>
    </section>
  )
}

export default Filters