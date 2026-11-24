import { X } from "lucide-react";

interface ModalProperties {
  title: string;
  children: React.ReactNode;
  footer: React.ReactNode;
}

const Modal = ({ title, children, footer }: ModalProperties) => {
  return (
    <div className="w-full max-w-md rounded-lg bg-surface p-6 shadow-xl">
      <div className="flex items-center justify-between border-b pb-3">
        <h3 className="text-xl font-semibold text-text-primary">{title}</h3>
        <button className="text-text-primary hover:text-text-tertiary">
          <X />
        </button>
      </div>
      <div className="mt-4">{children}</div>
      <div className="mt-6 flex justify-end gap-3">{footer}</div>
    </div>
  );
};
export default Modal;
