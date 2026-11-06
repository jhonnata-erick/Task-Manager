import { useState, type SubmitEvent } from "react";
import Form from "../../../components/ui/form/form";
import InputText from "../../../components/ui/form/input";
import Modal from "../../../components/ui/modal/Modal";
import type { project, task } from "../../../types/workspace";
import useWorkspaceStore from "../../../store/useWorkspaceStore";
import createId from "../../../utils/idgen";
import { useNavigate } from "react-router";

interface FormData {
  workspace: {
    name: string;
  };
  goal: {
    title: string;
    newColumn: string;
    columns: string[];
  };
  tasks: task[];
}

function BuildWorkspaceForm() {
  const [formData, setFormData] = useState<FormData>({
    workspace: {
      name: "",
    },
    goal: {
      title: "",
      newColumn: "",
      columns: ["To-Do", "Doing", "Done"],
    },
    tasks: [],
  });
  const build = useWorkspaceStore((s) => s.application.buildWorkspace);
  const navigate = useNavigate();

  function handleSubmit(e: SubmitEvent) {
    console.log("handling Submit");
    e.preventDefault();
    const workspaceId = createId("workspace") as `workspace-${number}`;
    const project: project = {
      id: createId("project") as `project-${number}`,
      type: "project",
      workspaceId: workspaceId,
      title: formData.goal.title,
      tasks: [] as string[],
      columns: formData.goal.columns.map((name) => ({
        title: name,
        tasks: [] as string[],
        color: "gray",
      })),
    };
    const workspace = {
      id: workspaceId,
      name: formData.workspace.name,
      tasks: [] as task[],
      projects: [project] as project[],
    };
    build(workspace);
    navigate(`/${workspace.id}/overview`);
  }
  return (
    <Modal.Wrapper>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Modal.Header title="Build you Workspace" />
        <Modal.Content>
          <InputText
            className="flex flex-col gap-1 mb-2"
            inputClass="border border-gray-3 rounded-md"
            id="workspace-name"
            label="Your workspace name"
            placeholder="Workspace Name"
            onChange={(e) =>
              setFormData({
                ...formData,
                workspace: { ...formData.workspace, name: e.target.value },
              })
            }
          />
          <hr />
          <h2>Set your goal</h2>
          <InputText
            className="flex flex-col gap-1"
            inputClass="border border-gray-3 rounded-md"
            id="goal-name"
            label="Tell us your goal or project you will work on"
            placeholder="Project name"
            onChange={(e) =>
              setFormData({
                ...formData,
                goal: { ...formData.goal, title: e.target.value },
              })
            }
          />
          <InputText
            className="flex flex-col gap-1"
            inputClass="border border-gray-3 rounded-md"
            id="status-name"
            label="Name steps to finish your goal"
            placeholder="Columns"
            onChange={(e) =>
              setFormData({
                ...formData,
                goal: { ...formData.goal, newColumn: e.target.value },
              })
            }
          />
          <button
            type="button"
            onClick={() => {
              setFormData({
                ...formData,
                goal: {
                  ...formData.goal,
                  newColumn: "",
                  columns: [...formData.goal.columns, formData.goal.newColumn],
                },
              });
            }}
          >
            Adiciona
          </button>
          <div>
            {formData.goal.columns.map((column) => (
              <div key={column}>
                <p>{column}</p>
              </div>
            ))}
          </div>
        </Modal.Content>
        <Modal.Footer>
          <button className="border p-1 rounded-md bg-gray-1">Submit</button>
        </Modal.Footer>
      </Form>
    </Modal.Wrapper>
  );
}

export default BuildWorkspaceForm;
