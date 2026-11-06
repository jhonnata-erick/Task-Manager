import { Plus } from "lucide-react";
import type { column, task } from "../../types/workspace";
import KanbanColumn from "./KanbanColumn";

interface KanbanBoardProps {
  tasks: task[];
  columns: column[];
}

const KanbanBoard = ({ tasks, columns }: KanbanBoardProps) => {
  return (
    <div className="flex flex-col flex-1">
      <div className="flex items-center p-2 justify-between">
        <div>BOARD NAME</div>
        <div className="flex gap-2">
          <button className="px-1 py-0.5 flex items-center gap-0.5 bg-gray-100 rounded-lg border border-gray-300">
            <p>Add new column</p>
            <Plus size={18} />
          </button>
          <button className="px-1 py-0.5 flex items-center gap-0.5 bg-teal-400 rounded-lg">
            <p>Add new task</p>
            <Plus size={18} />
          </button>
        </div>
      </div>
      <div className="flex flex-1 gap-3 p-4 overflow-x-auto scrollbar-thin">
        {columns.map((column) => {
          const columnTasks = column.tasks
            .map((task) => {
              return tasks.find((t) => t.id === task);
            })
            .filter((t) => t !== undefined);
          return (
            <KanbanColumn
              key={column.title}
              columnName={column.title}
              tasks={columnTasks}
            />
          );
        })}
      </div>
    </div>
  );
};
export default KanbanBoard;
