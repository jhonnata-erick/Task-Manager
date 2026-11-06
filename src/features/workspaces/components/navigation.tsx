import { ChartNoAxesGantt, Kanban, Library, ListTodo } from "lucide-react";
import AnchorBtn from "../../../components/ui/button/navButton";

export default function WorkspaceNavigation() {
  return (
    <nav className="bg-main px-2 py-1 border-b-2 border-gray-1 justify-between">
      <ul className="flex gap-2 items-center">
        <li>
          <AnchorBtn className="" relative="route" to="overview">
            <Library
              className="bg-gray-500 rounded-sm p-0.5"
              size={18}
              color="white"
              strokeWidth={3}
            />
            <p className="">Overview</p>
          </AnchorBtn>
        </li>
        <div className="">|</div>
        <li>
          <AnchorBtn to="list">
            <ListTodo
              className="bg-green-700 rounded-sm p-0.5 "
              size={18}
              color="white"
              strokeWidth={3}
            />
            <p>List</p>
          </AnchorBtn>
        </li>
        <li>
          <AnchorBtn to="kanban">
            <Kanban
              className="bg-blue-600 rounded-sm p-0.5 "
              size={18}
              color="white"
              strokeWidth={4}
            />
            <p>Kanban</p>
          </AnchorBtn>
        </li>
        <li>
          <AnchorBtn to="graph">
            <ChartNoAxesGantt
              className="bg-red-500 rounded-sm p-0.5 "
              size={18}
              color="white"
              strokeWidth={4}
            />
            <p>Graph</p>
          </AnchorBtn>
        </li>
        <div>|</div>
      </ul>
    </nav>
  );
}
