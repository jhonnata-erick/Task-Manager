import { createBrowserRouter, Outlet } from "react-router";
import OnlineWrapper from "./OnlineWrapper";
import Start from "./routes/Start";
import Offline from "./routes/Offline";
import Application from "./routes/Application";
import BuildWorkspaceForm from "../features/workspaces/components/BuildWorkspaceForm";
import { Workspace } from "./routes/Workspace";
import { Board } from "./routes/Board";
import { TabManager } from "../features/workspaces/components/TabManager";
const router = createBrowserRouter([
  {
    element: <OnlineWrapper />,
    children: [
      { path: "/start", element: <Start /> },
      { path: "/createworkspace", element: <BuildWorkspaceForm /> },
      {
        path: "app",
        element: <Application />,
        children: [
          {
            path: ":workspaceId",
            element: <Workspace />,
            children: [
              {
                path: "board",
                element: <Board />,
                children: [
                  {
                    path: ":tab",
                    element: <TabManager />,
                    children: [
                      {
                        path: ":projectId",
                        element: <Outlet />,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      { path: "*", element: <>Not exists</> },
      { path: "/notFound", element: <>Not exists</> },
    ],
  },
  { path: "/offline", element: <Offline /> },
]);

export default router;
