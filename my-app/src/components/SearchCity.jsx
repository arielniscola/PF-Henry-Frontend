import React, { useState } from "react";
import { complexs } from "../data/complexsExample";
import ComplexCard from "./ComplexCard";
import { Link } from "react-router-dom";



const SearchCity = () => {
    const [city, setCity] = useState("");
    const [complex, setComplex] = useState(null);

    const handleSearch = () => {
        const complexFound = complexs.find((complex) => complex.city === city);
        if (complexFound) {
            setComplex(complexFound);
        } else {
            alert("City not found");
        }
    };

    return (
        <div>
            <input
                type="text"
                className="w-4/12 px-4 py-2 border border-transparent text-base font-medium rounded-md text-black bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" placeholder="Search City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={handleSearch}
            type="button" className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >Search</button>
            {complex && <Link to={`/search/${city}`}><ComplexCard complexDetails={complex} /></Link>}
        </div>
    );
}

export default SearchCity;























/*
const SearchCity = () => {
  const [city, setCity] = useState("");
  const [complex, setComplex] = useState(null);

  const handleSearch = () => {
    const complexFound = complexs.find((complex) => complex.city === city);
    if (complexFound) {
      setComplex(complexFound);
    } else {
      alert("No se encontro la ciudad");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
      {complex && <ComplexCard complexDetails={complex} />}
    </div>
  );
}

export default SearchCity;
*/