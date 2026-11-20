import { Calendar, ChevronDown, Flag, ListTodo } from "lucide-react";
import Modal from "../../../components/ui/modal/Modal";
import { useReducer } from "react";
import useWorkspaceStore from "../../../store/useWorkspaceStore";
import type { Priority } from "../../../types/workspace";
import { OverlayProvider } from "../../../components/ui/overlay/OverlayProvider";
import { OverlayTrigger } from "../../../components/ui/overlay/OverlayTrigger";
import OverlayContent from "../../../components/ui/overlay/OverlayContent";

interface FormDataInterface {
  taskName: {
    text: string;
    focused?: boolean;
    hasFocused?: boolean;
    error?: string;
  };
  description: {
    text: string;
    focused?: boolean;
    hasFocused?: boolean;
    error?: string;
  };
}

const initialFormData: FormDataInterface = {
  taskName: {
    text: "",
  },
  description: {
    text: "",
  },
};
interface Actions {
  type: "SET_FIELD" | "SET_FOCUS" | "SET_FOCUSED";
  field: "taskName" | "description";
  payload: string | boolean;
}

const formDataReducer = (formData: FormDataInterface, action: Actions) => {
  switch (action.type) {
    case "SET_FIELD": {
      return {
        ...formData,
        [action.field]: { ...formData[action.field], text: action.payload },
      };
    }
    case "SET_FOCUS": {
      return {
        ...formData,
        [action.field]: { ...formData[action.field], focused: action.payload },
      };
    }
    case "SET_FOCUSED": {
      return {
        ...formData,
        [action.field]: {
          ...formData[action.field],
          hasFocused: action.payload,
        },
      };
    }
  }
};

export const CreateTaskForm = () => {
  const [formData, setFormData] = useReducer(formDataReducer, initialFormData);
  const priorityList = useWorkspaceStore((s) => s.priorities);
  const fieldFocusClass = {
    taskName: formData.taskName.focused ? "bg-gray-100" : "",
    description: formData.description.focused ? "bg-gray-100" : "",
  };
  return (
    <>
      <Modal.Wrapper>
        <Modal.Header title="Create a new Task" />
        <Modal.Content>
          <form
            onSubmit={(event) => {
              event.preventDefault();
            }}
            className="flex flex-col gap-5 "
          >
            <div className="flex flex-col gap-2">
              <label
                id="taskNameContainer"
                htmlFor="taskName"
                className={`px-1.5 py-2 hover:bg-gray-100 ease-in-out duration-100 ${fieldFocusClass.taskName}`}
              >
                <input
                  onFocus={() => {
                    setFormData({
                      type: "SET_FOCUS",
                      field: "taskName",
                      payload: true,
                    });
                  }}
                  onBlur={() => {
                    setFormData({
                      type: "SET_FOCUSED",
                      field: "taskName",
                      payload: true,
                    });
                    setFormData({
                      type: "SET_FOCUS",
                      field: "taskName",
                      payload: false,
                    });
                  }}
                  onChange={(event) => {
                    setFormData({
                      type: "SET_FIELD",
                      field: "taskName",
                      payload: event.target.value,
                    });
                    setFormData({
                      type: "SET_FOCUSED",
                      field: "taskName",
                      payload: false,
                    });
                  }}
                  id="taskName"
                  name="taskName"
                  className="w-full outline-0 text-xl"
                  type="text"
                  placeholder="Task Name"
                  value={formData.taskName.text}
                />
              </label>
              <label
                htmlFor="description"
                className={`px-1.5 py-2 hover:bg-gray-100 ease-in-out duration-100 ${fieldFocusClass.description}`}
              >
                <textarea
                  onFocus={() => {
                    setFormData({
                      type: "SET_FOCUS",
                      field: "description",
                      payload: true,
                    });
                  }}
                  onBlur={() => {
                    setFormData({
                      type: "SET_FOCUSED",
                      field: "description",
                      payload: true,
                    });
                    setFormData({
                      type: "SET_FOCUS",
                      field: "description",
                      payload: false,
                    });
                  }}
                  onChange={(event) => {
                    setFormData({
                      type: "SET_FIELD",
                      field: "description",
                      payload: event.target.value,
                    });
                    setFormData({
                      type: "SET_FOCUSED",
                      field: "description",
                      payload: false,
                    });
                  }}
                  id="description"
                  name="description"
                  className="outline-0 w-full h-full resize-none text-md"
                  placeholder="Add description"
                />
              </label>
            </div>
            <div className="flex justify-between">
              <div className="grid gap-1 relative">
                <p>Project</p>
                <OverlayProvider>
                  <OverlayTrigger className=" font-medium ease-in-out duration-100 text-gray-500 border border-gray-300 flex gap-1 rounded-lg p-1 text-sm items-center hover:bg-gray-100">
                    <ListTodo size={18} />
                    <p>Project</p>
                    <ChevronDown size={18} />
                  </OverlayTrigger>
                </OverlayProvider>
              </div>
              <div className="grid gap-1 relative">
                <p>Priority</p>
                <OverlayProvider>
                  <OverlayTrigger className="font-medium ease-in-out duration-100 text-gray-500 border border-gray-300 flex gap-1 rounded-lg p-1 text-sm items-center  hover:bg-gray-100">
                    <Flag size={18} />
                    <p>High</p>
                    <ChevronDown size={18} />
                  </OverlayTrigger>
                  <OverlayContent id="priority-list" preventsClickOutside>
                    {priorityList[0] &&
                      priorityList.map((level: Readonly<Priority>) => {
                        return (
                          <div
                            key={level.title}
                            className="flex items-center  gap-2"
                          >
                            <input
                              name={"priorities"}
                              id={level.title}
                              type="radio"
                              value={level.title}
                            />
                            <label htmlFor={level.title}>{level.title}</label>
                          </div>
                        );
                      })}
                  </OverlayContent>
                </OverlayProvider>
              </div>
              <div className="grid gap-1">
                <label htmlFor="">Due date</label>
                <button
                  type="button"
                  className="font-medium ease-in-out duration-100 text-gray-500 border border-gray-300 flex gap-1 rounded-lg p-1 text-sm items-center hover:bg-gray-100"
                >
                  <Calendar size={18} />
                  <p>Select</p>
                  <ChevronDown size={18} />
                </button>
              </div>
            </div>
            <Modal.Footer>
              <button
                type="submit"
                className="p-2 bg-teal-500 hover:bg-teal-600 ease-in-out duration-100 rounded-lg text-white font-medium"
              >
                Create Task
              </button>
            </Modal.Footer>
          </form>
        </Modal.Content>
      </Modal.Wrapper>
    </>
  );
};
