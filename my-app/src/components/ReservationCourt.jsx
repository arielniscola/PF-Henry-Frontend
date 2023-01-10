import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from "react-redux";
import axios from "axios";

const ReservationCourt = ({ court }) => {
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
      `http://localhost:3001/turn/complejo-turno-date/${newFormatDate}/7d195750-6ac3-4b4d-8a5f-2cd6571dd5ee`
    );
    setTurns(result.data);
    generetedTimes(result.data);
  };
  const generetedTimes = (turnsRes) => {
    const duration_turno = 1.5;
    let fechaHora = new Date(startDate);
    fechaHora.setHours(9, 0, 0, 0);
    let horarios = [];
    for (let i = 10; i < 20; i++) {
      fechaHora.setHours(fechaHora.getHours() + 1, fechaHora.getMinutes() + 30);
      let addFecha = new Date(fechaHora);
      console.log(addFecha.toTimeString().substring(0, 8));
      //   turns.forEach((turn) => {
      //     console.log(addFecha.toTimeString().substring(0, 8));
      //     console.log(turn.time_start);
      //   });
      const filterTurns = turnsRes.find(
        (elem) => addFecha.toTimeString().substring(0, 8) === elem.time_start
      );
      console.log(filterTurns);
      let available = false;
      if (filterTurns === undefined) {
        available = true;
      }
      horarios.push({
        time: addFecha.toTimeString().substring(0, 8),
        available: available,
      });
    }
    console.log(horarios);
    setTimes(horarios);
  };
  const selectedDate = (date) => {
    console.log(date);
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
      courtId: "7d195750-6ac3-4b4d-8a5f-2cd6571dd5ee",
      clientId: currentUser.id,
      state: "reserved",
    };
    console.log(turnCreate);
    const result = await axios.post(
      "http://localhost:3001/turn/create",
      turnCreate
    );
  };
  const payment = async () => {
    const result = await axios
      .post("http://localhost:3001/payment", {
        id: "1",
        name: "Compejo1",
        image:
          "https://infodeportes.com.ar/wp-content/uploads/2021/12/Innovador-complejo-de-canchas-de-futbol-que-promete-revolucionar-la-forma-de-compartir-y-entretenerse.png",
        price: 100,
      })
      .then(
        (res) => (window.location.href = res.data.response.body.init_point)
      );

    console.log(result);
  };

  return (
    <div className="bg-gray-100">
      <div className="container max-w-4xl px-4 mx-auto sm:px-8">
        <div>Detalles del Turn</div>
        <div>Pick date Turn:</div>
        <DatePicker
          selected={startDate}
          onChange={(date) => selectedDate(date)}
        />
        <div>Available times:</div>
        <div>
          <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
            {times.length > 0 &&
              times.map((time) => (
                <li className="pb-3 sm:pb-4" key={time.time}>
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
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
                          class="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
                          onClick={() => {
                            saveTurn(time.time);
                            payment();
                          }}
                        >
                          <svg
                            aria-hidden="true"
                            class="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <span class="sr-only">Icon description</span>
                        </button>
                      </div>
                    )}
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ReservationCourt;
