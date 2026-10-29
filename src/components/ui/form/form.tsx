import type { ReactNode } from "react";

function Form({
  children,
  onSubmit,
}: {
  children?: ReactNode;
  onSubmit?: React.SubmitEventHandler<HTMLFormElement>;
}) {
  return <form onSubmit={onSubmit}>{children}</form>;
}
export default Form;
