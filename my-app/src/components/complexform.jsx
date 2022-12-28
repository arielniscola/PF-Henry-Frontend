import React from 'react'
import { useState } from 'react'
import valComplex from './valComplex'
import {createComplex} from '../redux/actions'
import {useLoadScript} from '@react-google-maps/api'
import MapForm from './MapForm'

const initalState ={
    name:"",
    addres:"",
    cuit:"",
    city:"",
    logo:"",
    lat:0,
    lng:0
}

function ComplexForm() {

  const {isLoaded} = useLoadScript({googleMapsApiKey:"AIzaSyDnQobr1nh7e9Y5r3In5Rmc38aZIqJsMcs"})

  const [form, setForm] = useState(initalState)
  const [error, setError] = useState({
    complexName:false,
    complexAddress:false,
    cuit:false,
    city:false,
  })

  const handleChange = (e) =>{
    setForm({
      ...form,
      [e.target.name]: e.target.value}
    )
    valComplex(form,setError)
  }

    const handleImage = (e) => {
        const file = e.target.files[0];
        previewFile(file, e.target.name)
    }
    const previewFile = (file, name) =>{
        const reader = new FileReader()
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setForm({
              ...form,
              [name]: reader.result})
        }
      }

  const handleSubmit = (e) =>{
    e.preventDefault()
    createComplex(form)
  }

  return (
    <div className='flex flex-col m-10 md:flex-row bg-white p-4 rounded place-content-between'>
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
                  name="adress"
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
                  onChange={(e) => handleChange(e)}
                  />
              </div>
            </div>

            
            <div className="col-span-2 bg-white px-4 py-1 border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
            <label>
            <input type="file" name="logo" onChange={(e) => handleImage(e)} className="text-sm text-grey-500
            file:mr-5 file:py-2 file:px-6
            file:rounded-full file:border-0
            file:text-sm file:font-medium
            file:bg-blue-200 file:text-blue-700
            file:transition-all
            hover:file:cursor-pointer hover:file:bg-blue-700
            hover:file:text-white
          " />
        </label>
          { isLoaded && <div> <MapForm send={true} setForm={setForm} form={form}/> </div>}
            
          </div>

            <div className="col-span-2 text-right">
            {error.complexName && error.complexAddress && error.cuit && error.city && <button
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
        <div>
        <div className="flex flex-col m-10  justify-around ">
        <div className="flex flex-row ">
          <img className="max-w-[400px] h-52 rounded-lg shadow-xl" src="https://i.ytimg.com/vi/ZwtCjlru67Y/maxresdefault.jpg" alt='example' />
          <div className="mx-5">
            <p className="text-lg font-bold text-gray-500">Event: ****</p>
            <p className="text-2xl mb-2 py-2">{form.complexName.length ? form.complexName : 'Complex name'}</p>
            <p className="text-gray-400 mb-2">Address: {form.complexAddress.length ? form.complexAddress : 'Address'}</p>
            <span className="p-2 w-9 rounded-2xl border-gray-500 border">
              $500
            </span>
            <span className="p-2 ml-2 w-9 rounded-2xl border-gray-500 border">
              2HS
            </span>
          </div>
          <span className="self-center text-xl">Rating: 5 ★</span>
        </div>
        <button className="m-5 self-start bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
            Reserve
        </button>
      </div>
        </div>
    </div>
  )
}

export default ComplexForm