import type React from "react";
import { useParams } from "react-router";
import WorkspaceBoard from "../../features/workspaces/components/WorkspaceBoard";
import View from "../../features/workspaces/components/WorkspaceTabs";
import Kanban from "../../features/kanban/Kanban";

type views = "overview" | "list" | "kanban" | "graph";

const parseViewParam = (view: string | undefined): views | null => {
  if (!view) return null;
  const validViews = new Set<string>(["overview", "list", "kanban", "graph"]);
  return validViews.has(view) ? (view as views) : null;
};

function Workspace(): React.ReactNode {
  const { view } = useParams<{ id: string; view: string }>();
  if (parseViewParam(view)) {
    switch (view) {
      case "overview": {
        return <WorkspaceBoard Board={<View.Overview />} />;
      }
      case "list": {
        return <WorkspaceBoard Board={<>List</>} />;
      }
      case "kanban": {
        return <WorkspaceBoard Board={<Kanban />} />;
      }
      case "graph": {
        return <WorkspaceBoard Board={<>Graph</>} />;
      }
    }
  }
  return <></>;
}
export default Workspace;
