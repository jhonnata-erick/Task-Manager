import { ErrorMsg } from "./error";
import { Label } from "./label";

interface FieldWrapperProperties {
  id?: string;
  children?: React.ReactNode;
  label?: string;
  error?: string;
  className?: string;
  labelClass?: string;
  errorClass?: string;
}
export function FieldWrapper({
  id,
  children,
  label,
  error,
  className,
  labelClass,
  errorClass,
}: Readonly<FieldWrapperProperties>) {
  return (
    <label className={className} htmlFor={id}>
      <Label htmlFor={id} className={labelClass} label={label} />
      {children}
      <ErrorMsg htmlFor={id} className={errorClass} errorMsg={error} />
    </label>
  );
}
