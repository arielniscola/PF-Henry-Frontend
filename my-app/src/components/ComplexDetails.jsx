import React, { useEffect, useState } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useLoadScript } from "@react-google-maps/api";
import { getAllUser, getComplexDetails, updateComplex } from "../redux/actions";
import Comment from "./Comment";
import Review from "./Review";
import CourtCard from "./courtCard";

const ComplexDetails = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const complex = useSelector((state) => state.detail);
  const currentUser = useSelector((state) => state.currentUser)
  console.log("esto es complex",complex?.reviews)

  
  const { id } = useParams();
  
  const { isLoaded } = useLoadScript({
    googleMapsApiKey:process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });
  
  const [update, setUpdate] = useState({
    images:null,
    name:null
  });


  useEffect(() => {
    (async () => {
      setLoading(true);
      await dispatch(getComplexDetails(id));
      setLoading(false);
    })();
  }, [dispatch, id]);
  
  
  //UPDATE
  const [name,setName] = useState(true)
  
  const changeInput = () => {
    let input = document.getElementById("file");
  input.click();

  input.onchange = () => {
    let file = input.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      localStorage.setItem("imagen", reader.result);
      setUpdate({...update, images:reader.result});
    };
  };

};

const changeName = () =>{
  setName(!name)
}

const handleChangeName = (e) => {
  setUpdate({...update,name:e.target.value})
}

const handleUpdate = () =>{
  updateComplex(id,{...complex, logo:update.images ? update.images: complex.logo,name:update.name ? update.name: complex.name})
  getComplexDetails(id)
}

const find = currentUser?.complejos?.find(e => e.id === id)


  return (
    <>
      {!loading && isLoaded ? (
        <div className=" flex flex-col mt-4 justify-around w-10/12 mx-auto">
          <div className="relative">
            <img
              className="w-full max-w-screen-md mx-auto rounded-lg shadow-xl"
              src={
                update.images || complex.logo ||
                "https://images-platform.99static.com//_2gq7dvYv9xtbqA9fP3AlbTZ-zM=/50x0:1826x1776/fit-in/590x590/projects-files/32/3275/327556/942cbbbc-6c3a-4370-988b-8a016293b91d.jpg"
              }
              alt={complex.name}
              />
              {currentUser?.rol === "owner" && find && <button onClick={changeInput} className="absolute bottom-2 right-2 lg:bottom-4 lg:right-44  w-11 h-11 ml-1 text-base font-semibold text-center text-white transition duration-200 ease-in bg-indigo-600 rounded-full shadow-md hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2">
              <input
              type="file"
              id="file"
              onChange={changeInput}
              style={{ display: "none" }}
            />
              <i className="fa-solid fa-pen"/>
              </button>}
          </div>
          <section className="flex flex-row justify-between mt-10">
            <div className="flex flex-col items-start w-3/4 ">
              <div className="flex flex-row items-center">
              {name ? <p className="mb-5 text-5xl font-bold text-gray-500">
                {update.name || complex.name || "No name provided"}
              </p> : <input type="text" className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"  value={update.name} onChange={(e) =>handleChangeName(e)}/>}
             {currentUser?.rol === "owner" && find && <button onClick={changeName} className=" w-11 h-11 ml-1 text-base font-semibold text-center text-white transition duration-200 ease-in bg-indigo-600 rounded-full shadow-md hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2">
              <i className="fa-solid fa-pen"/>
              </button>}
              </div>
              <p className="text-2xl font-bold text-gray-500">
                {complex.city || "No city provided"}
              </p>
              <p className="mt-2 text-sm text-gray-400">
                {complex.addres || "No address provided"}
              </p>
            </div>

            <div className="flex flex-row flex-wrap">
              <span className="text-4xl font-bold">
                {complex.rating || "0.0"}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mt-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
            </div>
          </section>

          <section className="mt-10">
            <h3 className="text-3xl font-bold">Upcoming Events</h3>
            {complex.events ? (
              complex.events.map((event) => (
                <article>
                  <img src={event.img} alt={event.tittle} />
                  <p>Event: {event.tittle}</p>
                  <p>Date: {event.date}</p>
                  <p>Description: {event.description}</p>
                </article>
              ))
            ) : (
              <p>This complex doesn't have upcoming events </p>
            )}
          </section>

          <section className="mt-10">
            <div className="relative flex items-center">
            <h3 className="text-3xl font-bold">Complex Courts</h3>
            {currentUser?.rol === "owner" && find && <Link className="absolute bottom-2 right-2 lg:bottom-4 lg:right-44  w-20 h-11 ml-1 text-base font-semibold text-center text-white transition duration-200 ease-in bg-indigo-600 rounded-md shadow-md hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2" to={`/createcourt/${complex?.id}`} >Create Court</Link>}
            </div>
            <div className="flex flex-wrap justify-center w-full gap-5">
              {complex.courts ? (
                complex?.courts?.map((court) => (
                  <Link to={`/reservation/${court.id}/${court?.duration_turn}?price=${court.price}&name=${complex?.name}`} key={court.id}>
                    <CourtCard court={court} />
                  </Link>
                ))
              ) : (
                <p className="text-5xl font-bold text-center text-gray-500 ">
                  No courts found!
                </p>
              )}
            </div>
          </section>

          <section className="my-10">
            <h3 className="text-3xl font-bold">Visit us</h3>

            <div className="flex flex-col my-10 flex-nowrap md:flex-row">
              <div className="w-full mb-5 md:w-2/3 h-80 md:h-auto">
                {isLoaded && (
                  <GoogleMap
                    zoom={20}
                    center={{ lat: complex.lat, lng: complex.lng }}
                    mapContainerClassName="w-full h-full"
                  >
                    {complex.lat && (
                      <Marker
                        position={{ lat: complex.lat, lng: complex.lng }}
                        draggable={false}
                      />
                    )}
                  </GoogleMap>
                )}
              </div>
              <div className="flex flex-col flex-wrap w-full gap-5 md:w-1/3">
                <div className="p-4 ml-5 border-2 rounded-xl border-t-neutral-400 ">
                  <h4 className="py-2 text-sm font-bold border-b-2">
                    Location
                  </h4>
                  <p className="my-5 text-sm">
                    {complex.addres ||
                      "Av. Cabildo 3432, Buenos Aires , Capital Federal"}
                  </p>
                </div>
                <div className="p-4 ml-5 border-2 rounded-xl border-t-neutral-400 ">
                  <h4 className="py-2 text-sm font-bold border-b-2">Open</h4>
                  {complex.configs? (
                    complex.configs.map((config) => (
                      <p className="my-5" key={config.id}>
                        {config.open_days} |{" "}
                        <span>Turn price: ${config.price_turno} </span> |
                        <span> Duration: {config.duration_turno} hs. </span>
                      </p>
                    ))
                  ) : (
                    <p>No config found for this complex</p>
                  )}
                </div>
                <div className="p-4 ml-5 border-2 rounded-xl border-t-neutral-400 ">
                  <h4 className="py-2 text-sm font-bold border-b-2">
                    Services
                  </h4>
                  {complex.ServicesComplejos ? (
                    complex.ServicesComplejos.map((service) => (
                      <p className="my-5">{service.nameservice}</p>
                    ))
                  ) : (
                    <p className="my-5">No services specified</p>
                  )}
                </div>
              </div>
            </div>
          </section>
          <div>
            <h3 className="flex flex-col items-center justify-center mb-5 text-4xl  font-bold text-blue-700">Comments</h3>
            <div>
              {complex?.reviews?.map(rev => <Comment rev={rev}/>)}
            </div>
          </div>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
};

export default ComplexDetails;