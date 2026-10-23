import useTaskMgrStore from "../store/useTaskMgrStore";
import { Navigate, Outlet } from "react-router";

function OnlineWrapper() {
  const isOnline = useTaskMgrStore((store) => store.online);

  if (isOnline === false) {
    return <Navigate to={"/offline"} />;
  }

  return <Outlet />;
}
export default OnlineWrapper;
