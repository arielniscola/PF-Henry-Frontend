import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import OwnerDashboard from "./OwnerDashboard";
import UserDashBoard from "./UserDashBoard";

const Account = () => {
  const currentUser = useSelector((state) => state.currentUser);

  if (!currentUser) return <Navigate to="/login" replace />;

  return (
    <>
      <UserDashBoard />
      {currentUser.isAdmin && <OwnerDashboard />}
    </>
  );
};

export default Account;
