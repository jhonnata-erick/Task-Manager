import { Circle, Plus } from "lucide-react";
import type { task } from "../../types/workspace";
import TaskonKanban from "./TaskonKanban";

interface KanbanColumnProps {
  columnName: string;
  tasks: task[];
}

const KanbanColumn = ({ columnName, tasks }: KanbanColumnProps) => {
  return (
    <div className="shrink-0 p-2 bg-gray-1 rounded-xl w-80 h-fit">
      <div className="grid gap-4">
        <div className="flex gap-3 items-center">
          <div className="flex gap-1 px-1 bg-gray-3 items-center rounded-lg">
            <Circle size={18} />
            <p>{columnName}</p>
          </div>
          <p className="text-gray-500 font-semibold">{tasks.length}</p>
        </div>
        <div className="grid gap-3">
          {tasks.map((task) => (
            <TaskonKanban key={task.id} task={task} />
          ))}
          <div className="flex gap-2 items-center">
            <Plus size={18} />
            <p>Add a new task</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default KanbanColumn;
