import useConnectionStore from "../store/useConnectionStore";
import { Navigate, Outlet } from "react-router";

function OnlineWrapper() {
  const isOnline = useConnectionStore((store) => store.online);

  if (isOnline === false) {
    return <Navigate to={"/offline"} />;
  }

  return <Outlet />;
}
export default OnlineWrapper;
