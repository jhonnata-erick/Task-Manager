import { ErrorMsg } from "./error";
import { Label } from "./label";

interface FieldWrapperProps {
  id?: string | undefined;
  children?: React.ReactNode | undefined;
  label?: string | undefined;
  error?: string | undefined;
  className?: string | undefined;
  labelClass?: string | undefined;
  errorClass?: string | undefined;
}
export function FieldWrapper({
  id,
  children,
  label,
  error,
  className,
  labelClass,
  errorClass,
}: FieldWrapperProps) {
  return (
    <label className={className} htmlFor={id}>
      <Label htmlFor={id} className={labelClass} label={label} />
      {children}
      <ErrorMsg htmlFor={id} className={errorClass} errorMsg={error} />
    </label>
  );
}
