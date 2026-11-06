import { create } from "zustand";

type setType = {
  (
    partial:
      | ConnectionStoreInterface
      | Partial<ConnectionStoreInterface>
      | ((
          state: ConnectionStoreInterface,
        ) => ConnectionStoreInterface | Partial<ConnectionStoreInterface>),
    replace?: false,
  ): void;
  (
    state:
      | ConnectionStoreInterface
      | ((state: ConnectionStoreInterface) => ConnectionStoreInterface),
    replace: true,
  ): void;
};
interface ConnectionStoreInterface {
  online: boolean;
  initConnectionListener: () => () => void;
}
const handleOnline = (set: setType) => () => {
  set({ online: true });
};
const handleOffline = (set: setType) => () => {
  set({ online: false });
};

const useConnectionStore = create<ConnectionStoreInterface>((set) => ({
  online: navigator.onLine,
  initConnectionListener: () => {
    const whenOnline = handleOnline(set);
    const whenOffline = handleOffline(set);
    addEventListener("online", whenOnline);
    addEventListener("offline", whenOffline);
    return () => {
      removeEventListener("online", whenOnline);
      removeEventListener("offline", whenOffline);
    };
  },
}));

export default useConnectionStore;
