import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Tr from './listForOwner'
import {getUserDetails} from '../redux/actions'
import { useEffect } from "react";



const OwnerDashboard = () => {
  const dispatch = useDispatch()
  const id = useSelector(state => state.currentUser.id)
  useEffect(()=>{
    dispatch(getUserDetails(id))
  },[])
  const obj = useSelector(state => state.currentUser)
  const complexList = useSelector(state => state.userComplexs)

  return (
    <div className="bg-gray-100">
      <div className="container max-w-4xl px-4 mx-auto sm:px-8">
        <div className="py-8">
            <Link  className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 " to="/create">Create complex</Link>
          <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
            <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                    >
                      Complex
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                    >
                      Active events
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                    >
                      Created at
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                    >
                      status
                    </th>
                    <th
                      colSpan="2"
                      className="px-5 py-3 text-sm font-normal text-center text-gray-800 uppercase bg-white border-b border-gray-200"
                    >actions</th>
                  </tr>
                </thead>
                <tbody>
                  {complexList?.map((complex,index) => (<Tr
                  array={complexList}
                  key={index}
                  complex={complex}
                  typeTable="complex"
                  />)
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OwnerDashboard;
