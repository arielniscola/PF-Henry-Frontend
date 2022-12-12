import React from 'react'
import {complexs} from '../data/complexsExample.js'
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
    <section class='flex flex-row m-0 w-full items-center gap-10 p-4'>
        <div class='flex relative w-36 h-10 rounded-md overflow-hidden border-2 border-blue-900'>
            <select class=' appearance-none outline-0 border-0 flex jistify-center py-0 px-14 bg-indigo-200 hover:bg-indigo-400 text-blue-900 cursor-pointer text-base hover:shadow-inner hover:shadow-slate-400 focus:shadow-inner focus:shadow-slate-400' onChange={(e) => handleOrder(e)}>
                <option>Order</option>
                <option value='az'>A-Z</option>
                <option value='fav'>Favorites</option>
            </select>
        </div>
        <div class='flex relative w-36 h-10 rounded-md overflow-hidden border-2 border-blue-900'>
            <select class=' appearance-none outline-0 border-0 flex jistify-center py-0 px-14 bg-indigo-200 hover:bg-indigo-400 text-blue-900 cursor-pointer text-base hover:shadow-inner hover:shadow-slate-400 focus:shadow-inner focus:shadow-slate-400' onChange={(e) => handleSports(e)}>
            <option>Sports</option>        
            {
                complexs.sports?.map((s,index) =>{
                    return <option key={index} value={s}>{s}</option>
                })
            }
            </select>
        </div>
        <div class='flex relative w-36 h-10 rounded-md overflow-hidden border-2 border-blue-900'>
            <select class='appearance-none outline-0 border-0 flex jistify-center py-0 px-12 bg-indigo-200 hover:bg-indigo-400 text-blue-900 cursor-pointer text-base hover:shadow-inner hover:shadow-slate-400 focus:shadow-inner focus:shadow-slate-400' onChange={(e) => handleService(e)}>
            <option>Services</option>
            {
                complexs.services?.map((s,index) =>{
                    return <option key={index} value={s}a>{s}</option>
                })
            }
            </select>
        </div>
    </section>
  )
}

export default Filters