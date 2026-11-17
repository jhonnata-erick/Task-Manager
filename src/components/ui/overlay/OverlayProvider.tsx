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

interface OverlayContextProps {
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
}: OverlayContextProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    addEventListener("keydown", handleEscapeKey);
    return () => {
      removeEventListener("keydown", handleEscapeKey);
    };
  }, [close]);

  const triggerRef = useRef<HTMLButtonElement | null>(null);
  return (
    <OverlayContext
      value={{ isOpen, position, closeOn, toggle, close, triggerRef }}
    >
      {children}
    </OverlayContext>
  );
};
