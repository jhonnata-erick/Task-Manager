import type { ReactNode } from "react";

function Button({
  children,
  type,
  onClick,
  formAction,
  classname,
}: {
  children?: ReactNode;
  type?: "submit" | "reset" | "default" | "next";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  formAction?: string | ((formData: FormData) => void | Promise<void>);
  classname?: string;
}) {
  const buttonType = type === "submit" || type === "reset" ? type : "button";
  const className = () => {
    if (classname) return classname;
    if (type === "submit")
      return "px-5 py-2 text-sm font-medium text-white bg-green-500 hover:bg-indigo-400 rounded-lg shadow-sm transition duration-200 active:scale-95";
    if (type === "next")
      return "px-4 py-2 text-sm font-medium text-green-white bg-green-600 hover:bg-green-500 rounded-lg transition duration-200 active:scale-95";
    return "px-4 py-2 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition duration-200 active:scale-95";
  };
  return (
    <button
      className={className()}
      type={buttonType}
      onClick={onClick}
      formAction={formAction}
    >
      {children}
    </button>
  );
}
export default Button;
