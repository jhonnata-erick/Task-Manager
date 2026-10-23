import { create } from "zustand";

interface TaskMgrInterface {
  online: boolean;
  initConnectionListener: () => () => void;
}

const useTaskMgrStore = create<TaskMgrInterface>((set) => ({
  online: navigator.onLine,
  initConnectionListener: () => {
    const handleOnline = () => {
      set({ online: true });
    };
    const handleOffline = () => {
      set({ online: false });
    };
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  },
}));

export default useTaskMgrStore;
