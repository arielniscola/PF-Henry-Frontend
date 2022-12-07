import React, { useState } from "react";
import { Link } from "react-router-dom";

// creo algunas ciudades para prueba
const citys = [
    {
        id: 1,
        name: "Buenos Aires",
        country: "Argentina",
        photo: "http://riouruguayseguros.com/site/wp-content/uploads/2016/01/Mapas-GPS.jpg",
        description: "Buenos Aires is the capital and largest city of Argentina",
        events: [
            {
                id: 1,
                name: "Futbol",
                description: "Futbol is a sport",
                date: "2021-10-10",
                cityId: 1,
            },
            {
                id: 2,
                name: "Basketball",
                description: "Basketball is a sport",
                date: "2021-10-10",
                cityId: 1,
            },
        ],
    },
    {
        id: 2,
        name: "Montevideo",
        country: "Uruguay",
        photo: "http://riouruguayseguros.com/site/wp-content/uploads/2016/01/Mapas-GPS.jpg",
        description: "Montevideo is the capital and largest city of Uruguay",
        events: [
            {
                id: 3,
                name: "Futbol",
                description: "Futbol is a sport",
                date: "2021-10-10",
                cityId: 2,
            },
            {
                id: 4,
                name: "Basketball",
                description: "Basketball is a sport",
                date: "2021-10-10",
                cityId: 2,
            },
        ],
    },
];



const SearchCity = () => {
    const [city, setCity] = useState({});

    const handleSearch = () => {
        const cityFound = citys.find((city) => city.name === "Buenos Aires");
        setCity(cityFound);
    };

    return (
        <div className="bg-cover  bg-right-top ">
            <input type="text" className="w-4/12 px-4 py-2 border border-transparent text-base font-medium rounded-md text-black bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" placeholder="Search City" />
            <Link to="/search">
            <button onClick={handleSearch} type="button" className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Search</button></Link>
                <h1>{city.name}</h1>
                <h2>{city.country}</h2>
                <img src={city.photo} alt={city.name} />
                <p>{city.description}</p>
            </div>
    
    );
}

export default SearchCity;
