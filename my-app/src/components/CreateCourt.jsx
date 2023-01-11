import React from "react";
import { useState } from "react";
import { createCourt } from "../redux/actions";
import {useDispatch, useSelector} from 'react-redux'



const CreateCourt = () => {
    const currentUser = useSelector(state => state.currentUser)

    const initalState ={
       id: currentUser.id,
        numberCourt: 0,
        description: "",
        type_Court: "",
        price: 0,
        img: "",
    };

    const [form, setForm] = useState(initalState);
    const [errors, setErrors] = useState({});
    
    
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
       
        let errors = validate(form);
        setErrors(errors);
        if (Object.keys(errors).length === 0) {
          
            createCourt(form);
        
            setForm(initalState);
        }  console.log("form",form);
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
        if (!form.type_Court) {
            errors.type_Court = "El tipo de cancha es requerido";
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
                className="flex flex-col bg-white p-10 rounded shadow-lg"
            >
                <h1 className="text-3xl font-bold mb-5">Create Court</h1>
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
                <label className="mb-2">Type Court</label>
                <input
                    type="text"
                    name="type_Court"
                    value={form.type_Court}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded mb-5"
                />
                {errors.type_Court && (
                    <p className="text-red-500 text-xs italic">
                        {errors.type_Court}
                    </p>
                )}
                <label className="mb-2">Price</label>
                <input
                    type="number"
                    name="price"
                    value={form.price}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded mb-5"
                />
                {errors.price && (
                    <p className="text-red-500 text-xs italic">
                        {errors.price}
                    </p>
                )}
                 <label> Image:<br></br>
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
                )}
                <button
                    type="submit"
                    className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded"
                >
                    New Court
                </button>
            </form>
        </div>
    );
};


export default CreateCourt;
