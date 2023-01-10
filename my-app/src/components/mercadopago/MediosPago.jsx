import React, { useState } from "react";
import logoMP from "../../data/MercadoPago_(Horizontal).png";
import {
  ButtonMercadopago,
  ImgContainer,
} from "./styles.js";

export default function MediosPago() {
  const [state, setSwitch] = useState({
    mediosPagos: false,
  });

  const handleChange = () => {
    state.mediosPagos === false
      ? setSwitch({ ...state, mediosPagos: true })
      : setSwitch({ ...state, mediosPagos: false });
  };
  console.log(process.env.REACT_APP_ID);
  const handleButton = () => {
    window.open(
      `https://auth.mercadopago.com/authorization?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=code&platform_id=mp&state=RANDOM_ID&redirect_uri=https://deploy-pf-arielniscola.vercel.app/mercadopago-auth/`
    );
  };
  return (
    <div>
        <label class="relative inline-flex items-center mb-4 cursor-pointer">
          <input type="checkbox" 
           id="mediosdepago"
          name="mediosPagos"
          value={state}
          class="sr-only peer" 
          onChange={(e) => handleChange(e)}/>
          <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          Select Means of Payment (Withdrawal of Payments)
          </span>
        </label>
        {state && state?.mediosPagos === true ? (
          <ButtonMercadopago onClick={(e) => handleButton(e)}>
            <ImgContainer src={logoMP} alt="mercadopagos" />
          </ButtonMercadopago>
        ) : null}
      </div>
  );
}
