import { useParams } from "react-router";
import ApplicationLayout from "../../components/layout/application-layout";
import useWorkspaceStore from "../../store/useWorkspaceStore";
import { useEffect } from "react";
import Workspace from "./Workspace";

function Application() {
  const { id } = useParams<{ id: string; view: string }>();
  const setWorkspace = useWorkspaceStore((s) => s.application.setWorkspaceData);
  useEffect(() => {
    if (id) {
      setWorkspace(id);
    }
  }, [setWorkspace, id]);
  return (
    <ApplicationLayout>
      <Workspace />
    </ApplicationLayout>
  );
}
export default Application;
