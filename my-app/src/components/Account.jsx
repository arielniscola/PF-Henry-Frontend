import { useSelector, useDispatch } from "react-redux";
import Error404 from "./Error404";
import OwnerDashboard from "./OwnerDashboard";
import UserDashBoard from "./UserDashboard";

const Account = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.currentUser);

  if (!currentUser) return <Error404 />;

  return (
    <div>{currentUser.isOwner ? <OwnerDashboard /> : <UserDashBoard />}</div>
  );
};

export default Account;
