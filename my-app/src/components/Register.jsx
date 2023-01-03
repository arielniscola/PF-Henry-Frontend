import { useState } from "react";
import { Link } from "react-router-dom";
import clientAxios from "../config/clientAxios";
import Alert from "./Alert";
import { createUser } from "../redux/actions";

const Register = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });
  const [alert, setAlert] = useState({});

  const { password, email, name, repeatPassword } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.values(formData).includes("")) {
      setAlert({ msg: "All fields are required", error: true });
      return;
    }

    if (password !== repeatPassword) {
      setAlert({ msg: "Password doesn't match!", error: true });
      return;
    }

    if (password.length < 6) {
      setAlert({
        msg: "Password too short, minimun length is 6",
        error: true,
      });
      return;
    }
    setAlert({});

    try {
      const data = await createUser(formData)
      setAlert({ msg: data.msg, error: false });
      setFormData({ name: "", password: "", email: "", repeatPassword: "" });
    } catch (error) {
      setAlert({ msg: await error.response.data, error: true });
    }
  };

  const { msg } = alert;

  return (
    <main className="container p-5 mx-auto mt-5 md:mt-20 md:w-2/3 lg:w-2/5">
      <h1 className="text-6xl font-black capitalize text-sky-600">
        Register your account to start using{" "}
        <span className="text-slate-700">PF henry</span>
      </h1>

      {msg && <Alert alert={alert} />}

      <form
        noValidate
        className="px-10 py-10 my-10 bg-white rounded-lg shadow"
        onSubmit={handleSubmit}
      >
        <div className="my-5">
          <label
            htmlFor="name"
            className="block text-xl font-bold text-gray-600 uppercase"
          >
            Name
          </label>
          <input
            id="name"
            type="name"
            name="name"
            placeholder="Your name"
            className="w-full p-3 mt-3 border rounded-xl bg-gray-50"
            value={name}
            onChange={handleChange}
          />
        </div>
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
            name="email"
            placeholder="Registered email"
            className="w-full p-3 mt-3 border rounded-xl bg-gray-50"
            value={email}
            onChange={handleChange}
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
            name="password"
            placeholder="Registered password"
            className="w-full p-3 mt-3 border rounded-xl bg-gray-50"
            value={password}
            onChange={handleChange}
          />
        </div>
        <div className="my-5">
          <label
            htmlFor="repeat-password"
            className="block text-xl font-bold text-gray-600 uppercase"
          >
            Repeat your password
          </label>
          <input
            id="repeat-password"
            type="password"
            name="repeatPassword"
            placeholder="Repeat your password"
            className="w-full p-3 mt-3 border rounded-xl bg-gray-50"
            value={repeatPassword}
            onChange={handleChange}
          />
        </div>

        <input
          type="submit"
          value="Register"
          className="w-full py-3 mb-5 font-bold text-white uppercase transition-colors rounded bg-sky-700 hover:cursor-pointer hover:bg-sky-800"
        />

        <nav className="lg:flex lg:justify-between">
          <Link
            to="/login"
            className="block my-2 text-sm text-center uppercase text-slate-500 hover:text-blue-600"
          >
            Already have an account? Log in!
          </Link>
          <Link
            to="/forgot-password"
            className="block my-2 text-sm text-center uppercase text-slate-500 hover:text-blue-600"
          >
            Forgot my password
          </Link>
        </nav>
      </form>
    </main>
  );
};

export default Register;
