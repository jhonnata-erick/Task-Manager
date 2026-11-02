import { createBrowserRouter } from "react-router";
import OnlineWrapper from "./OnlineWrapper";
import Start from "./routes/Start";
import Offline from "./routes/Offline";
import CreateWorkspace from "./routes/CreateWorkspace";
import Application from "./routes/Application";

const router = createBrowserRouter([
  {
    element: <OnlineWrapper />,
    children: [
      { path: "/", element: <Start /> },
      { path: "/createworkspace", element: <CreateWorkspace /> },
      {
        path: "/:id",
        element: <Application />,
        children: [{ path: "/:id/:view", element: <Application /> }],
      },
    ],
  },
  { path: "/offline", element: <Offline /> },
]);

export default router;
