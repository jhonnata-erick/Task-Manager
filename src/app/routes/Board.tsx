import { Outlet } from "react-router";
import WorkspaceNavigation from "../../features/workspaces/components/navigation";

export const Board = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="grid">
        <div></div>
        <WorkspaceNavigation />
      </div>
      <Outlet />
    </div>
  );
};
