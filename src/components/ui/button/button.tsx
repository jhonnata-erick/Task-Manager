interface ButtonProperties extends React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> {
  children?: React.ReactNode;
}

function Button({
  children,
  className,
  ...properties
}: Readonly<ButtonProperties>) {
  return (
    <button className={className} {...properties}>
      {children}
    </button>
  );
}
export default Button;
