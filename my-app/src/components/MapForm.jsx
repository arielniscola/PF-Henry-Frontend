import React, { useState } from 'react'
import { GoogleMap, Marker } from '@react-google-maps/api'
import { useEffect } from 'react'

const MapForm = ({send = false, setForm, form}) => {

  const handlePosition = (e) => {
    const lat = parseFloat(e.latLng.lat())
    const lng = parseFloat(e.latLng.lng())
    setForm({...form,lat,lng})
}

  return <div className='h-80 relative'>
    <GoogleMap zoom={15} center={{lat:form.lat,lng:form.lng}} mapContainerClassName='w-full h-full' >
    {form.lat && <Marker  position={{lat:form.lat,lng:form.lng}} draggable={send} onDragEnd={(e) => handlePosition(e)}/>}
  </GoogleMap>
    </div>
}

export default MapForm