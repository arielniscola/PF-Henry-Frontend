import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
import { useLocation, useParams } from "react-router-dom";

const ReservationCourt = () => {
  const court = useParams()
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const price = queryParams.get("price");
  const name = queryParams.get("name");
  const [startDate, setStartDate] = useState(new Date());
  const [turns, setTurns] = useState([]);
  const [times, setTimes] = useState([]);
  const currentUser = useSelector((state) => state.currentUser);

  useEffect(() => {
    getData();
  }, [startDate]);
  const getData = async () => {
    const day = startDate.getDate();
    const year = startDate.getFullYear();
    const month = startDate.getMonth() + 1;
    const newFormatDate = `${year}-${month}-${day}`.toString();

    const result = await axios.get(
      `http://localhost:3001/turn/complejo-turno-date/${newFormatDate}/${court?.id}`
    );
    setTurns(result.data);
    generetedTimes(result.data);
  };
  const generetedTimes = (turnsRes) => {
    const duration_turno = court.duration_turn * 60;
    const hora = Math.trunc(duration_turno / 60);
    const min = Math.trunc(duration_turno % 60);
    let fechaHora = new Date(startDate);
    fechaHora.setHours(9, 0, 0, 0);
    let horarios = [];
    for (let i = 10; i < 20; i++) {
      fechaHora.setHours(fechaHora.getHours() + 1, fechaHora.getMinutes() + 30);
      let addFecha = new Date(fechaHora);
      const filterTurns = turnsRes?.find(
        (elem) => addFecha.toTimeString().substring(0, 8) === elem.time_start
      );
      let available = false;
      if (filterTurns === undefined) {
        available = true;
      }
      horarios.push({
        time: addFecha.toTimeString().substring(0, 8),
        available: available,
      });
    }
    setTimes(horarios);
  };
  const selectedDate = (date) => {
    setStartDate(date);
  };
  const saveTurn = async (time) => {
    let day = startDate.getDate();
    const year = startDate.getFullYear();
    let month = startDate.getMonth() + 1;
    if (month < 10) {
      month = "0" + month;
    }
    if (day < 10) {
      day = "0" + day;
    }
    const newFormatDate = `${year}/${month}/${day}`.toString();
    const turnCreate = {
      time_start: time,
      date: newFormatDate,
      courtId: court.id,
      clientId: currentUser.id,
      state: "reserved",
    };
    const result = await axios.post(
      "http://localhost:3001/turn/create",
      turnCreate
    );
  };
  const payment = async () => {
    const result = await axios
      .post("http://localhost:3001/payment", {
        id: "1",
        name,
        image:
          "https://infodeportes.com.ar/wp-content/uploads/2021/12/Innovador-complejo-de-canchas-de-futbol-que-promete-revolucionar-la-forma-de-compartir-y-entretenerse.png",
        price:parseInt(price),
      })
      .then(
        (res) => (window.location.href = res.data.response.body.init_point)
      );
  };
  const showAlertReservation = (time) => {
    Swal.fire({
      title: "Would you like to make a reservation?",
      text: "Payment: Mercadopago",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, I would like",
    }).then((result) => {
      if (result.isConfirmed) {
        saveTurn(time);
        payment();
      }
    });
  };

  console.log(times)

  const [position,setPosition] = useState(1)
  const cuantity = 5
  const finalPosition = position * cuantity
  const fistPosition = finalPosition - cuantity
  
  const slice = times?.slice(fistPosition,finalPosition)

  const handlePrev = () => {
  if(position>1){setPosition(position-1)}
  }
  const handleNext = () => {
   if(position < Math.ceil(times?.length/cuantity))setPosition(position+1)
  }


  return (
    <div
      className="flex flex-col items-center m-12 h-screen border border-black 
      rounded-lg shadow-lg bg-gray-100
      "
    >
      <h2 className="flex flex-col items-center justify-center mt-10 text-4xl  font-bold text-blue-700">
        Shift Detail
      </h2>
      <div className="flex flex-row items-center text-2xl font-medium ml-60 ">
        <div>Pick date Turn:</div>
        <div>
          <DatePicker
            selected={startDate}
            onChange={(date) => selectedDate(date)}
            className=" bg-white rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none text-base px-2 m-5"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center  text-2xl font-medium">
        Available times:
      </div>
      <div>
        <ul className="max-w-md divide-y">
          {position>1 && <li className="mb-4">
            <button onClick={handlePrev} className="w-full h-10 ml-1 text-xl font-semibold justify-center text-white transition duration-200 ease-in bg-indigo-600 rounded-md shadow-md hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2">
            <i class="fa-solid fa-caret-up"></i>
              </button></li>}
          {slice?.map((time) => (
              <li className="pb-3 sm:pb-4" key={time.time}>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      <b>{time.time}</b>
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    {time.available ? (
                      <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                        Available
                      </span>
                    ) : (
                      <span className="bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">
                        No Available
                      </span>
                    )}
                  </div>
                  {time.available && (
                    <div>
                      <button
                        type="button"
                        className="w-10 h-10 ml-1 text-xl font-semibold justify-center text-white transition duration-200 ease-in bg-indigo-600 rounded-md shadow-md hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
                        onClick={() => {
                          showAlertReservation(time.time);
                        }}
                      ><i class="fa-solid fa-arrow-right"></i>
                      </button>
                    </div>
                  )}
                </div>
              </li>
            ))}
            {(position < Math.ceil(times?.length/cuantity)) && <li>
            <button onClick={handleNext} className="w-full h-10 ml-1 text-xl font-semibold justify-center text-white transition duration-200 ease-in bg-indigo-600 rounded-md shadow-md hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2">
            <i class="fa-solid fa-caret-down"></i>
              </button>
              </li>}
        </ul>
      </div>
    </div>
  );
};

export default ReservationCourt;
