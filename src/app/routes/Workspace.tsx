import type React from "react";
import WorkspaceLayout from "../../components/layout/workspace/workspace-layout";
import { useParams } from "react-router";
import useWorkspaceStore from "../../store/useWorkspaceStore";
import { useEffect } from "react";

function Workspace(): React.ReactNode {
  const { id } = useParams<{ id: string }>();
  const setAppData = useWorkspaceStore((s) => s.setWorkspaceData);
  const name = useWorkspaceStore((s) => s.name);
  useEffect(() => {
    if (id) {
      setAppData(id);
    }
  }, [setAppData, id]);
  return (
    <WorkspaceLayout>
      <div>{name}</div>
    </WorkspaceLayout>
  );
}
export default Workspace;
