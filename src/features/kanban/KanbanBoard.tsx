import { Plus } from "lucide-react";
import type { Status, Task } from "../../types/workspace";
import KanbanColumn from "./KanbanColumn";
import { useEffect } from "react";

interface KanbanBoardProperties {
  tasks: Task[];
  columns: Status[];
}

const KanbanBoard = ({ tasks, columns }: KanbanBoardProperties) => {
  useEffect(() => {
    const container: HTMLDivElement =
      document.querySelector("#scroll-on-drag")!;
    let isDown = false;
    const handleClickUp = () => {
      if (!isDown) return;
      isDown = false;
    };
    const handleClickDown = (e: MouseEvent) => {
      e.preventDefault();
      isDown = true;
    };
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const walkLeft = e.movementX < 0 ? Math.abs(e.movementX) : -e.movementX;
      container.scrollBy({ left: walkLeft });
    };
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mousedown", handleClickDown);
    container.addEventListener("mouseup", handleClickUp);
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mousedown", handleClickDown);
      container.removeEventListener("mouseup", handleClickUp);
    };
  }, []);
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
      <div
        id="scroll-on-drag"
        className="flex flex-1 gap-3 p-4 overflow-x-auto scrollbar-thin"
      >
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
