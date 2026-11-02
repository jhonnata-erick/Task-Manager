import WorkspaceNavigation from "./navigation";

interface WorkspaceBoardProps {
  Board?: React.ReactNode | undefined;
  view?: "overview" | "list" | "kanban" | "graph" | undefined | null;
}
function WorkspaceBoard({ Board, view }: WorkspaceBoardProps) {
  return (
    <section>
      <WorkspaceNavigation selected={view} />
      {Board}
    </section>
  );
}
export default WorkspaceBoard;
