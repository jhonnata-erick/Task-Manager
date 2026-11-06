import type React from "react";
import { useParams } from "react-router";
import { useState } from "react";
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
  const [Canvas, setCanvas] = useState(<></>);
  if (parseViewParam(view)) {
    switch (view) {
      case "overview": {
        setCanvas(<View.Overview />);
        break;
      }
      case "list": {
        setCanvas(<>List</>);
        break;
      }
      case "kanban": {
        setCanvas(<Kanban />);
        break;
      }
      case "graph": {
        setCanvas(<>Graph</>);
        break;
      }
    }
  }
  return <WorkspaceBoard Board={Canvas} />;
}
export default Workspace;
