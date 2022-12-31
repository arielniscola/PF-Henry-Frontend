import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';
import OwnerDashboard from "./OwnerDashboard";
import UserDashBoard from "./UserDashboard";
import Develop from "./DeveloperDashBoard"

const Account = () => {
  const currentUser = useSelector((state) => state.currentUser);

  if (!currentUser) return <Navigate to="/login" replace />;

  const dashBoard = () => {
    if(currentUser.role === "admin") return <Develop/>
    if(currentUser.role === "owner") return <OwnerDashboard/>
  }


  return (
    <>
    { currentUser.role !== "admin" && <UserDashBoard />}
    {dashBoard()}
    </>
  );
};

export default Account;
