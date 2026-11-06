import { useParams } from "react-router";
import View from "../workspaces/components/workspace-tabs";
import { useEffect, useState } from "react";
import type { project } from "../../types/workspace";
import useWorkspaceStore from "../../store/useWorkspaceStore";

interface KanbanProps {}
const validateProjectId = (id: string | undefined) => {
  const regex = /^project-(\d+)$/;
  return regex.test(id || "");
};
const Kanban = ({}: KanbanProps) => {
  const { projectId } = useParams<{ projectId: string }>();
  const [project, setProject] = useState<project | undefined>();
  const projects = useWorkspaceStore((ws) => ws.projects);
  useEffect(() => {
    if (projectId && validateProjectId(projectId)) {
      const project = projects.find((p) => p.id === projectId);
      setProject(project);
    }
  }, [projects]);
  return <View.Kanban project={project} />;
};

export default Kanban;
