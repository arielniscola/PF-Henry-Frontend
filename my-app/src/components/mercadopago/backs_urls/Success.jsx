import React from 'react'
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { ButtonReturn, Generalcontainer } from "../styles.js";
import clientAxios from "../../config/clientAxios";

export default function Success() {
  const [alert, setAlert] = useState({});
  const [confirmedAccount, setConfirmedAccount] = useState(false);
  const currentUser = useSelector((state) => state.currentUser);


  useEffect(() => {
  //   const getMercadopagoToken = async () => {
  //     try {
  //       const url = `/mercadopago/createtoken/`;
  //       const info = {
  //         code,
  //         id: currentUser?.id,
  //       };
  //       const { data } = await clientAxios.post(url, info);
  //       console.log(data);
  //       setAlert({ msg: data, error: false });
  //       setAlert({});
  //       setConfirmedAccount(true);
  //     } catch (error) {
  //       setAlert({ msg: error.response.data, error: true });
  //     }
  //   };
  //   if (currentUser?.id !== undefined) {
  //     getMercadopagoToken();
  //   }
  }, [currentUser?.id]);
  const { msg } = alert;

  return ( <>
    <h1 className="text-sky-600 font-black text-6xl capitalize">
      Confirm your account to start using{" "}
      <span className="text-slate-700">PF HENRY</span>
    </h1>
    <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
      <Generalcontainer>
        <div
          className={`${
            alert.error
              ? "from-red-400 to-red-600"
              : "from-sky-400 to-sky-600"
          } bg-gradient-to-br text-center p-3 rounded-xl uppercase text-white font-bold text-sm my-10`}
        >
          {alert.msg?.message && alert.msg?.status ? (
            <h1>
              <>{alert.msg?.message}</>
            </h1>
          ) : null}
        </div>

        <Link to="/">
          <ButtonReturn>Return to Home</ButtonReturn>
        </Link>
      </Generalcontainer>
    </div>
  </>
  )
}
