import { createBrowserRouter } from "react-router";
import OnlineWrapper from "./OnlineWrapper";
import Start from "./routes/Start";
import Offline from "./routes/Offline";
import Application from "./routes/Application";
import BuildWorkspaceForm from "../features/workspaces/components/build-workspace-form";

const router = createBrowserRouter([
  {
    element: <OnlineWrapper />,
    children: [
      { path: "/", element: <Start /> },
      { path: "/createworkspace", element: <BuildWorkspaceForm /> },
      {
        path: "/:id",
        element: <Application />,
        children: [{ path: "/:id/:view" }],
      },
    ],
  },
  { path: "/offline", element: <Offline /> },
]);

export default router;
