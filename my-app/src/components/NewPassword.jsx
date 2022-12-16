import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Alert from "../components/Alert";
import clientAxios from "../config/clientAxios";

const NewPassword = () => {
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({});
  const [isPasswordModified, setIsPasswordModified] = useState(false);
  const [isTokenValid, setIsTokenValid] = useState(false);

  const params = useParams();
  const { token } = params;

  useEffect(() => {
    const checkToken = async () => {
      try {
        const response = await clientAxios(`/clients/forgot-password/${token}`);
        setAlert({ msg: response.data, error: false });
        setIsTokenValid(true);
      } catch (error) {
        setAlert({ msg: error.response.data, error: true });
        setIsTokenValid(false);
      }
    };
    checkToken();
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setAlert({
        msg: "Password must be at least 6 characters long",
        error: true,
      });
      return;
    }
    try {
      const url = `/clients/forgot-password/${token}`;
      const { data } = await clientAxios.post(url, { password });
      setAlert({ msg: data.msg, error: false });
      setPassword("");
      setIsPasswordModified(true);
      setIsTokenValid(false);
    } catch (error) {
      setAlert({ msg: error.response.data.msg, error: true });
    }
  };

  const { msg } = alert;

  return (
    <>
      <h1 className="text-6xl font-black capitalize text-sky-600">
        Restore your password and don't lose access to your{" "}
        <span className="text-slate-700">projects</span>
      </h1>

      {msg && <Alert alert={alert} />}

      {isTokenValid && (
        <form
          onSubmit={handleSubmit}
          className="px-10 py-10 my-10 bg-white rounded-lg shadow"
        >
          <div className="my-5">
            <label
              htmlFor="password"
              className="block text-xl font-bold text-gray-600 uppercase"
            >
              New password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Your new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 mt-3 border rounded-xl bg-gray-50"
            />
          </div>

          <input
            type="submit"
            value="Save new password"
            className="w-full py-3 mb-5 font-bold text-white uppercase transition-colors rounded bg-sky-700 hover:cursor-pointer hover:bg-sky-800"
          />
        </form>
      )}

      {isPasswordModified && (
        <Link
          className="block my-5 text-sm text-center uppercase text-slate-500"
          to="/"
        >
          Log in
        </Link>
      )}
    </>
  );
};

export default NewPassword;
