import { createBrowserRouter } from "react-router";
import OnlineWrapper from "./OnlineWrapper";
import Start from "./routes/Start";
import Offline from "./routes/Offline";

const router = createBrowserRouter([
  { element: <OnlineWrapper />, children: [{ path: "/", element: <Start /> }] },
  { path: "/offline", element: <Offline /> },
]);

export default router;
