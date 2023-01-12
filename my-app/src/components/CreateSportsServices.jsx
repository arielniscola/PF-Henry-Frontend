import React from 'react'
import { useState } from 'react'
import { createTypeCourt,createService } from '../redux/actions' 

const CreateSportsServices = () => {

    const [sports, setSports]= useState({
        description:"",
        icon:""
    })
    console.log(sports)
    const [services, setServices]= useState({
        name:"",
    })

    console.log("esto es sports",sports)

    console.log("esto es services",services)

    const handleChange = (e) => {
        if(e.target.name === "description"){
            setSports({
                ...sports,
                description:e.target.value
            })
        }else{
            setServices({...services,
            name:e.target.value
            })
        }
        }

        const handleImage = (e) => {
            const file = e.target.files[0];
            previewFile(file)
          }
      
          const previewFile = (file) =>{
            const reader = new FileReader()
            reader.readAsDataURL(file);
            reader.onloadend = () => {
              setSports({
                ...sports,
                icon: reader.result})
              }
            }

            const handleSubmitSports = (e)=>{
                e.preventDefault()
                createTypeCourt(sports)
            }

            const handleSubmitServices = (e)=>{
                e.preventDefault()
                createService(services)
            }


  return (
  <div className='grid grid-cols-1 lg:grid-cols-2  justify-between mt-20 px-8'>
    <form onSubmit={(e) => handleSubmitSports(e)} className="flex self-center w-full max-w-m space-x-3">
        <div className="w-full max-w-md px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow dark:bg-gray-800">
            <div className="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
            Create Sports
            </div>
            <div className="grid max-w-xl grid-cols-2  gap-4 m-auto">

            <div className="col-span-2">
                <div className="relative ">
                <input
                    type="text"
                    className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Sport descripton"
                    name="description"
                    value={sports.description}
                    onChange={(e) => handleChange(e)}
                    />
                </div>
            </div>
            
            <div className="col-span-2 bg-white px-4 py-1 border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
            <label>
            <input type="file"  name="icon" onChange={(e) => handleImage(e)} className="text-sm text-grey-500
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

                <div className="col-span-2 text-right">
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 "
                        >
                        create
                    </button>
                </div>

            </div>

        </div>
    </form>

    <form onSubmit={(e) => handleSubmitServices(e)} className="flex self-center w-full max-w-m space-x-3">
        <div className="w-full max-w-md px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow dark:bg-gray-800">
            <div className="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
            Create Services
            </div>
            <div className="grid max-w-xl grid-cols-2  gap-4 m-auto">

            <div className="col-span-2">
                <div className="relative ">
                <input
                    type="text"
                    className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Complex name"
                    name="name"
                    value={services.name}
                    onChange={(e) => handleChange(e)}
                    />
                </div>
            </div>

                <div className="col-span-2 text-right">
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 "
                        >
                        create
                    </button>
                </div>

            </div>

        </div>
    </form>
</div>
  )
}

export default CreateSportsServices