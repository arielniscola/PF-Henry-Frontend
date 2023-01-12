import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTypeCourt } from '../redux/actions'

const CourtCard = ({court}) => {
    
    console.log(court)

    const dispatch = useDispatch()

    const typeCourt = useSelector(state => state.sports)
    console.log(typeCourt)

    useEffect(()=>{
        dispatch(getAllTypeCourt())
    },[])

    const name = typeCourt?.filter(e => e?.id === court?.typeCourtId)
    console.log(name)
    



  return (
    <div className="px-2  font-bold text-sm gap-4 flex flex-row mx-auto items-center mt-5 border-2 rounded-lg">
        <div>
            <img
            className="rounded-md h-28"
            src={
                court.image ||
                "https://www.nexcourt.com/app/default/assets/gallery/basketball_28x45.jpg?v=1528119626"
                }
                alt="Court"
                />
        </div>
        <div>
            <p className="pt-5">{court.description}</p>
            <p className="py-5">Court Number: {court.numberCourt}</p>
            <p className="">
            Court Type: {name[0]?.description || "Not specified"}
            </p>
            <p className="">
            Price:{court?.price}
            </p>
        </div>
  </div>
  )
}

export default CourtCard