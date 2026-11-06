interface FormProperties extends React.DetailedHTMLProps<
  React.FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
> {
  children?: React.ReactNode;
}

function Form({
  children,
  onSubmit,
  className,
  key,
  ref,
  ...properties
}: Readonly<FormProperties>) {
  return (
    <form
      className={className}
      onSubmit={onSubmit}
      key={key}
      ref={ref}
      {...properties}
    >
      {children}
    </form>
  );
}
export default Form;
