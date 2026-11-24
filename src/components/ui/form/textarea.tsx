import {
  useRef,
  useState,
  type DetailedHTMLProps,
  type TextareaHTMLAttributes,
} from "react";
import { useFormContext, type FieldProperties } from "./formProvider";

interface TextAreaProperties extends Omit<
  DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >,
  "onChange" | "onFocus" | "onBlur" | "style" | "ref"
> {
  name: string;
  label?: string;
  validateOnBlur?: boolean;
  fieldValidation?: (
    value?: string | number | readonly string[],
  ) => true | string;
  resize?: boolean;
}
export function TextArea({
  id,
  label,
  name,
  resize,
  rows = 1,
  className = "",
  validateOnBlur = false,
  fieldValidation,
  ...properties
}: Readonly<TextAreaProperties>) {
  const { formDataRef, setFormData } = useFormContext();
  const formData = formDataRef.current;
  const textareaReference = useRef<HTMLTextAreaElement>(null);
  const initialValue = {
    label: label,
    value: undefined,
    fieldRef: textareaReference,
    hasFocused: false,
    focused: false,
    error: false,
    errorMessage: undefined,
    validation: fieldValidation,
  };
  if (!formData[name]) {
    setFormData({ ...formData, [name]: initialValue });
  }
  const [fieldData, setFieldData] = useState<FieldProperties>(
    formData[name] || initialValue,
  );
  const setFieldtoFormData: (
    update: FieldProperties | ((previous: FieldProperties) => FieldProperties),
  ) => void = (update) => {
    if (typeof update === "function") {
      setFieldData((previous) => {
        setFormData((last) => {
          return { ...last, [name]: update(previous) };
        });
        return update(previous);
      });
    } else {
      setFieldData(update);
      setFormData((previous) => ({ ...previous, [name]: update }));
    }
  };
  return (
    <div
      style={{ display: "grid", gap: 4 }}
      className={`${fieldData.error ? "text-danger" : ""}`}
    >
      {label && <label htmlFor={id || name + "Id"}>{label}</label>}
      <div
        style={{ display: "flex", padding: 4, boxSizing: "border-box" }}
        className={`   ${fieldData.error ? "outline outline-danger" : ""} ${fieldData.focused ? "outline outline-border" : "hover:bg-surface-tertiary"} `}
      >
        <textarea
          {...properties}
          ref={textareaReference}
          className={`focus:outline-0 flex-1 ${className}`}
          onChange={(changeEvent) => {
            setFieldtoFormData((previous) => ({
              ...previous,
              value: changeEvent.target.value,
            }));
          }}
          onFocus={() => {
            setFieldtoFormData((previous) => ({
              ...previous,
              focused: true,
              hasFocused: false,
              error: false,
              errorMessage: undefined,
            }));
          }}
          onBlur={(blurEvent) => {
            if (!validateOnBlur) {
              setFieldtoFormData((previous) => ({
                ...previous,
                focused: false,
                hasFocused: true,
              }));
              return;
            }
            if (fieldValidation) {
              const isValid = fieldValidation(blurEvent.target.value);
              if (isValid !== true) {
                setFieldtoFormData((previous) => ({
                  ...previous,
                  focused: false,
                  hasFocused: true,
                  error: true,
                  errorMessage: isValid,
                }));
              }
            }
          }}
          name={name}
          style={{
            resize: resize ? "both" : "none",
            boxSizing: "border-box",
          }}
          id={id || name + "Id"}
          rows={rows}
        />
      </div>
      {fieldData.error && (
        <label className="text-sm" htmlFor={id || name + "Id"}>
          {fieldData.errorMessage}
        </label>
      )}
    </div>
  );
}
