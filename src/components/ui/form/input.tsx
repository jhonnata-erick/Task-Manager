import { FieldWrapper } from "./field-wrapper";

interface InputProps extends React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> {
  inputClass?: string | undefined;
  labelClass?: string | undefined;
  errorClass?: string | undefined;
  label?: string | undefined;
  error?: string | undefined;
}

function InputText({
  id,
  className,
  inputClass,
  errorClass,
  labelClass,
  label,
  error,
  ...props
}: InputProps) {
  return (
    <FieldWrapper
      className={className}
      labelClass={labelClass}
      errorClass={errorClass}
      id={id}
      label={label}
      error={error}
    >
      <input id={id} className={inputClass} {...props} />
    </FieldWrapper>
  );
}

export default InputText;
