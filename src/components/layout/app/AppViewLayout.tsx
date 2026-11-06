import Header from "../../ui/app/header";

interface AppLayoutProperties {
  children?: React.ReactNode;
}

function AppViewLayout({ children }: Readonly<AppLayoutProperties>) {
  return (
    <div className="flex flex-col h-screen w-screen box-border">
      <Header />
      <main className="flex mr-1.5 mb-1.5 bg-main flex-1 ">
        <aside className="px-1.5 ">
          <nav className="h-full grid p-1 bg-linear-to-b from-primary-dark to-primary-darker border border-primary rounded-lg">
            <ul>
              <li>Inicio</li>
              <li>Spaces</li>
            </ul>
          </nav>
        </aside>
        <section className=" flex-1 border border-gray-3 overflow-hidden rounded-lg bg-secundary">
          {children}
        </section>
      </main>
    </div>
  );
}
export default AppViewLayout;
