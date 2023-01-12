import React, { useEffect } from "react";
import { useState } from "react";
import { createCourt, getAllTypeCourt } from "../redux/actions";
import {useDispatch, useSelector} from 'react-redux'
import { useParams } from "react-router-dom";



const CreateCourt = () => {


    const dispatch = useDispatch()
    const {id} = useParams()
    const typeCourt = useSelector(state => state.sports)

    const initalState ={
        complejoId:id,
        numberCourt: 0,
        description: "",
        typeCourtId: "",
        price: 0,
        duration_turn: 1,
    };

    
    // img: "",
    
    const [form, setForm] = useState(initalState);
    console.log(form)
    const [errors, setErrors] = useState({});
    console.log(form)
    
    useEffect(()=>{
        dispatch(getAllTypeCourt())
    },[])


    const handleChange = (e) => {
        console.log(e.target)
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleChangeP = (e) => {
        console.log(e.target)
        setForm({
            ...form,
            price: parseFloat(e.target.value),
        });
    };

    const handleChangeS = (e) => {
        console.log(e.target)
        setForm({
            ...form,
            typeCourtId: e.target.value,
        });
    };

    const handleChangeD = (e) => {
        console.log(e.target)
        setForm({
            ...form,
            duration_turn: parseFloat(e.target.value,)
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        createCourt(form);
        setForm(initalState);
    };
    
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
              img: reader.result})
        }
      }

      const validate = (form) => {
        let errors = {};
        if (!form.numberCourt) {
            errors.numberCourt = "El numero de cancha es requerido";
        }
        if (!form.description) {
            errors.description = "La descripcion es requerida";
        }
        if (!form.typeCourtId) {
            errors.typeCourtId = "El tipo de cancha es requerido";
        }
        if (!form.price) {
            errors.price = "El precio es requerido";
        }
        return errors;
    };


    return (
        <div className="flex justify-center items-center">
            <form
                onSubmit={(e) => handleSubmit(e)}
                className="grid grid-cols-2 my-8 bg-white p-10 rounded-xl gap-3 shadow-gray-400 shadow-lg"
            >
                <h1 className="col-span-2 flex justify-center items-center text-3xl font-bold mb-5">Create Court</h1>
                <div className="flex flex-col" >
                    <label className="mb-2">Number Court</label>
                    <input
                        type="number"
                        name="numberCourt"
                        value={form.numberCourt}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 rounded mb-5"
                    />
                    {errors.numberCourt && (
                        <p className="text-red-500 text-xs italic">
                            {errors.numberCourt}
                        </p>
                    )}

                </div>
                <div className="flex flex-col" >
                    <label className="mb-2">Description</label>
                    <input
                        type="text"
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 rounded mb-5"
                        />
                    {errors.description && (
                        <p className="text-red-500 text-xs italic">
                            {errors.description}
                        </p>
                    )}
                </div>
                <div className="flex flex-col" >
                    <label className="mb-2">Type Court</label>
                    <div className='flex relative w-36 h-10 rounded-full overflow-hidden border-2 border-blue-900'>
                        <select className=' appearance-none outline-0 border-0 flex jistify-center py-0 px-12 bg-transparent text-blue-900 cursor-pointer text-base hover:shadow-inner hover:shadow-slate-400 focus:shadow-inner focus:shadow-slate-400' onChange={(e) => handleChangeS(e)}>
                        <option>Sports</option>        
                        {
                            typeCourt?.map((s,index) =>{
                                return <option key={index} id="typeCourtId" value={s?.id}>{s?.description}</option>
                            })
                        }
                        </select>
                    </div>
                </div>
                <div className="flex flex-col" >
                    <label className="mb-2">Duration turn</label>
                    <div className='flex relative w-36 h-10 rounded-full overflow-hidden border-2 border-blue-900'>
                        <select className=' appearance-none outline-0 border-0 flex jistify- py-0 px-10 bg-transparent text-blue-900 cursor-pointer text-base hover:shadow-inner hover:shadow-slate-400 focus:shadow-inner focus:shadow-slate-400' onChange={(e) => handleChangeD(e)}>
                        <option>Duration</option>
                        <option value={1}>1hs</option>
                        <option value={1.5}>1:30hs</option>
                        <option value={2}>2hs</option>
                        </select>
                    </div>
                </div>

                <div className="col-span-2 flex flex-col" >
                    <label className="mb-2">Price</label>
                    <input
                        type="number"
                        name="price"
                        value={form.price}
                        onChange={(e) => handleChangeP(e)}
                        className="border border-gray-300 p-2 rounded mb-5"
                    />
                </div>
                    
                 {/* <label> Image:<br></br>
              <input type="file"  name="logo" onChange={(e) => handleImage(e)} 
              className="text-sm text-grey-500
              file:mr-5 file:py-2 file:px-6
              file:rounded-full file:border-0
              file:text-sm file:font-medium
              file:bg-blue-200 file:text-blue-700
              file:transition-all
              hover:file:cursor-pointer hover:file:bg-blue-700
              hover:file:text-white mb-5
              " />
          </label>
                {errors.img && (
                    <p className="text-red-500 text-xs italic">
                        {errors.img}
                    </p>
                )} */}
                <button
                    type="submit"
                    className="col-span-2 w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 "
                >
                    New Court
                </button>
            </form>
        </div>
    );
};


export default CreateCourt;