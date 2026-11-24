import type { DetailedHTMLProps, FormHTMLAttributes, SubmitEvent } from "react";
import { useFormContext, type FieldProperties } from "./formProvider";

interface FormProperties extends Omit<
  DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>,
  "onSubmit"
> {
  children: React.ReactNode;
  onSubmit?: (
    event: SubmitEvent<HTMLFormElement>,
    formData: Record<string, FieldProperties>,
    validInputs: Record<
      string,
      | string
      | ((value?: string | number | readonly string[]) => string | true)
      | undefined
    >,
  ) => void;
  executeValidation?: boolean;
}
export class InputError extends Error {
  field: string;
  message: string;
  constructor(field: string, message: string) {
    super();
    this.field = field;
    this.message = message;
  }
}
export const Form = ({
  children,
  onSubmit,
  executeValidation,
  ...properties
}: Readonly<FormProperties>) => {
  const { formRef, formDataRef, setFormData } = useFormContext();
  const formData = formDataRef.current;
  return (
    <form
      {...properties}
      onSubmit={(submitEvent) => {
        if (onSubmit) {
          const keyParsFormData = Object.entries(formData);
          const validations = keyParsFormData.map((each) => {
            const key = each[0];
            const object = each[1];
            if (!executeValidation) {
              return [key, object.validation];
            }
            const validation = object.validation
              ? object.validation(object.value)
              : undefined;

            if (typeof validation === "string") {
              setFormData({
                ...formData,
                [key]: {
                  ...formData[key],
                  error: true,
                  errorMessage: validation,
                },
              });
            }
            return [key, validation];
          });
          const validationsObject: Record<
            string,
            | string
            | ((value?: string | number | readonly string[]) => string | true)
            | undefined
          > = Object.fromEntries(validations);
          onSubmit(submitEvent, formData, validationsObject);
        }
      }}
      ref={formRef}
    >
      {children}
    </form>
  );
};
