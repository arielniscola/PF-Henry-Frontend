import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Swal from "sweetalert2";

const Reservations = (props) => {
  const location = useLocation();
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const singleValue = queryParams.get("status");
    showAlert(singleValue);
  });

  //showAlert(statusOperation);

  const showAlert = (status) => {
    if (status === "approved") {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Payment successfully completed",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Payment Error",
        text: "Something went wrong in payment method",
      });
    }
  };
  return <div>Reservations</div>;
};

export default Reservations;
