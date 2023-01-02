import React from "react";
import DatePicker, {registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import en from 'date-fns/locale/es';
registerLocale('en', en);


const AboutUs = () => {
  const [state, setState] = useState({
    fecha: new Date()
  });


  const onChange = date => {
    setState({
      fecha: date
    });
    console.log("date",state.fecha);
  }

  return (
    <div className="flex w-full h-32
    items-center justify-center space-between
    ">
      <div >
        <h1 className="text-2xl font-bold"
        >Enter Date:</h1>
      </div>
      <div className="flex
        ml-4">
        <DatePicker
          
          className="border border-gray-300 rounded-md p-2 "
          onChange={onChange}
          selected={state.fecha}
          dateFormat="dd/MM/yyyy"
          locale="en"
          calendarClassName="bg-gray-200
          border border-gray-300 rounded-md p-2 "
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >Serch</button>
      </div>
    </div>
  );
};

export default AboutUs;