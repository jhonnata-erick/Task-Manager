import useWorkspaceStore from "../../../store/useWorkspaceStore";

const View = {
  Overview: WorkspaceOverview,
  List: WorkspaceTaskList,
  Kanban: WorkspaceKanban,
  Graph: WorkspaceGraph,
};

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
function WorkspaceKanban() {}
function WorkspaceGraph() {}

export default View;
