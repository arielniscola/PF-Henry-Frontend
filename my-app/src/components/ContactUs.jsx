import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    complex: "",
    events: "",
    city: "",
    email: "",
    phone: "",
    moreInfo: "",
  });

  const { fullName, complex, events, city, email, phone, moreInfo } = formData;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "col",
        textAlign: "center",
        justifyContent: "space-around",
      }}
    >
      <div style={{ maxWidth: "600px" }}>
        <h2>Do you want to try our app in your events complex?</h2>
        <p>
          We show you the benefits of having an online channel to manage your
          complex that allows users to book online. Leave us your contact
          details so we can get in touch with you.
        </p>
      </div>

      <div>
        <h2>Contact data</h2>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="fullName" />
            <input
              type="text"
              name="fullName"
              placeholder="Name and Last name"
              value={fullName}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div>
            <label htmlFor="complex" />
            <input
              type="text"
              name="complex"
              placeholder="Complex name"
              value={complex}
              onChange={(e) => handleInputChange(e)}
            />
          </div>{" "}
          <div>
            <label htmlFor="events" />
            <input
              type="text"
              name="events"
              placeholder="Events"
              value={events}
              onChange={(e) => handleInputChange(e)}
            />
            <div>
              <label htmlFor="city" />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={city}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div>
              <label htmlFor="email" />
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div>
              <label htmlFor="phone" />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={phone}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div>
              <label htmlFor="moreInfo" />
              <textarea
                type="text"
                name="moreInfo"
                placeholder="More info"
                value={moreInfo}
                onChange={(e) => handleInputChange(e)}
              />
            </div>

            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
