import { useParams } from "react-router";
import { useEffect } from "react";
import useWorkspaceStore from "../../store/useWorkspaceStore";
import KanbanBoard from "./render/KanbanBoard";

export const Kanban = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const id = isIdValid(projectId) ? projectId : null;

  useEffect(() => {
    if (!(projectId && isIdValid(projectId))) {
      return;
    }
  }, [projectId]);

  const projects = useWorkspaceStore((workspace) => workspace.projects);
  const taskList = useWorkspaceStore((workspace) => workspace.tasks);
  const statusList = useWorkspaceStore((workspace) => workspace.statuses);

  const project = projects.find((project) => project.id === id);

  if (!project) return <KanbanBoard tasks={taskList} columns={statusList} />;

  const tasks = project.tasks
    .map((task) => {
      return taskList.find((wstl) => wstl.id === task);
    })
    .filter((t) => t !== undefined);
  const statuses = project.statuses
    .map((status) => {
      return statusList.find((s) => s.id === status);
    })
    .filter((t) => t !== undefined);

  return <KanbanBoard tasks={tasks} columns={statuses} />;
};

function isIdValid(id: string | undefined) {
  const regex = /^project-(\d+)$/;
  return regex.test(id || "");
}
