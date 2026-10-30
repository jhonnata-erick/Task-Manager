import type { ReactNode } from "react";

export function Content({ children }: { children: ReactNode }) {
  return <div className="mt-4">{children}</div>;
}
