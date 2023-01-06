import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCourt } from "../redux/actions";
import { Link } from "react-router-dom";
import { useEffect } from "react";





// creo un componente para que el usario pueda crear tipos de canchas
const CreateCourt = () => {

    //creo un estado inicial
    const initalState ={
        numberCourt: 0,
        description: "",
        typeCourt: "",
        price: 0,
        img: "",
    };

    // creo un estado para guardar los datos del formulario
    const [form, setForm] = useState(initalState);

    // creo un estado para guardar los errores
    const [errors, setErrors] = useState({});
    
    // creo un estado para guardar los datos del formulario
    const dispatch = useDispatch();


    // creo una funcion para manejar los cambios en el formulario
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    // creo una funcion para manejar el submit del formulario
    

    const handleSubmit = (e) => {
        e.preventDefault();
        // valido el formulario
        let errors = validate(form);
        setErrors(errors);
        if (Object.keys(errors).length === 0) {
            // si no hay errores, envio los datos al servidor
            dispatch(createCourt(form));
            // vacio el formulario
            setForm(initalState);
        }  
    };//console.log("esto es form",form);

    // creo una funcion para validar el formulario
    const validate = (form) => {
        let errors = {};
        if (!form.numberCourt) {
            errors.numberCourt = "El numero de cancha es requerido";
        }
        if (!form.description) {
            errors.description = "La descripcion es requerida";
        }
        if (!form.typeCourt) {
            errors.typeCourt = "El tipo de cancha es requerido";
        }
        if (!form.price) {
            errors.price = "El precio es requerido";
        }
        return errors;
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
                    name="typeCourt"
                    value={form.typeCourt}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded mb-5"
                />
                {errors.typeCourt && (
                    <p className="text-red-500 text-xs italic">
                        {errors.typeCourt}
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
                <label className="mb-2">Image</label>
                <input
                    type="file"
                    id="file"
                    name="img"
                    value={form.img}
                    onChange={(e) => handleImage(e)}
                    className="border border-gray-300 p-2 rounded mb-5"
                />
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
