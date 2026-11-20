import { Navigate, Outlet, useParams } from "react-router";
import AppViewLayout from "../../components/layout/app/AppViewLayout";
import getDBfromLocalStorage from "../../utils/GetDatabase";
export default function App() {
  const { workspaceId } = useParams<{
    workspaceId: string;
  }>();
  if (!workspaceId) {
    const database = getDBfromLocalStorage();
    return database.length === 0 ? (
      <Navigate to="/start" />
    ) : (
      <Navigate to={`/app/${database[0].id}/board/overview`} relative="route" />
    );
  }

  console.log("app");

  if (!location.href.split(workspaceId)[1].includes("board"))
    return <Navigate to={`${workspaceId}/board/overview`} />;
  return (
    <AppViewLayout>
      <Outlet />
    </AppViewLayout>
  );
}
