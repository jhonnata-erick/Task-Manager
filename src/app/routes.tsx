import { createBrowserRouter } from "react-router";
import OnlineWrapper from "./OnlineWrapper";
import Start from "./routes/Start";
import Offline from "./routes/Offline";
import Workspace from "./routes/Workspace";
import { Board } from "./routes/workspace/Board";
import CreateWorkspace from "./routes/CreateWorkspace";

const router = createBrowserRouter([
  {
    element: <OnlineWrapper />,
    children: [
      { path: "/", element: <Start /> },
      { path: "/createworkspace", element: <CreateWorkspace /> },
      {
        path: "/workspace/:id",
        element: <Workspace />,
        children: [
          { path: "/workspace/:id/board", element: <Board /> },
          { path: "/workspace/:id/backlog" },
          { path: "/workspace/:id/checklist" },
          { path: "/workspace/:id/dashboard" },
        ],
      },
    ],
  },
  { path: "/offline", element: <Offline /> },
]);

export default router;
