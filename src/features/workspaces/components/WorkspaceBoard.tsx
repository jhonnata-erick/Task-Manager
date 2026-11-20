import WorkspaceNavigation from "./navigation";

function WorkspaceBoard() {
  return (
    <div className="flex flex-col h-full">
      <div className="grid">
        <div></div>
        <WorkspaceNavigation />
      </div>
    </div>
  );
}
export default WorkspaceBoard;
