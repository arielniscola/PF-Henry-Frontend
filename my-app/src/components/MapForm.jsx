import React, { useState } from 'react'
import { GoogleMap, Marker } from '@react-google-maps/api'
import { useEffect } from 'react'

const MapForm = ({send = false, setForm, form,idUser}) => {

    const [center, setCenter] = useState({})

	const onUbicacionConcedida = ubicacion => {
        const lat = Number(ubicacion.coords.latitude)
        const lng = Number(ubicacion.coords.longitude)
        setCenter({lat,lng})
	}
  
	const onError = err => {
		console.log("Error obteniendo ubicación: ", err);
	}

	const opciones = {
		enableHighAccuracy: true, // Alta precisión
		maximumAge: 0, // No queremos caché
		timeout: 5000 // Esperar solo 5 segundos
	};

    const handleClick = () =>{
        setForm({
            ...form,
            idUser,
            lat: center.lat,
            lng: center.lng
        })
      }
      
      const handlePosition = (e) => {
        const lat = Number(e.latLng.lat())
        const lng = Number(e.latLng.lng())
        setCenter({lat,lng})
        handleClick()
    }

    useEffect(()=>{
        if ("geolocation" in navigator)console.log(navigator.geolocation.getCurrentPosition(onUbicacionConcedida, onError, opciones))
        else return "tu buscador no soporta geolocalizacion"
    },[])

  return <div className='h-80 relative'>
    <GoogleMap zoom={15} center={center} mapContainerClassName='w-full h-full' >
    {center.lat && <Marker  position={center} draggable={send} onDragEnd={(e) => handlePosition(e)}/>}
  </GoogleMap>
    </div>
}

export default MapForm