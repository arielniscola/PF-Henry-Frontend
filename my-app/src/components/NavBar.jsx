import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setCurrentUser, logoutUser } from "../redux/actions";

const NavBar = () => {
  const [userModal, setUserModal] = useState(false);
  const [menuModal, setMenuModal] = useState(false);
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);

  // useEffect(() => {
  //   dispatch(
  //     setCurrentUser({
  //       image:
  //         "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
  //       isOwner: false,
  //     })
  //   );
  // }, [dispatch]);

  // console.log(currentUser);

  const resetCurrentUser = () => {
    localStorage.clear();
    dispatch(logoutUser());
  };

  return (
    <nav className="bg-white shadow dark:bg-gray-800 ">
      <div className="px-8 mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center ">
            <Link className="flex-shrink-0" to="/">
              <p className="text-2xl">
                PF<span className="font-bold"> Henry</span>
              </p>
            </Link>
            <div className="hidden md:block">
              <div className="flex items-baseline ml-10 space-x-4">
                <Link
                  className="px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-800 dark:hover:text-white"
                  to="/"
                >
                  Home
                </Link>
                <Link
                  className="px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-800 dark:hover:text-white"
                  to="/about"
                >
                  About us
                </Link>
                <Link
                  className="px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-800 dark:hover:text-white"
                  to="/contact-us"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
          <div className="block">
            <div className="flex items-center ml-4 md:ml-6">
              <div className="relative ml-3">
                <div className="relative inline-block text-left">
                  <div>
                    <button
                      onClick={() => setUserModal(!userModal)}
                      type="button"
                      className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 rounded-md dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
                      id="options-menu"
                    >
                      {currentUser ? (
                        <img
                          src={
                            currentUser.image ||
                            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                          }
                          alt="userphoto"
                          className="w-9 max-w-[50px] max-h-[50px] rounded-3xl"
                        />
                      ) : (
                        <svg
                          width="20"
                          fill="currentColor"
                          height="20"
                          className="text-gray-800"
                          viewBox="0 0 1792 1792"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M1523 1339q-22-155-87.5-257.5t-184.5-118.5q-67 74-159.5 115.5t-195.5 41.5-195.5-41.5-159.5-115.5q-119 16-184.5 118.5t-87.5 257.5q106 150 271 237.5t356 87.5 356-87.5 271-237.5zm-243-699q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zm512 256q0 182-71 347.5t-190.5 286-285.5 191.5-349 71q-182 0-348-71t-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
                        </svg>
                      )}
                    </button>
                  </div>
                  <div
                    className={`absolute z-10 right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-800 ring-1 ring-black ring-opacity-5 ${
                      userModal ? "" : "hidden"
                    }`}
                  >
                    <div
                      className="py-1 "
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <Link
                        to="/account"
                        className="block px-4 py-2 text-gray-700 text-md hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                        role="menuitem"
                      >
                        <span className="flex flex-col">
                          <span>Account</span>
                        </span>
                      </Link>
                      {currentUser ? (
                        <Link
                          // href="#"
                          className="block px-4 py-2 text-gray-700 text-md hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                          role="menuitem"
                        >
                          <span
                            className="flex flex-col"
                            onClick={() => dispatch(setCurrentUser(null))}
                          >
                            <span onClick={resetCurrentUser}>Logout</span>
                          </span>
                        </Link>
                      ) : (
                        <Link
                          // href="#"
                          className="block px-4 py-2 text-gray-700 text-md hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                          role="menuitem"
                        >
                          <span className="flex flex-col">
                            <span>Log in</span>
                          </span>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex -mr-2 md:hidden">
            <button
              className="inline-flex items-center justify-center p-2 text-gray-800 rounded-md dark:text-white hover:text-gray-300 focus:outline-none"
              onClick={() => setMenuModal(!menuModal)}
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="w-8 h-8"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${menuModal ? "" : "hidden"} z-10`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:text-gray-800 dark:hover:text-white"
            to="/"
          >
            Home
          </Link>
          <Link
            className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:text-gray-800 dark:hover:text-white"
            to="/about-us"
          >
            About us
          </Link>
          <Link
            className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:text-gray-800 dark:hover:text-white"
            to="/contact-us"
          >
            Contact us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
