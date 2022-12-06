import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="shadow-2xl flex justify-between w-auto m-auto rounded-xl p-10 h-16  mx-5 items-center">
        <div className="">
          <Link to="/">
            <p className="text-2xl">
              PF<span className="font-bold"> Henry</span>
            </p>
          </Link>
        </div>

        <div className="hidden md:flex gap-10">
          <Link to="about">About us</Link>
          <Link to="contact-us">Contact us</Link>
          <Link to="pricing">Pricing</Link>
        </div>

        <button className="bg-green-600 md:px-12 rounded-2xl py-2  text-white font-bold md:text-xl xs: text-xs xs: px-5 ">
          Log in
        </button>
      </nav>
    </>
  );
};

export default NavBar;
