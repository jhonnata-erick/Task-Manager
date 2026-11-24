import { createContext, use, useRef, type RefObject } from "react";

interface FormContextInterface {
  formDataRef: RefObject<FormData>;
  formRef: RefObject<HTMLFormElement | null>;
  setFormData: (update: FormData | ((previous: FormData) => FormData)) => void;
}

export type FormData = Record<string, FieldProperties>;

export interface FieldProperties {
  label?: string;
  value: string | number | readonly string[] | undefined;
  fieldRef: RefObject<HTMLTextAreaElement | null>;
  hasFocused: boolean;
  focused: boolean;
  error: boolean;
  errorMessage: string | undefined;
  validation?: (value?: string | number | readonly string[]) => true | string;
}

const FormContext = createContext<FormContextInterface | null>(null);

export const useFormContext = () => {
  const context = use(FormContext);
  if (!context) {
    throw new Error("Context not exists");
  }
  return context;
};

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const formDataReference = useRef<FormData>({});
  const setFormData = (
    update: FormData | ((previous: FormData) => FormData),
  ) => {
    formDataReference.current =
      typeof update === "function" ? update(formDataReference.current) : update;
  };

  const formReference = useRef<HTMLFormElement | null>(null);

  return (
    <FormContext
      value={{
        formDataRef: formDataReference,
        formRef: formReference,
        setFormData: setFormData,
      }}
    >
      {children}
    </FormContext>
  );
};
