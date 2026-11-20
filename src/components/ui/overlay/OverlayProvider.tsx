import {
  createContext,
  use,
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from "react";

interface OverlayContextProperties {
  children: ReactNode;
  position?:
    | "centered"
    | "relative"
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right";
  closeOn?: "clickout" | "timeover" | "closeBtn";
}
interface OverlayContextInterface {
  isOpen: boolean;
  position:
    | "centered"
    | "relative"
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right";
  closeOn: "clickout" | "timeover" | "closeBtn";
  triggerRef: RefObject<HTMLButtonElement | null>;
  toggle: () => void;
  close: () => void;
}
const OverlayContext = createContext<OverlayContextInterface | null>(null);
export const useOverlayContext = () => {
  const context = use(OverlayContext);
  if (!context) throw new Error("Overlay Context Undefined");
  return context;
};
export const OverlayProvider = ({
  children,
  position = "centered",
  closeOn = "clickout",
}: OverlayContextProperties) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((previous) => !previous);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    addEventListener("keydown", handleEscapeKey);
    return () => {
      removeEventListener("keydown", handleEscapeKey);
    };
  }, [close]);

  const triggerReference = useRef<HTMLButtonElement | null>(null);
  return (
    <OverlayContext
      value={{
        isOpen,
        position,
        closeOn,
        toggle,
        close,
        triggerRef: triggerReference,
      }}
    >
      {children}
    </OverlayContext>
  );
};
