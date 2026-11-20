export function isWorkspaceIdValid(id: string | undefined) {
  const regex = /^workspace-(\d+)$/;
  const isTest = regex.test(id || "");
  return isTest;
}
