import React,{useState} from 'react'
import { createUser } from '../redux/actions'
import valUser from './valUser'

const initalState ={
    fullName:"",
    password:"",
    password2:"",
    email:"",
    phone:"",
    dni:"",
    
}


function UserForm() {

  const [form, setForm] = useState(initalState)
  const [error, setError] = useState({
    fullName:false,
    password:false,
    email:false,
    phone:false,
  })

  const handleChange = (e) =>{
    setForm({
      ...form,
      [e.target.name]: e.target.value}
      )
      valUser(form,setError)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    createUser(form)
    setForm(initalState)
  }


  return (
    <div className='flex flex-col m-10 md:flex-row place-content-between'>
        <div>
        <form onSubmit={(e) => handleSubmit(e)} className="flex self-center w-full max-w-m space-x-3">
        <div className="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow dark:bg-gray-800">
          <div className="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
            Create user
          </div>

          <div className="grid max-w-xl grid-cols-2  gap-4 m-auto">
            <div className="col-span-2">
              <div className="relative ">
                <input
                  type="text"
                  className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Name"
                  name="fullName"
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>

            <div className="col-span-2 lg:col-span-1">
              <div className="relative ">
                <input
                  type="password"
                  className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Password"
                  name="password"
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>

            <div className="col-span-2 lg:col-span-1">
              <div className="relative ">
                <input
                  type="password"
                  className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Password again"
                  name="password2"
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>

            <div className="col-span-2 lg:col-span-1">
              <div className="relative ">
                <input
                  type="text"
                  className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Email"
                  name="email"
                  onChange={(e) => handleChange(e)}
                  />
              </div>
            </div>


            <div className="col-span-2 lg:col-span-1">
              <div className="relative ">
                <input
                  type="text"
                  className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="555-4444666"
                  name="phone"
                  onChange={(e) => handleChange(e)}
                  />
              </div>
            </div>

            <div className="col-span-2 text-right">
            {error.email && error.fullName && error.password && error.phone && <button
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
    </div>
  )
}

export default UserForm