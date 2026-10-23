import { RouterProvider } from "react-router/dom";
import router from "./routes";
import useConnectionStore from "../store/useConnectionStore";
import { useEffect } from "react";
function App() {
  const initConnectionListener = useConnectionStore(
    (store) => store.initConnectionListener,
  );
  useEffect(() => {
    const cleanup = initConnectionListener();

    return () => cleanup();
  }, [initConnectionListener]);
  return <RouterProvider router={router} />;
}

export default App;
