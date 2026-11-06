interface ErrorProperties extends React.DetailedHTMLProps<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
> {
  errorMsg?: string;
  className?: string;
}

export function ErrorMsg({
  className,
  errorMsg,
  ...properties
}: Readonly<ErrorProperties>) {
  if (!errorMsg) return null;
  return (
    <label className={className} {...properties}>
      {errorMsg}
    </label>
  );
}
