import { createBrowserRouter, Outlet } from "react-router";
import OnlineWrapper from "./OnlineWrapper";
import Start from "./routes/Start";
import Offline from "./routes/Offline";
import Application from "./routes/Application";
import BuildWorkspaceForm from "../features/workspaces/components/BuildWorkspaceForm";

const router = createBrowserRouter([
  {
    element: <OnlineWrapper />,
    children: [
      { path: "/", element: <Start /> },
      { path: "/createworkspace", element: <BuildWorkspaceForm /> },
      {
        path: "/:id",
        element: <Application />,
        children: [
          { path: "/:id/:view", element: <Outlet /> },
          { path: "/:id/:projectId/:view", element: <Outlet /> },
        ],
      },
    ],
  },
  { path: "/offline", element: <Offline /> },
]);

export default router;
