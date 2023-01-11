import React, { useEffect, useSelector, Fragment } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

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
<section class="antialiased bg-gray-100 text-gray-600 h-screen px-4">
    <div class="flex flex-col justify-center h-full">
        
        <div class="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header class="px-5 py-4 border-b border-gray-100">
                <h2 class="font-semibold text-gray-800">My reservations</h2>
            </header>
            <div class="p-3">
                <div class="overflow-x-auto">
                    <table class="table-auto w-full">
                        <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Estado</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">dia</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Horario</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="text-sm divide-y divide-gray-100">
                        {
                          turno?.map((el) =>{
                            return(
                              <Fragment>
                            <tr>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        {/* <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img class="rounded-full" src="https://http2.mlstatic.com/D_NQ_NP_853161-MLA53266914902_012023-F.jpg" width="40" height="40" alt="Alex Shatov"/></div> */}
                                        <div class="font-medium text-gray-800">{el.state}</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left">{el.date}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-medium text-green-500">{el.time_start}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                {/* <button
                                type="button"
                                class="border border-red-500 bg-red-500 text-white rounded-md px-2 py-1 m-1 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
                                onClick={()=>{deletePost(el.id)}}
                                >
                                X
                                </button> */}
                                </td>
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
