function WorkspaceLayout({ children }: { children: React.JSX.Element }) {
  return (
    <>
      <header></header>
      <aside></aside>
      <main>{children}</main>
    </>
  );
}
export default WorkspaceLayout;
