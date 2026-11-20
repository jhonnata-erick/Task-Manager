interface ErrorProperties extends React.DetailedHTMLProps<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
> {
  errorMessage?: string;
  className?: string;
}

export function ErrorMessage({
  className,
  errorMessage,
  ...properties
}: Readonly<ErrorProperties>) {
  if (!errorMessage) return null;
  return (
    <label className={className} {...properties}>
      {errorMessage}
    </label>
  );
}
