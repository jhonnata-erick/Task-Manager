export default function createId(
  type: "task" | "board" | "workspace",
): `task-${number}` | `board-${number}` | `workspace-${number}` {
  return `${type}-${Date.now() + Math.floor(1000 + Math.random() * 9000)}`;
}
