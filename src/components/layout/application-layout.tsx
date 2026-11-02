import Header from "../ui/app/header";

interface ApplicationLayoutProps {
  children?: React.ReactNode | undefined;
}

function ApplicationLayout({ children }: ApplicationLayoutProps) {
  return (
    <div className="flex flex-col h-screen w-screen box-border">
      <Header />
      <section className="flex mr-1.5 mb-1.5 bg-main flex-1 ">
        <aside className="px-1.5 ">
          <nav className="h-full grid p-1 bg-linear-to-b from-primary-dark to-primary-darker border border-primary rounded-lg">
            <ul>
              <li>Inicio</li>
              <li>Spaces</li>
            </ul>
          </nav>
          <div className="extended"></div>
        </aside>
        <main className=" flex-1 border border-gray-3 overflow-hidden rounded-lg bg-secundary">
          {children}
        </main>
      </section>
    </div>
  );
}
export default ApplicationLayout;
