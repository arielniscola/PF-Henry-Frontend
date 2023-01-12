import React, { useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useModal } from "./hooks/useModal";
import Review from "./Review";
import { ModalReview } from "./ModalReview";
import axios from "axios";
import Swal from "sweetalert2";

const Reservations = (props) => {
  const [turno, setTurno] = React.useState(null);
  const currentUser = useSelector((state) => state.currentUser);
  const id = currentUser && currentUser?.id;
  const [isOpen, modalOpen] = useModal(false);

  React.useEffect(() => {
    axios
      .get(`http://localhost:3001/turn/user-turns/${id}`)
      .then((response) => {
        setTurno(response.data);
      });
    const queryParams = new URLSearchParams(location.search);
    const singleValue = queryParams.get("status");
    showAlert(singleValue);
  }, [id]);

  function deletePost(id) {
    axios.delete(`http://localhost:3001/turn/delete}/${id}`).then(() => {
      alert("Post deleted!");
      setTurno(null);
    });
    // console.log('borrado:', id)
  }

  const location = useLocation();
  useEffect(() => {}, []);

  const showAlert = (status) => {
    console.log(status);
    if (status === "approved") {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Payment successfully completed",
        showConfirmButton: false,
        timer: 1500,
      });
      // } else if (status) {
      //   Swal.fire({
      //     icon: "error",
      //     title: "Payment Error",
      //     text: "Something went wrong in payment method",
      //   });
    }
  };
  return (
    <div>
      <section className="antialiased bg-gray-100 text-gray-600 h-screen px-4">
        <div className="flex flex-col justify-center h-full">
          <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100">
              <h2 className="font-semibold text-gray-800">My reservations</h2>
            </header>
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="table-auto w-full">
                  <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Estado</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">dia</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Horario</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Review</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                    {turno?.map((el, i) => {
                      return (
                        <Fragment key={i}>
                          <tr>
                            <td className="p-2 whitespace-nowrap">
                              <div className="flex items-center">
                                {/* <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src="https://http2.mlstatic.com/D_NQ_NP_853161-MLA53266914902_012023-F.jpg" width="40" height="40" alt="Alex Shatov"/></div> */}
                                <div className="font-medium text-gray-800">
                                  {el.state}
                                </div>
                              </div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="text-left">{el.date}</div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="text-left font-medium text-green-500">
                                {el.time_start}
                              </div>
                            </td>

                            <td className="p-2 whitespace-nowrap">
                              <button
                                onClick={() => modalOpen()}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                              >
                                <i className="fa-solid fa-star"></i>
                              </button>
                              <ModalReview isOpen={isOpen}>
                                <Review id={el.court.complejoId} userId={id} />
                              </ModalReview>
                            </td>
                          </tr>
                        </Fragment>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reservations;
