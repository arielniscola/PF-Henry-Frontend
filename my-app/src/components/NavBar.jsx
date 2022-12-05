import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav
        className="navigation-container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          height: "70px",
        }}
      >
        <div className="logo">
          <Link to="/">Logo</Link>
        </div>

        <div
          className="nav-links"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "50%",
          }}
        >
          <Link to="about">About us</Link>
          <Link to="contact-us">Contact us</Link>
        </div>

        <div className="login">Profile/Login</div>
      </nav>
    </>
  );
};

export default NavBar;
