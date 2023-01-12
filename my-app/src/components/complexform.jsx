import React, { useEffect } from 'react'
import { useState } from 'react'
import valComplex from './valComplex'
import {createComplex, updateUser} from '../redux/actions'
import {useLoadScript} from '@react-google-maps/api'
import {useDispatch, useSelector} from 'react-redux'
import MapForm from './MapForm'


function ComplexForm() {

  
  const {isLoaded} = useLoadScript({googleMapsApiKey:"AIzaSyDsRVQeZOteGF2GRu-VglsSh3w4C4KjmFw"})
  const currentUser = useSelector(state => state.currentUser)
  console.log(currentUser.complejos)
  const initalState ={
    name:"",
    address:"",
    cuit:"",
    city:"",
    logo:"",
    lat:"",
    lng:"",
    website:"",
    idUser:currentUser.id
  }
  
  const [form, setForm] = useState(initalState)
  const [error, setError] = useState({
    name:false,
    cuit:false,
  })
  
  const geolocalization = () =>{
    if ("geolocation" in navigator)console.log(navigator.geolocation.getCurrentPosition(onUbicacionConcedida, onError, opciones))
else return "tu buscador no soporta geolocalizacion"
  }

  const onUbicacionConcedida = ubicacion => {
    const lat = parseFloat(ubicacion.coords.latitude)
    const lng = parseFloat(ubicacion.coords.longitude)
    setForm({...form,lat,lng})
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
    geolocalization()
  },[])
  const handleChange = (e) =>{
    if(e.target.name === "cuit"){
      setForm({
        ...form,
        [e.target.name]: e.target.value.trim()}
        )
    }else{
    setForm({
      ...form,
      [e.target.name]: e.target.value}
      )}
      valComplex(form,setError)
    }
    
    const handleImage = (e) => {
      const file = e.target.files[0];
      previewFile(file)
    }

    const previewFile = (file) =>{
      const reader = new FileReader()
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setForm({
          ...form,
          logo: reader.result})
        }
      }
      
      const handleSubmit = (e) =>{
        e.preventDefault()
        createComplex(form)
        currentUser.rol === "client" && updateUser(currentUser.id,{...currentUser,rol:"owner"})
        setForm(initalState)
        geolocalization()
      }
      
      console.log(form)

      return (
        <div className='flex flex-col justify-center items-center mt-4'>
          {currentUser.rol === "client" && <div className="self-center max-w-xl">
          <h1 className="mb-5 text-4xl text-center font-bold text-blue-700">
          Do you want to be an owner and manage your complex?
          </h1>
          <p className="mt-10 text-center text-2xl font-medium">
          create your complex and acquire the advantages of an owner, saving you from having to manage schedules, payments and annoying shift cancellations.
          </p>
        </div>}

      <div className='flex flex-col m-10 lg:flex-row gap-4 bg-white p-4 rounded place-content-between'>
        <div>
          <form onSubmit={(e) => handleSubmit(e)} className="flex self-center w-full max-w-m space-x-3">
          <div className="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow dark:bg-gray-800">
            <div className="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
              Create your complex
            </div>
            <div className="grid max-w-xl grid-cols-2  gap-4 m-auto">

              <p className="mb-6 text-2xl font-light text-center text-gray-800 dark:text-white col-span-2">complex information</p>

              <div className="col-span-2 lg:col-span-1">
                <div className="relative ">
                  <input
                    type="text"
                    className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Complex name"
                    name="name"
                    value={form.name}
                    onChange={(e) => handleChange(e)}
                    />
                </div>
              </div>

              <div className="col-span-2 lg:col-span-1">
                <div className="relative ">
                  <input
                    type="text"
                    id="contact-form-name"
                    className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Complex address"
                    name="address"
                    value={form.address}
                    onChange={(e) => handleChange(e)}
                    />
                </div>
              </div>

              <div className="col-span-2 lg:col-span-1">
                <div className="relative ">
                  <input
                    type="text"
                    className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Cuit"
                    name="cuit"
                    value={form.cuit}
                    onChange={(e) => handleChange(e)}
                    />
                </div>
              </div>

              <div className="col-span-2 lg:col-span-1">
                <div className="relative ">
                  <input
                    type="text"
                    className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="City"
                    name="city"
                    value={form.city}
                    onChange={(e) => handleChange(e)}
                    />
                </div>
              </div>

              <div className="col-span-2">
                <div className="relative ">
                  <input
                    type="text"
                    className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Website"
                    name="website"
                    value={form.website}
                    onChange={(e) => handleChange(e)}
                    />
                </div>
              </div>

              
              <div className="col-span-2 bg-white px-4 py-1 border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
              <label>
              <input type="file"  name="logo" onChange={(e) => handleImage(e)} className="text-sm text-grey-500
              file:mr-5 file:py-2 file:px-6
              file:rounded-full file:border-0
              file:text-sm file:font-medium
              file:bg-blue-200 file:text-blue-700
              file:transition-all
              hover:file:cursor-pointer hover:file:bg-blue-700
              hover:file:text-white
              " />
          </label>
            </div>
            { isLoaded && <div className="col-span-2 bg-white px-4 py-1 border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" > <MapForm send={true} setForm={setForm} form={form} center={{lat:Number(form.lat),lng:Number(form.lng)}}idUser={currentUser.id}/> </div>}

              <div className="col-span-2 text-right">
              {error.name && error.cuit && <button
                  type="submit"
                  className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 "
                  >
                  create
                </button>}
              </div>

            </div>

          </div>
        </form>
        </div>


        <div className='mt-10 lg:mr-40'>
          <div className="self-center max-w-xl">
            <h2 className="mb-5 text-4xl text-center font-bold text-blue-700">
              Create your complex
            </h2>
            <p className="mt-10 text-center text-2xl font-medium">
            you can see below an example of the same
            </p>
          </div>
          <div className="flex flex-col m-10  justify-around ">

            <div className="flex flex-col ">
              <img className="max-w-md h-52 rounded-lg shadow-xl" src="https://i.ytimg.com/vi/ZwtCjlru67Y/maxresdefault.jpg" alt='example' />
              
              <div className='flex flex-row'>
              <div className="mx-5">
                <p className="text-lg font-bold text-gray-500">Event: ****</p>
                <p className="text-2xl mb-2 py-2">{form.name.length ? form.name : 'Complex name'}</p>
                <p className="text-gray-400 mb-2">Address: {form.address.length ? form.address : 'Address'}</p>
                <span className="p-2 w-9 rounded-2xl border-gray-500 border">
                  $500
                </span>
                <span className="p-2 ml-2 w-9 rounded-2xl border-gray-500 border">
                  2HS
                </span>
              </div>

              <span className="self-center text-xl">Rating: 5 ★</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComplexForm