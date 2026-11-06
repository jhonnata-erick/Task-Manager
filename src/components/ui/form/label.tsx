interface LabelProperties extends React.DetailedHTMLProps<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
> {
  className?: string;
  label?: string;
}

export function Label({
  className,
  label,
  ...properties
}: Readonly<LabelProperties>) {
  return (
    <label className={className} {...properties}>
      {label}
    </label>
  );
}
