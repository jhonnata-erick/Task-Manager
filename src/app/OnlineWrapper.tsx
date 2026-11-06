import useConnectionStore from "../store/useConnectionStore";
import { Navigate, Outlet } from "react-router";

export default function OnlineWrapper() {
  const isOnline = useConnectionStore((store) => store.online);

  return isOnline ? <Outlet /> : <Navigate to={"/offline"} />;
}
