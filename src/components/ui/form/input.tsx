import { FieldWrapper } from "./FieldWrapper";

interface InputProperties extends React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> {
  inputClass?: string;
  labelClass?: string;
  errorClass?: string;
  label?: string;
  error?: string;
}

function InputText({
  id,
  className,
  inputClass,
  errorClass,
  labelClass,
  label,
  error,
  ...properties
}: Readonly<InputProperties>) {
  return (
    <FieldWrapper
      className={className}
      labelClass={labelClass}
      errorClass={errorClass}
      id={id}
      label={label}
      error={error}
    >
      <input id={id} className={inputClass} {...properties} />
    </FieldWrapper>
  );
}

export default InputText;
