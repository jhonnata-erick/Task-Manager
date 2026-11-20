export function isProjectIdValid(id: string | undefined) {
  const regex = /^project-(\d+)$/;
  const isTest = regex.test(id || "");
  return isTest;
}
