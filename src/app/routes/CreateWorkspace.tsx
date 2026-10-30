import { useReducer, useState } from "react";
import Modal from "../../components/ui/modal/Modal";
import Form from "../../components/ui/form/form";
import InputText from "../../components/ui/form/input";
import Button from "../../components/ui/button/button";
import type { columnsName } from "../../types/workspace";
import useWorkspaceStore from "../../store/useWorkspaceStore";
import createId from "../../utils/idgen";
import { useNavigate } from "react-router";
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
  const [step, setStep] = useReducer(reducer, 1);

  const buildWorkspace = useWorkspaceStore((s) => s.application.buildWorkspace);
  const setWorkspaceData = useWorkspaceStore(
    (s) => s.application.setWorkspaceData,
  );
  const navigate = useNavigate();
  return (
    <Modal.Wrapper>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          const id = createId("workspace") as `workspace-${number}`;
          buildWorkspace({
            id: id,
            name: formData.workspace.name,
            type: "workspace",
            boards: [],
            tasks: [],
          });
          console.log("submit");
          setWorkspaceData(id);
          navigate(`/workspace/${id}`);
        }}
      >
        <Modal.Header title="Create your workspace" />

        <Modal.Content>
          {step === 1 && (
            <InputText
              className=""
              labelClass=""
              errorClass=""
              value={formData.workspace.name}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  workspace: {
                    ...formData.workspace,
                    name: e.target.value,
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
          {step === 3 && <div>Finishing step 3</div>}{" "}
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
      </Form>
    </Modal.Wrapper>
  );
}
export default CreateWorkspace;
