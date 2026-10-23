import { createBrowserRouter } from "react-router";
import OnlineWrapper from "./OnlineWrapper";
import Start from "./routes/Start";
import Offline from "./routes/Offline";
import Workspace from "./routes/Workspace";
import { Board } from "./routes/workspace/Board";

const router = createBrowserRouter([
  {
    element: <OnlineWrapper />,
    children: [
      { path: "/", element: <Start /> },
      {
        path: "/workspace",
        element: <Workspace />,
        children: [
          { path: "/board", element: <Board /> },
          { path: "/backlog" },
          { path: "/checklist" },
          { path: "/dashboard" },
        ],
      },
    ],
  },
  { path: "/offline", element: <Offline /> },
]);

export default router;
