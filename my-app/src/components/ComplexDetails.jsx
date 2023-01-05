import React, { useEffect, useState } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useLoadScript } from "@react-google-maps/api";
import { getComplexDetails } from "../redux/actions";

const ComplexDetails = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const complex = useSelector((state) => state.detail);
  const { id } = useParams();

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDnQobr1nh7e9Y5r3In5Rmc38aZIqJsMcs",
  });

  useEffect(() => {
    (async () => {
      setLoading(true);
      await dispatch(getComplexDetails(id));
      setLoading(false);
    })();
  }, [dispatch, id]);

  return (
    <>
      {!loading && isLoaded ? (
        <div className="flex flex-col justify-around w-10/12 mx-auto">
          <img
            className="w-full max-w-screen-md mx-auto rounded-lg shadow-xl"
            src={
              complex.logo ||
              "https://images-platform.99static.com//_2gq7dvYv9xtbqA9fP3AlbTZ-zM=/50x0:1826x1776/fit-in/590x590/projects-files/32/3275/327556/942cbbbc-6c3a-4370-988b-8a016293b91d.jpg"
            }
            alt={complex.name}
          />
          <section className="flex flex-row justify-between mt-10">
            <div className="flex flex-col items-start w-3/4 ">
              <p className="mb-5 text-5xl font-bold text-gray-500">
                {complex.name || "No name provided"}
              </p>
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
            {complex.events.length ? (
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
            <h3 className="text-3xl font-bold">Complex Courts</h3>
            <div className="flex flex-wrap justify-center w-full gap-5">
              {complex.courts.length ? (
                complex.courts.map((court) => (
                  <Link to={`/court/${court.id}`} key={court.id}>
                    <div className="p-5 mx-auto mt-5 border-2 rounded-lg">
                      <img
                        className="rounded-xl"
                        src={
                          court.image ||
                          "https://www.nexcourt.com/app/default/assets/gallery/basketball_28x45.jpg?v=1528119626"
                        }
                        alt="Court"
                      />
                      <p className="pt-5">{court.description}</p>
                      <p className="py-5">Court Number: {court.numberCourt}</p>
                      <p className="">
                        Court Type: {court.typeCourt || "Not specified"}
                      </p>
                    </div>
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
                  {complex.configs.length ? (
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
                  {complex.ServicesComplejos.length ? (
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
        </div>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
};

export default ComplexDetails;

