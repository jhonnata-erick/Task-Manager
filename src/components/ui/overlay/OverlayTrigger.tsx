import { useOverlayContext } from "./OverlayProvider";

export const OverlayTrigger = ({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const { toggle, triggerRef } = useOverlayContext();
  return (
    <button
      id={id}
      ref={triggerRef}
      type="button"
      className={className}
      onClick={() => toggle()}
    >
      {children}
    </button>
  );
};
