import type { ReactNode } from "react";

export function ModalFooter({ children }: Readonly<{ children: ReactNode }>) {
  return <div className="mt-6 flex justify-end gap-3">{children}</div>;
}
