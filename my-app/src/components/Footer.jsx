import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="h-56 bg-blue-800/75 flex flex-wrap py- justify-center text-white items-center ">
      <div className="text-center font-bold ">
        <h2 className="text-5xl  font-bold mb-2">PF HENRY</h2>
        <p className="text-2xl font-bold  ">Ready to start?</p>
        <button className="bg-green-500 text-white py-2 px-5 mt-2 rounded-lg">
          <Link to='/contact-us'>
          I want to speak with a representant
          </Link>
        </button>
        <p className="text-white text-lg m-2">Online support</p>
        <div className="flex justify-center gap-5 ">
          <a href="https://www.whatsapp.com" > 
            <svg
              className="w-5 fill-white"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="WhatsappOutlinedIcon"
              >
              <path d="M19.05 4.91C17.18 3.03 14.69 2 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31c-.82-1.31-1.26-2.83-1.26-4.38 0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42 1.56 1.56 2.41 3.63 2.41 5.83.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28z"></path>
            </svg>
          </a>
          <a href='mailto:pfhenry06@gmail.com'>
            <svg
              className="w-5 fill-white"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="MailOutlinedIcon"
              >
              <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 4.99L4 6h16zm0 12H4V8l8 5 8-5v10z"></path>
            </svg>
            </a>
        </div>
      </div>

      <div className="font-bold text-2xl">
        <ul className="flex gap-10">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/">Pricing</Link>
          </li>
        </ul>

        <div className="text-center mt-5">
          <h2 className="text-xl">Social media</h2>
          <div className="flex justify-evenly mt-2">
            <a href="https://www.instagram.com">
            <svg
              className="w-5 fill-white"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 22 26"
              data-testid="InstagramIcon"
              >
              <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
            </svg>
            </a>
            <a href="https://www.facebook.com">
            <svg
              className="w-5 fill-white"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 22 26"
              data-testid="FacebookIcon"
              >
              <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"></path>
            </svg>
            </a>
            <a href="https://www.linkedin.com">
            <svg
              className="w-5 fill-white"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 22 26"
              data-testid="LinkedInIcon"
              >
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
            </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
