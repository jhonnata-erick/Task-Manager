function InputText({
  value,
  name,
  id,
  required,
  label,
  onChange,
  error,
}: {
  value?: string | number | readonly string[];
  name?: string;
  id?: string;
  required?: boolean;
  label?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement, HTMLInputElement>;
  error?: string;
}) {
  return (
    <div className="input-container">
      <Label id={id} label={label} />
      <input
        value={value}
        required={required}
        name={name}
        id={
          id ||
          label?.trim() ||
          String(Date.now() + Math.floor(Math.random() * 1000))
        }
        type={"text"}
        onChange={onChange}
      />
      <ErrorMsg errorMsg={error} />
    </div>
  );
}
const Label = ({
  name,
  id,
  label,
}: {
  name?: string;
  id?: string;
  label: string | undefined;
}) => {
  if (!label) return null;
  return <label htmlFor={id || name || "1"}>{label}</label>;
};
const ErrorMsg = ({ errorMsg }: { errorMsg?: string }) => {
  if (!errorMsg) return null;
  return <span>{errorMsg}</span>;
};
export default InputText;
