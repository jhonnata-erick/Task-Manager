export default function createId(
  type: "task" | "project" | "workspace",
): `task-${number}` | `project-${number}` | `workspace-${number}` {
  return `${type}-${Date.now() + Math.floor(1000 + Math.random() * 9000)}`;
}
