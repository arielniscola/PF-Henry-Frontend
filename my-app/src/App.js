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


function App() {
  return (
    <Routes>
      <Route path="/" element={<LayOut />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="account" element={<Account />} />
        <Route path="favorites" element={<ComplexFavorite />} />
        <Route path="*" element={<Error404 />} />
        <Route path="search" element={<ComplexContainer/>} />
        <Route path="search/:id" element={<ComplexDetails />} />
      </Route>
    </Routes>
  );
}

export default App;

