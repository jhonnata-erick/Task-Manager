import useWorkspaceStore from "../../../store/useWorkspaceStore";
import type { project } from "../../../types/workspace";
import KanbanBoard from "../../kanban/KanbanBoard";

function WorkspaceOverview() {
  const name = useWorkspaceStore((s) => s.name);
  return (
    <div>
      <div>Nome do workspace</div>
      <p>{name}</p>
    </div>
  );
}
function WorkspaceTaskList() {}

const WorkspaceKanban = ({ project }: { project: project }) => {
  const WorkspaceTaskList = useWorkspaceStore((ws) => ws.tasks);
  const tasks = project.tasks
    .map((task) => {
      return WorkspaceTaskList.find((wstl) => wstl.id === task);
    })
    .filter((t) => t !== undefined);
  return <KanbanBoard tasks={tasks} columns={project.columns} />;
};
function WorkspaceGraph() {}

const View = {
  Overview: WorkspaceOverview,
  List: WorkspaceTaskList,
  Kanban: WorkspaceKanban,
  Graph: WorkspaceGraph,
};

export default View;
