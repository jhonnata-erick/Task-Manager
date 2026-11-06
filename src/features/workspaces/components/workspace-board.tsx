import WorkspaceNavigation from "./navigation";

interface WorkspaceBoardProps {
  Board?: React.ReactNode | undefined;
  view?: "overview" | "list" | "kanban" | "graph" | undefined | null;
}
function WorkspaceBoard({ Board, view }: WorkspaceBoardProps) {
  return (
    <div className="flex flex-col h-full">
      <WorkspaceNavigation selected={view} />
      {Board}
    </div>
  );
}
export default WorkspaceBoard;
