import useWorkspaceStore from "../../../store/useWorkspaceStore";
import type { project } from "../../../types/workspace";
import KanbanBoard from "../../kanban/KanbanBoard";

function WorkspaceOverview() {
  const name = useWorkspaceStore((s) => s.title);
  return (
    <div>
      <div>Nome do workspace</div>
      <p>{name}</p>
    </div>
  );
}
function WorkspaceTaskList() {}

const WorkspaceKanban = ({ project }: { project: project | undefined }) => {
  const taskList = useWorkspaceStore((ws) => ws.tasks);
  const statusList = useWorkspaceStore((ws) => ws.statuses);
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
function WorkspaceGraph() {}

const View = {
  Overview: WorkspaceOverview,
  List: WorkspaceTaskList,
  Kanban: WorkspaceKanban,
  Graph: WorkspaceGraph,
};

export default View;
