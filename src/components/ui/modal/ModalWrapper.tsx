import type { ReactNode } from "react";

export function ModalWrapper({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
      {children}
    </div>
  );
}
