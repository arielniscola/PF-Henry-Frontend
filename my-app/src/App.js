import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import NavBar from "./components/NavBar";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="contact-us" element={<ContactUs />} />
      </Route>
    </Routes>
  );
}

export default App;

