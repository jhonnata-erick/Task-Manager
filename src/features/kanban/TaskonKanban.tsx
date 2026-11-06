import { Calendar, Flag } from "lucide-react";
import type { Task } from "../../types/workspace";

interface TaskonKanbanProperties {
  task: Task;
}

const TaskonKanban = ({ task }: TaskonKanbanProperties) => {
  return (
    <div className="grid gap-2 p-3 bg-main rounded-xl border border-gray-3">
      <p>{task.title}</p>
      <p>{task.description || ""}</p>
      <div className="flex gap-2 items-center">
        <Calendar size={18} />
        <p>{task.dueDate?.split("T", 1) || "-"}</p>
      </div>
      <div className="flex gap-2 items-center">
        <Flag size={18} />
        <p>{task.priority || "-"}</p>
      </div>
    </div>
  );
};
export default TaskonKanban;
