import type React from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import WorkspaceBoard from "../../features/workspaces/components/workspace-board";
import View from "../../features/workspaces/components/workspace-tabs";
import useWorkspaceStore from "../../store/useWorkspaceStore";

function Workspace(): React.ReactNode {
  const boards = useWorkspaceStore((s) => s.projects);
  const { view } = useParams<{ id: string; view: string }>();
  const [viewType, setView] = useState<
    null | "overview" | "list" | "kanban" | "graph"
  >(null);
  const [Canvas, setCanvas] = useState(<></>);
  useEffect(() => {
    switch (view) {
      case "overview": {
        setView("overview");
        setCanvas(<View.Overview />);
        break;
      }
      case "list": {
        setView("list");
        setCanvas(<>List</>);
        break;
      }
      case "kanban": {
        setView("kanban");
        setCanvas(<View.Kanban project={boards[0]!} />);
        break;
      }
      case "graph": {
        setView("graph");
        setCanvas(<>Graph</>);
        break;
      }
      default: {
        setView(null);
        break;
      }
    }
  }, [view]);
  return <WorkspaceBoard view={viewType} Board={Canvas} />;
}
export default Workspace;
