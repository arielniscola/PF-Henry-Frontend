import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {filterServices, filterSports, orderAZ,orderFav, getAllServices, getAllSports} from '../redux/actions'
import { useEffect } from 'react'


function Filters() {

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getAllServices())
        dispatch(getAllSports())
    },[dispatch])
    const elements = useSelector(state =>  state.complexs)
    const sports = useSelector(state =>  state.sports)
    const services = useSelector(state =>  state.services)



const handleOrder = (e) =>{
    e.preventDefault()
    if(e.target.value === 'az'){dispatch(orderAZ(elements))}
    if(e.target.value === 'fav'){dispatch(orderFav())}
}
const handleSports = (e) =>{
    e.preventDefault()
    if(e.target.value !== 'Sports'){
    dispatch(filterSports(e.target.value,elements))}
}

const handleService = (e) =>{
    e.preventDefault()
    if(e.target.value !== 'Services'){
    dispatch(filterServices(e.target.value,elements))}
}

  return (
    <section className='flex flex-row m-0 w-full items-center gap-10 p-4'>
        <div className='flex relative w-36 h-10 rounded-full overflow-hidden border-2 border-blue-900'>
            <select className=' appearance-none outline-0 border-0 flex jistify-center py-0 px-14 bg-transparent text-blue-900 cursor-pointer text-base hover:shadow-inner hover:shadow-slate-400 focus:shadow-inner focus:shadow-slate-400' onChange={(e) => handleOrder(e)}>

                <option>Order</option>
                <option value='az'>A-Z</option>
                <option value='fav'>Favorites</option>
            </select>
        </div>
        <div className='flex relative w-36 h-10 rounded-full overflow-hidden border-2 border-blue-900'>
            <select className=' appearance-none outline-0 border-0 flex jistify-center py-0 px-14 bg-transparent text-blue-900 cursor-pointer text-base hover:shadow-inner hover:shadow-slate-400 focus:shadow-inner focus:shadow-slate-400' onChange={(e) => handleSports(e)}>
            <option>Sports</option>        
            {
                sports?.map((s,index) =>{
                    return <option key={index} value={s}>{s}</option>
                })
            }
            </select>
        </div>
        <div className='flex relative w-36 h-10 rounded-full overflow-hidden border-2 border-blue-900'>
            <select className='appearance-none outline-0 border-0 flex jistify-center py-0 px-12 bg-transparent text-blue-900 cursor-pointer text-base hover:shadow-inner hover:shadow-slate-400 focus:shadow-inner focus:shadow-slate-400' onChange={(e) => handleService(e)}>
            <option>Services</option>
            {
                services?.map((s,index) =>{
                    return <option key={index} value={s}>{s}</option>
                })
            }
            </select>
        </div>
    </section>
  )
}

export default Filters