import { ExtendedActionsSidebar } from "../../widgets/ExtendedActionsSidebar";
import { GlobalActionsSidebar } from "../../widgets/GlobalActionsSidebar";
import GlobalHeader from "../../widgets/GlobalHeader";

interface AppLayoutProperties {
  children?: React.ReactNode;
}

function AppViewLayout({ children }: Readonly<AppLayoutProperties>) {
  return (
    <div className="flex flex-col h-screen w-screen box-border bg-background">
      <GlobalHeader />
      <main className="flex mr-1.5 mb-1.5 flex-1 ">
        <aside className="flex">
          <GlobalActionsSidebar />
          <ExtendedActionsSidebar />
        </aside>

        <section className=" flex-1 border border-border overflow-hidden rounded-md bg-surface">
          {children}
        </section>
      </main>
    </div>
  );
}
export default AppViewLayout;
