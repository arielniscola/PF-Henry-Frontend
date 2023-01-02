import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';
import OwnerDashboard from "./OwnerDashboard";
import UserDashBoard from "./UserDashboard";
import Develop from "./DeveloperDashBoard"

const Account = () => {
  const currentUser = useSelector((state) => state.currentUser);

  if (!currentUser) return <Navigate to="/login" replace />;
  console.log(currentUser.rol)

  const dashBoard = () => {
    if(currentUser.rol === "admin") return <Develop/>
    if(currentUser.rol === "owner") return <OwnerDashboard/>
  }


  return (
    <>
    { currentUser.rol !== "admin" && <UserDashBoard />}
    {dashBoard()}
    </>
  );
};

export default Account;
