import React, { useState } from 'react'
import { GoogleMap, Marker } from '@react-google-maps/api'
import { useEffect } from 'react'

const MapForm = ({array}) => {

    const [center, setCenter] = useState({})

	const onUbicacionConcedida = ubicacion => {
        const lat = parseFloat(ubicacion.coords.latitude)
        const lng = parseFloat(ubicacion.coords.longitude)
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

    useEffect(()=>{
        if ("geolocation" in navigator)console.log(navigator.geolocation.getCurrentPosition(onUbicacionConcedida, onError, opciones))
        else return "tu buscador no soporta geolocalizacion"
    },[])

  return <div className='h-80 relative'>
    <GoogleMap zoom={15} center={center} mapContainerClassName='w-full h-full' > 
    {center.lat && <Marker className="text-cyan-800" icon={"https://cdn-icons-png.flaticon.com/64/5307/5307117.png"} position={center}/>}
    {array?.map(e => (<Marker icon={"https://cdn-icons-png.flaticon.com/64/1688/1688177.png"} position={{lat:parseFloat(e.lat),lng:parseFloat(e.lng)}}/>))}
  </GoogleMap>
    </div>
}

export default MapForm