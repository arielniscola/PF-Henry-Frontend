import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import LayOut from "./components/LayOut";
import Error404 from "./components/Error404";
// import SearchCity from "./components/SearchCity";
import Account from "./components/Account";
import ComplexDetails from "./components/ComplexDetails";
import ComplexContainer from "./components/complexContainer";
import ComplexFavorite from "./components/ComplexFavorite";
import Register from "./components/Register";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import NewPassword from "./components/NewPassword";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkUserSession } from "./redux/actions";
import ConfirmAccount from "./components/ConfirmAccount";
import ComplexForm from "./components/complexform";

function App() {
  const dispatch = useDispatch();
  const prueba = useSelector(state => state.currentUser)

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  console.log(prueba)

  return (
    <Routes>
      <Route path="/" element={<LayOut />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="account" element={<Account />} />
        <Route path="favorites" element={<ComplexFavorite />} />
        <Route path="*" element={<Error404 />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="forgot-password/:token" element={<NewPassword />} />
        <Route path="confirm-account/:token" element={<ConfirmAccount />} />
        <Route path="search" element={<ComplexContainer/>} />
        <Route path="create" element={<ComplexForm/>} />
        <Route path="search/:id" element={<ComplexDetails />} />
      </Route>
    </Routes>
  );
}

export default App;

