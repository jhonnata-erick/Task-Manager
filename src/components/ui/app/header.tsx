import { Search } from "lucide-react";
import useWorkspaceStore from "../../../store/useWorkspaceStore";

export default function Header() {
  const name = useWorkspaceStore((s) => s.name);
  return (
    <header className="p-2">
      <div className="flex justify-between items-center">
        <button className="px-1.5 py-1 gap-2 bg-gray-200 flex rounded-lg items-center">
          <div className="bg-red-400 rounded-lg px-2">J</div>
          {name}
        </button>
        <div
          tabIndex={0}
          className=" opacity-75 flex items-center justify-between max-w-xl px-4 py-1.5 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-1 focus:outline-gray-500 hover:opacity-100"
        >
          <div className="flex items-center flex-1 gap-2">
            <Search opacity={0.25} />
            <input
              type="text"
              placeholder="WIP search configs | workspaces | boards"
              className="w-full text-sm text-gray-700 bg-transparent outline-none placeholder-gray-400"
            />
          </div>
        </div>
        <div>WIP App Config</div>
      </div>
    </header>
  );
}
