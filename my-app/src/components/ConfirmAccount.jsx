import { useState } from "react";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Alert from "../components/Alert";
import clientAxios from "../config/clientAxios";

const ConfirmAccount = () => {
  const [alert, setAlert] = useState({});
  const [confirmedAccount, setConfirmedAccount] = useState(false);

  const params = useParams();
  const { token } = params;

  useEffect(() => {
    const confirmAccount = async () => {
      try {
        const url = `/clients/confirm-account/${token}`;
        const { data } = await clientAxios(url);
        setAlert({ msg: data, error: false });
        setAlert({})
        setConfirmedAccount(true);
      } catch (error) {
        setAlert({ msg: error.response.data, error: true });
      }
    };
    confirmAccount();
  }, []);

  const { msg } = alert;

  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">
        Confirm your account to start using{" "}
        <span className="text-slate-700">PF HENRY</span>
      </h1>
      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        {!confirmedAccount && msg && <Alert alert={alert} />}
        {confirmedAccount && (
          <>
          {<Alert alert={{msg:"User successfully confirmed", error:false}} />}
            <Link
              className="block text-center my-5 text-slate-500 uppercase text-sm"
              to="/"
            >
              Log in
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default ConfirmAccount;
