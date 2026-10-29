import { useReducer, useState } from "react";
import Modal from "../../components/ui/Modal";
import Form from "../../components/ui/form/Form";
import InputText from "../../components/ui/form/Input";
import Button from "../../components/ui/form/button";
import type { columnsName } from "../../types/workspace";
import { useNavigate } from "react-router";
import useWorkspaceStore from "../../store/useWorkspaceStore";
//import useWorkspaceStore from "../../store/useWorkspaceStore";

const reducer = (step: number, action: "next" | "previous") => {
  switch (action) {
    case "next": {
      return step === 3 ? step : step + 1;
    }
    case "previous": {
      return step === 1 ? step : step - 1;
    }
  }
};
interface FormData {
  workspace: {
    name: string;
  };
  board?: {
    title?: string;
    columns?: columnsName[];
  };
}
function CreateWorkspace() {
  const [formData, setFormData] = useState<FormData>({
    workspace: {
      name: "",
    },
  });
  console.log(formData);
  const [step, setStep] = useReducer(reducer, 1);
  const navigate = useNavigate();

  const createWorkspace = useWorkspaceStore((state) => state.createWorkspace);
  const workspaceId = useWorkspaceStore((state) => state.id);
  return (
    <Modal.Container>
      <Modal.Header title="Create your workspace" />
      <Modal.Content>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            createWorkspace(formData.workspace.name);
            console.log("submit");
            navigate(`/workspace/${workspaceId}`);
          }}
        >
          {step === 1 && (
            <InputText
              value={formData.workspace.name}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  workspace: {
                    ...formData.workspace,
                    name: e.target.value.trim(),
                  },
                });
              }}
              id="WSname"
              label="Workspace name"
              required
            />
          )}
          {step === 2 && (
            <InputText
              value={formData.board?.title}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  board: {
                    ...formData.board,
                    title: e.target.value.trim(),
                  },
                });
              }}
              id="BoardName"
              label="Board name"
            />
          )}
          {step === 3 && <div>Finishing step 3</div>}
        </Form>
      </Modal.Content>
      <Modal.Footer>
        {step > 1 ? (
          <Button type="default" onClick={() => setStep("previous")}>
            Back
          </Button>
        ) : null}
        {step < 3 ? (
          <Button type="next" onClick={() => setStep("next")}>
            Next
          </Button>
        ) : null}
        {step === 3 ? <Button type="submit">Create</Button> : null}
      </Modal.Footer>
    </Modal.Container>
  );
}

export default CreateWorkspace;
