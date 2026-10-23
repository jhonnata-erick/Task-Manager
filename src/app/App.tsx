import { RouterProvider } from "react-router/dom";
import router from "./routes";
import useTaskMgrStore from "../store/useTaskMgrStore";
import { useEffect } from "react";
function App() {
  const initConnectionListener = useTaskMgrStore(
    (store) => store.initConnectionListener,
  );
  useEffect(() => {
    const cleanup = initConnectionListener();

    return () => cleanup();
  }, [initConnectionListener]);
  return <RouterProvider router={router} />;
}

export default App;
