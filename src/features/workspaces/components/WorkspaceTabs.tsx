import useWorkspaceStore from "../../../store/useWorkspaceStore";

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

function WorkspaceGraph() {}

const View = {
  Overview: WorkspaceOverview,
  List: WorkspaceTaskList,
  Graph: WorkspaceGraph,
};

export default View;
