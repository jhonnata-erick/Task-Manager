import { create } from "zustand";
import type {
  createTaskArgs,
  WorkspaceStoreInterface,
} from "../types/workspace";

const useWorkspaceStore = create<WorkspaceStoreInterface>((set, get) => ({
  name: "",
  tasks: [],
  boards: [],
  workspaces: [],
  createTask: ({
    title,
    status,
    boardId,
    priority,
    description,
    checklist,
  }: createTaskArgs) => {
    const task = {
      id: `task-${Date.now()}${Math.floor(1000 + Math.random() * 9000)}`,
      title: title,
      status: status,
      boardId: boardId,
      createdAt: new Date(),
      priority: priority,
      description: description || "",
      checklist: checklist || [],
    };
    const tasks = get().tasks;
    set({ tasks: [...tasks, task] });
  },
  createBoard: (title: string, collumns) => {
    const board = {
      id: `board-${Date.now()}${Math.floor(1000 + Math.random() * 9000)}`,
      title: title,
      tasks: [],
      columns: collumns.map((name) => ({
        name: name,
        tasks: [],
      })),
    };
    const boards = get().boards;
    set({ boards: [...boards, board] });
  },
  setAppData: async () => {},
  updateDB: () => {},
}));

export default useWorkspaceStore;
