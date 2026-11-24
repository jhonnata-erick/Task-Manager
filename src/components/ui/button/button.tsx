interface ButtonProperties extends React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> {
  children?: React.ReactNode;
  variant?: ButtonVariant;
}
type ButtonVariant = "primary" | "secundary" | "empty";

function Button({
  children,
  className = "",
  variant = "empty",
  ...properties
}: Readonly<ButtonProperties>) {
  const variantClasses: Record<ButtonVariant, string> = {
    primary:
      "py-1.5 px-3 bg-primary text-primary-subtle hover:bg-primary-hover ease-in-out duration-100 rounded-md font-medium",
    secundary:
      "py-1.5 px-3 bg-surface text-text-tertiary hover:bg-surface-secondary ease-in-out duration-100 border border-border rounded-md font-medium",
    empty: "",
  };
  return (
    <button
      className={`${variantClasses[variant]} ${className}`}
      {...properties}
    >
      {children}
    </button>
  );
}
export default Button;
