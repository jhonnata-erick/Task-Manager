import { useEffect, useState } from "react";
import type { column } from "../../../../types/workspace";

interface WorkspaceKanbanTabProps {
  cols?: column[] | undefined;
}

function WorkspaceKanbanTab({ cols }: WorkspaceKanbanTabProps) {
  const [columns, setColumns] = useState();
  useEffect(() => {}, []);
  return (
    <section>
      <div>
        <button>Add Task</button>
      </div>
      <div></div>
    </section>
  );
}
export default WorkspaceKanbanTab;
