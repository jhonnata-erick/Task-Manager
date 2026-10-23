import { create } from "zustand";

interface ConnectionStoreInterface {
  online: boolean;
  initConnectionListener: () => () => void;
}

const useConnectionStore = create<ConnectionStoreInterface>((set) => ({
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

export default useConnectionStore;
