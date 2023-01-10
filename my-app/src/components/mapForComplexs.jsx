import React, { useState } from 'react'
import { GoogleMap, Marker } from '@react-google-maps/api'
import { useEffect } from 'react'

const MapForComplex = ({array}) => {

    const [center, setCenter] = useState({})
    console.log(array)

	const onUbicacionConcedida = ubicacion => {
        const lat = (ubicacion.coords.latitude)
        const lng = (ubicacion.coords.longitude)
        setCenter({lat:Number(lat),lng:Number(lng)})
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

  return <div className='relative w-full h-full'>
    <GoogleMap zoom={15} center={center} mapContainerClassName='w-full h-full' > 
    {center.lat && <Marker className="text-cyan-800" icon={"https://cdn-icons-png.flaticon.com/64/5307/5307117.png"} position={center}/>}
    {array?.map((e,i)=> (<Marker children key={i} icon={"https://cdn-icons-png.flaticon.com/64/1688/1688177.png"} position={{lat:Number(e.lat),lng:Number(e.lng)}}/>))}
  </GoogleMap>
    </div>
}

export default MapForComplex
