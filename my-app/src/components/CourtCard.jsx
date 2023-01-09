import React from 'react'

const CourtCard = ({courtDetails}) => {
  return (
    <div className='flex bg-cyan-200 justify-between pr-4 items-center flex-row max-h-24 max-w-lg'>
        <div className='w-fit h-fit'>
            <img className='h-24' src='https://i.pinimg.com/736x/71/81/f3/7181f32b73a21fd7d9d6d903061d46a8--pepsi-center-denver-nuggets.jpg'/>
        </div>
        <div>
            <p>
                Basquet 3x3
            </p>
            <p>Lunes - Viernes 16hs - 00hs</p>
            <p>$300</p>
        </div>
            <img src='https://cdn-icons-png.flaticon.com/32/8207/8207173.png'/>

    </div>
  )
}

export default CourtCard