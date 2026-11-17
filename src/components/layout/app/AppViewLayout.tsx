import Header from "../../ui/app/header";

interface AppLayoutProperties {
  children?: React.ReactNode;
}

function AppViewLayout({ children }: Readonly<AppLayoutProperties>) {
  return (
    <div className="flex flex-col h-screen w-screen box-border bg-background">
      <Header />
      <main className="flex mr-1.5 mb-1.5 flex-1 ">
        <aside className="px-1.5 ">
          <nav className="h-full grid p-1 bg-linear-to-b from-primary-600 to-primary-900 rounded-lg">
            <ul>
              <li>Inicio</li>
              <li>Spaces</li>
            </ul>
          </nav>
        </aside>
        <section className=" flex-1 border border-border overflow-hidden rounded-lg bg-surface">
          {children}
        </section>
      </main>
    </div>
  );
}
export default AppViewLayout;
