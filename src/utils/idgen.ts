export default function createId(
  type: "task" | "status" | "project" | "workspace",
):
  | `task-${number}`
  | `status-${number}`
  | `project-${number}`
  | `workspace-${number}` {
  return `${type}-${Date.now() + Math.floor(1000 + Math.random() * 9000)}`;
}
