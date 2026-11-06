import type { ReactNode } from "react";

export function ModalContent({ children }: Readonly<{ children: ReactNode }>) {
  return <div className="mt-4">{children}</div>;
}
