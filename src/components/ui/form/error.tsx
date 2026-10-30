interface ErrorProps extends React.DetailedHTMLProps<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
> {
  errorMsg?: string | undefined;
  className?: string | undefined;
}

export function ErrorMsg({ className, errorMsg, ...props }: ErrorProps) {
  if (!errorMsg) return null;
  return (
    <label className={className} {...props}>
      {errorMsg}
    </label>
  );
}
