import { useParams } from "react-router";
import View from "../workspaces/components/WorkspaceTabs";
import { useEffect } from "react";
import useWorkspaceStore from "../../store/useWorkspaceStore";

const isIdValid = (id: string | undefined) => {
  const regex = /^project-(\d+)$/;
  return regex.test(id || "");
};
const Kanban = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const projects = useWorkspaceStore((ws) => ws.projects);
  const project = projects.find((p) => p.id === projectId);
  useEffect(() => {
    if (!(projectId && isIdValid(projectId))) {
      return;
    }
  }, [projectId]);
  return <View.Kanban project={project} />;
};

export default Kanban;
