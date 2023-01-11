import React, { useEffect, useSelector, Fragment } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import {useModal} from './hooks/useModal'
import Review from './Review'
import {Modal} from './Modal'
import Swal from "sweetalert2";

const Reservations = (props) => {

  const [turno, setTurno] = React.useState(null);

  React.useEffect(() => {
    axios.get('http://localhost:3001/turn/all').then((response) => {
      setTurno(response.data);
    });
  }, []);

  function deletePost(id) {
    axios
      .delete(`http://localhost:3001/turn/delete}/${id}`)
      .then(() => {
        alert("Post deleted!");
        setTurno(null)
      });
    // console.log('borrado:', id)
  }

  const [isOpen,modalOpen,]=useModal(false)

  // const location = useLocation();
  // useEffect(() => {
  //   const queryParams = new URLSearchParams(location.search);
  //   const singleValue = queryParams.get("status");
  //   showAlert(singleValue);
  // });

  // //showAlert(statusOperation);

  // const showAlert = (status) => {
  //   if (status === "approved") {
  //     Swal.fire({
  //       position: "center",
  //       icon: "success",
  //       title: "Payment successfully completed",
  //       showConfirmButton: false,
  //       timer: 1500,
  //     });
  //   } else {
  //     Swal.fire({
  //       icon: "error",
  //       title: "Payment Error",
  //       text: "Something went wrong in payment method",
  //     });
  //   }
  // };
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
                                    <div className="font-semibold text-left">Status</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Day</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Schedule</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Review</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100">
                         {
                          turno?.map((el) =>{
                            return( 
                              <Fragment>
                            <tr>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                                        {/* <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src="https://http2.mlstatic.com/D_NQ_NP_853161-MLA53266914902_012023-F.jpg" width="40" height="40" alt="Alex Shatov"/></div> */}
                                        <div className="font-medium text-gray-800">{el.state}</div>
                                    </div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left">{el.date}</div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left font-medium text-green-500">{el.time_start}</div>
                                </td>
                                
                                <td className="p-2 whitespace-nowrap">
                                <button onClick={() => modalOpen()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                <i className="fa-solid fa-star"></i>
                                </button>
                                    <Modal isOpen={isOpen} >
                                      <Review/>
                                    </Modal>
                                </td>
                                {/* <button
                                type="button"
                                class="border border-red-500 bg-red-500 text-white rounded-md px-2 py-1 m-1 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
                                onClick={()=>{deletePost(el.id)}}
                                >
                                X
                                </button> */}
                                
                            </tr>                                
                              </Fragment>
                            )
                          })
                        } 
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</section>
    </div>)
};

export default Reservations;
