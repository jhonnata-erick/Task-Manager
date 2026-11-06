import { useNavigate, useParams } from "react-router";
import AppViewLayout from "../../components/layout/app/AppViewLayout";
import useWorkspaceStore from "../../store/useWorkspaceStore";
import { useEffect } from "react";
import Workspace from "./Workspace";

function App() {
  const { id, view } = useParams<{ id: string; view: string }>();

  const navigate = useNavigate();
  const setWorkspace = useWorkspaceStore((s) => s.application.setWorkspaceData);
  useEffect(() => {
    if (!isWorkspaceIdValid(id)) {
      return;
    }

    setWorkspace(id!);
    if (!view) navigate("overview");
  }, [setWorkspace, view, navigate, id]);
  if (isWorkspaceIdValid(id))
    return (
      <AppViewLayout>
        <Workspace />
      </AppViewLayout>
    );
  return <>Wait</>;
}
function isWorkspaceIdValid(id: string | undefined) {
  const regex = /^workspace-(\d+)$/;
  const isTest = regex.test(id || "");
  return isTest;
}
export default App;
