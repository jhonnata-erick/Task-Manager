interface FormProps extends React.DetailedHTMLProps<
  React.FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
> {
  children?: React.ReactNode | undefined;
}

function Form({
  children,
  onSubmit,
  className,
  key,
  ref,
  ...props
}: FormProps) {
  return (
    <form
      className={className}
      onSubmit={onSubmit}
      key={key}
      ref={ref}
      {...props}
    >
      {children}
    </form>
  );
}
export default Form;
