import React, { useState } from 'react'
import { GoogleMap, Marker } from '@react-google-maps/api'
import { useEffect } from 'react'

const MapForm = ({send = false, setForm, form}) => {

    const [center, setCenter] = useState({})

	const onUbicacionConcedida = ubicacion => {
        const lat = Number(ubicacion.coords.latitude)
        const lng = Number(ubicacion.coords.longitude)
		console.log("Tengo la latitud: ", lat);
        console.log("Tengo la longitud: ", lng);
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
            lat: center.lat,
            lng: center.lng
        })
    }

    const handlePosition = (e) => {
        const lat = Number(e.latLng.lat())
        const lng = Number(e.latLng.lng())
        console.log(lat)
        console.log(lng)
        setCenter({lat,lng})
    }

    useEffect(()=>{
        if ("geolocation" in navigator)console.log(navigator.geolocation.getCurrentPosition(onUbicacionConcedida, onError, opciones))
        else return "tu buscador no soporta geolocalizacion"
    },[])
    console.log("esto es center",center)

  return <div>
    <GoogleMap zoom={15} center={center} mapContainerClassName='w-full h-screen' >
    {center.lat && <Marker  position={center} draggable={send} onDragEnd={(e) => handlePosition(e)}/>}
  </GoogleMap>
  {send && <button onClick={() => handleClick()}>Confirmar ubicacion</button>}
    </div>
}

export default MapForm