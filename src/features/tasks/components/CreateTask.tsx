import Button from "../../../components/ui/button/button";
import { Form } from "../../../components/ui/form/form";
import { FormProvider } from "../../../components/ui/form/formProvider";
import { TextArea } from "../../../components/ui/form/textarea";
import Modal from "../../../components/ui/modal/Modal";

const CreateTask = () => {
  return (
    <Modal
      title="Create Task"
      footer={<Button variant="primary">Create Task</Button>}
    >
      <FormProvider>
        <Form
          onSubmit={(submitEvent) => {
            submitEvent.preventDefault();
          }}
        >
          <div className="flex flex-col gap-2">
            <TextArea
              name="title"
              className="text-xl"
              required
              placeholder="Task Name"
              validateOnBlur
              fieldValidation={(value) => {
                const valid = value === "jota";
                if (!valid) {
                  return "Not equal to Jota";
                }
                return valid;
              }}
            />
            <TextArea
              name="description"
              placeholder="Add a description..."
              rows={2}
            />
          </div>
        </Form>
      </FormProvider>
    </Modal>
  );
};

export default CreateTask;
