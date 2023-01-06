import React, { useState } from 'react'
import { GoogleMap, Marker } from '@react-google-maps/api'

const MapForm = ({send = false, setForm, form,center}) => {

  const handlePosition = (e) => {
    const lat = parseFloat(e.latLng.lat())
    const lng = parseFloat(e.latLng.lng())
    setForm({...form,lat,lng})
}

  return <div className='h-80 relative'>
    <GoogleMap zoom={15} center={{lat:form.lat,lng:form.lng}} mapContainerClassName='w-full h-full' >
    {form.lat && <Marker  position={center} draggable={send} onDragEnd={(e) => handlePosition(e)}/>}
  </GoogleMap>
    </div>
}

export default MapForm