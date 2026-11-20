import {
  useCallback,
  useEffect,
  useMemo,
  type CSSProperties,
  type DetailedHTMLProps,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { useOverlayContext } from "./OverlayProvider";

interface OverlayContentProperties extends DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  children?: ReactNode;
  darkerBg?: boolean;
  id: string;
  preventsClickOutside?: boolean;
}
const overlayRoot = () => {
  const overlayRoot = document.querySelector("#overlay-root");
  if (!overlayRoot) {
    const element = document.createElement("div");
    element.setAttribute("id", "overlay-root");
    element.setAttribute(
      "class",
      "fixed inset-0 h-screen w-screen pointer-events-none z-1000",
    );
    document.body.append(element);
    return document.querySelector("#overlay-root")!;
  }
  return overlayRoot;
};
const OverlayContent = ({
  children,
  darkerBg = false,
  id,
  preventsClickOutside = false,
  ...properties
}: OverlayContentProperties) => {
  const { isOpen, triggerRef, close, position, closeOn } = useOverlayContext();
  const initialStyles: CSSProperties = useMemo(
    () => ({
      display: undefined,
      top: undefined,
      left: undefined,
      position: undefined,
      z: 1002,
    }),
    [],
  );
  const handlePosition: () => CSSProperties = useCallback(() => {
    switch (position) {
      case "relative": {
        const relativeElement = triggerRef.current!;
        const top =
          relativeElement.getBoundingClientRect().top +
          relativeElement.clientHeight +
          4;
        const left = relativeElement.getBoundingClientRect().left;
        return {
          ...initialStyles,
          position: "absolute",
          top: top,
          left: left,
        };
      }
      case "top-left": {
        return {
          ...initialStyles,
          justifySelf: "start",
          alignSelf: "start",
          margin: 24,
        };
      }
      case "top-right": {
        return {
          ...initialStyles,
          justifySelf: "end",
          alignSelf: "start",
          margin: 24,
        };
      }
      case "bottom-left": {
        return {
          ...initialStyles,
          justifySelf: "start",
          alignSelf: "end",
          margin: 24,
        };
      }
      case "bottom-right": {
        return {
          ...initialStyles,
          justifySelf: "end",
          alignSelf: "end",
          margin: 24,
        };
      }
      default: {
        return {
          ...initialStyles,
          margin: "auto",
        };
      }
    }
  }, [initialStyles, position, triggerRef]);

  useEffect(() => {
    handlePosition();
    const handleClickOut = (event: PointerEvent) => {
      if (event.target === document.querySelector(`#${id + "-"}clickout-area`))
        close();
    };
    const handleResize = () => {
      handlePosition();
    };
    if (closeOn === "clickout") {
      addEventListener("click", handleClickOut);
    }
    if (position === "relative") {
      addEventListener("resize", handleResize);
    }
    return () => {
      if (closeOn === "clickout") {
        removeEventListener("click", handleClickOut);
      }
      if (position === "relative") {
        removeEventListener("resize", handleResize);
      }
    };
  }, [close, closeOn, position, handlePosition, id]);
  if (!isOpen) return null;
  const OverlayRoot = overlayRoot();
  const styles: CSSProperties = handlePosition();
  return createPortal(
    <div
      id={`${id + "-"}clickout-area`}
      className={`z-1001 flex flex-1 fixed inset-0 ${darkerBg ? "bg-black/50" : ""} ${preventsClickOutside && closeOn !== "clickout" ? "pointer-events-none" : "pointer-events-auto"}`}
    >
      <div style={styles} id={id} {...properties}>
        {children}
      </div>
    </div>,
    OverlayRoot,
  );
};
export default OverlayContent;
