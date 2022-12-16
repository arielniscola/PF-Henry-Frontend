import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Alert from "./Alert";
import { setCurrentUser } from "../redux/actions/index";
import clientAxios from "../config/clientAxios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({});

  const currentUser = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await clientAxios.post("/clients/login", {
        email,
        password,
      });
      setAlert({});
      setEmail("");
      setPassword("");
      localStorage.setItem("token", data.token);
      dispatch(setCurrentUser(data));
    } catch (error) {
      console.log(error);
      setAlert({ msg: error.response, error: true });
    }
  };

  const { msg } = alert;

  if (currentUser) return <Navigate to="/account" replace />;

  return (
    <>
      <main className="container p-5 mx-auto mt-5 md:mt-20 md:w-2/3 lg:w-2/5">
        <h1 className="text-5xl font-black capitalize text-sky-600">
          Log in to manage your <span className="text-slate-700">complex</span>{" "}
          or turns <span className="text-slate-700">reservations</span>
        </h1>

        {msg && <Alert alert={alert} />}

        <form
          onSubmit={handleLoginSubmit}
          className="px-10 py-10 my-10 bg-white rounded-lg shadow"
        >
          <div className="my-5">
            <label
              htmlFor="email"
              className="block text-xl font-bold text-gray-600 uppercase"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your email"
              value={email}
              className="w-full p-3 mt-3 border rounded-xl bg-gray-50"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="my-5">
            <label
              htmlFor="password"
              className="block text-xl font-bold text-gray-600 uppercase"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              placeholder="Your password"
              className="w-full p-3 mt-3 border rounded-xl bg-gray-50"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <input
            type="submit"
            value="Log in"
            className="w-full py-3 mb-5 font-bold text-white uppercase transition-colors rounded bg-sky-700 hover:cursor-pointer hover:bg-sky-800"
          />
        </form>
        <nav className="lg:flex lg:justify-between">
          <Link
            to="/register"
            className="block my-5 text-sm text-center uppercase text-slate-500"
          >
            Don't have an account? Register now!
          </Link>
          <Link
            to="/forgot-password"
            className="block my-5 text-sm text-center uppercase text-slate-500"
          >
            Forgot my password
          </Link>
        </nav>
      </main>
    </>
  );
};

export default Login;
