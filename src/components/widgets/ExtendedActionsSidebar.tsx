import { PanelLeftClose, Plus } from "lucide-react";

export const ExtendedActionsSidebar = () => {
  return null;
  return (
    <div className="bg-surface p-2 border border-border rounded-md w-60 mr-2">
      <div className="flex justify-between items-center">
        <span>Home</span>
        <div className="flex gap-1">
          <button className="text-text-tertiary">
            <PanelLeftClose size={24} strokeWidth={1.5} />
          </button>
          <button className="bg-primary text-text-inverse pr-2 pl-1 py-1 rounded-md flex items-center gap-0.5">
            <Plus size={20} strokeWidth={2.5} />
            <span>Create</span>
          </button>
        </div>
      </div>
    </div>
  );
};
