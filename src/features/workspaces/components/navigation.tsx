import { ChartNoAxesGantt, Kanban, Library, ListTodo } from "lucide-react";
import AnchorButton from "../../../components/ui/button/navButton";

export default function WorkspaceNavigation() {
  return (
    <nav className="bg-surface px-2 py-1 border-b-2 border-border justify-between">
      <ul className="flex gap-2 items-center">
        <li>
          <AnchorButton className="" relative="path" to="overview">
            <Library
              className="bg-gray-500 rounded-sm p-0.5"
              size={18}
              color="white"
              strokeWidth={3}
            />
            <p className="">Overview</p>
          </AnchorButton>
        </li>
        <div className="">|</div>
        <li>
          <AnchorButton to="list">
            <ListTodo
              className="bg-green-700 rounded-sm p-0.5 "
              size={18}
              color="white"
              strokeWidth={3}
            />
            <p>List</p>
          </AnchorButton>
        </li>
        <li>
          <AnchorButton to="kanban">
            <Kanban
              className="bg-blue-600 rounded-sm p-0.5 "
              size={18}
              color="white"
              strokeWidth={4}
            />
            <p>Kanban</p>
          </AnchorButton>
        </li>
        <li>
          <AnchorButton to="graph">
            <ChartNoAxesGantt
              className="bg-red-500 rounded-sm p-0.5 "
              size={18}
              color="white"
              strokeWidth={4}
            />
            <p>Graph</p>
          </AnchorButton>
        </li>
        <div>|</div>
      </ul>
    </nav>
  );
}
