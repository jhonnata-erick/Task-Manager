import WorkspaceNavigation from "../../../features/workspaces/components/navigation";
import { TabManager } from "../../../features/workspaces/components/TabManager";

export const BoardViewLayout = () => {
  console.log("board");
  return (
    <div className="flex flex-col h-full">
      <div className="grid">
        <div></div>
        <WorkspaceNavigation />
      </div>
      <TabManager />
    </div>
  );
};
