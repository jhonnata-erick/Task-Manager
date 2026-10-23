import { Navigate } from "react-router";
import useTaskMgrStore from "../../store/useTaskMgrStore";

function Offline() {
  const isOnline = useTaskMgrStore((store) => store.online);

  if (isOnline) {
    return <Navigate to={".."} replace />;
  }
  return (
    <main>
      <h1>You are offline</h1>
      <p>
        Sorry, you are offline right now, as soon as you get reconnected we
        redirect you back from where you stoped
      </p>
    </main>
  );
}
export default Offline;
