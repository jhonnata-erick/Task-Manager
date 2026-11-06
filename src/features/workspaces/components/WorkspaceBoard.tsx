import WorkspaceNavigation from "./navigation";

interface WorkspaceBoardProperties {
  Board?: React.ReactNode;
  view?: "overview" | "list" | "kanban" | "graph" | null;
}
function WorkspaceBoard({ Board }: Readonly<WorkspaceBoardProperties>) {
  return (
    <div className="flex flex-col h-full">
      <WorkspaceNavigation />
      {Board}
    </div>
  );
}
export default WorkspaceBoard;
