import useWorkspaceStore from "../../../store/useWorkspaceStore";
import type { board } from "../../../types/workspace";
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

const WorkspaceKanban = ({ board }: { board: board }) => {
  const WorkspaceTaskList = useWorkspaceStore((ws) => ws.tasks);
  const tasks = board.tasks
    .map((task) => {
      return WorkspaceTaskList.find((wstl) => wstl.id === task);
    })
    .filter((t) => t !== undefined);
  return <KanbanBoard tasks={tasks} columns={board.columns} />;
};
function WorkspaceGraph() {}

const View = {
  Overview: WorkspaceOverview,
  List: WorkspaceTaskList,
  Kanban: WorkspaceKanban,
  Graph: WorkspaceGraph,
};

export default View;
