export default function createId(
  type: "task" | "status" | "project" | "workspace",
):
  | `task-${number}`
  | `status-${number}`
  | `project-${number}`
  | `workspace-${number}` {
  const crypto = globalThis.crypto;
  const array = new Uint32Array(1);
  crypto.getRandomValues(array);
  const randomNumber = array[0];
  return `${type}-${randomNumber}`;
}
