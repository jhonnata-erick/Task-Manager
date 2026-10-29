import { type ReactNode } from "react";

const Modal = {
  Container: Container,
  Header: Header,
  Content: Content,
  Footer: Footer,
};
function Container({ children }: { children: ReactNode }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
        {children}
      </div>
    </div>
  );
}
function Header({ title, canClose }: { title: string; canClose?: boolean }) {
  return (
    <div className="flex items-center justify-between border-b pb-3">
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      {canClose && (
        <button className="text-gray-400 hover:text-gray-600">x</button>
      )}
    </div>
  );
}
function Content({ children }: { children: ReactNode }) {
  return <div className="mt-4">{children}</div>;
}
function Footer({ children }: { children: ReactNode }) {
  return <div className="mt-6 flex justify-end gap-3">{children}</div>;
}
export default Modal;
