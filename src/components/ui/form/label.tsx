interface LabelProps extends React.DetailedHTMLProps<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
> {
  className?: string | undefined;
  label?: string | undefined;
}

export function Label({ className, label, ...props }: LabelProps) {
  return (
    <label className={className} {...props}>
      {label}
    </label>
  );
}
