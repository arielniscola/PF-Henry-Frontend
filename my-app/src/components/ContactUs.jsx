import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    complex: "",
    events: "",
    city: "",
    email: "",
    phone: "",
    comments: "",
  });

  const { name, complex, city, email, phone, comments } = formData;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col m-16 md:flex-row place-content-evenly">
      <div className="self-center max-w-xl">
        <h2 className="mb-5 text-4xl font-bold text-blue-700">
          Do you want to try our app in your events complex?
        </h2>
        <p className="mt-10 text-2xl font-medium">
          We show you the benefits of having an online channel to manage your
          complex that allows users to book online.
        </p>
        <p className="mt-10 text-2xl font-medium ">
          Leave us your contact details so we can get in touch with you.
        </p>
      </div>

      <form
        className="flex self-center w-full max-w-sm space-x-3"
        onSubmit={handleFormSubmit}
      >
        <div className="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow dark:bg-gray-800">
          <div className="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
            Contact us !
          </div>
          <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
            <div className="col-span-2 lg:col-span-1">
              <div className="relative ">
                <input
                  type="text"
                  id="contact-form-name"
                  className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Name"
                  value={name}
                  name="name"
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <div className="relative ">
                <input
                  type="text"
                  id="contact-form-email"
                  className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Email"
                  value={email}
                  name="email"
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <div className="relative ">
                <input
                  type="text"
                  id="contact-form-name"
                  className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Complex"
                  value={complex}
                  name="complex"
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <div className="relative ">
                <input
                  type="number"
                  id="contact-form-phone"
                  className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Phone"
                  name="phone"
                  value={phone}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
            </div>
            <div className="col-span-2 lg:col-span-2">
              <div className="relative ">
                <input
                  type="text"
                  id="contact-form-city"
                  className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="City"
                  name="city"
                  value={city}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
            </div>
            <div className="col-span-2">
              <label className="text-gray-700" for="name">
                <textarea
                  className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  id="comment"
                  placeholder="Enter your comment"
                  name="comments"
                  rows="5"
                  cols="40"
                  value={comments}
                  onChange={(e) => handleInputChange(e)}
                ></textarea>
              </label>
            </div>
            <div className="col-span-2 text-right">
              <button
                type="submit"
                className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 "
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
