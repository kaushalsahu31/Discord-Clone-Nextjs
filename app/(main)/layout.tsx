import NavigationSidebar from "@/components/navigation/navigation-sidebar";
import InitialState from "@/components/state/InitialState";
import { initialProfile } from "@/lib/initial-profile";


const MainLayout =async  ({ children }: { children: React.ReactNode }) => {
  const profile = await initialProfile();
  return (
    <div className="h-full">
          <InitialState profile={profile}/>
            <div className="hidden md:flex h-full w-[72px] z-30 flex-col fixed inset-y-0">
                <NavigationSidebar/>
            </div>
            <main className="md: pl-[72px] h-full">
                {children}
            </main>
        </div>
    )
}


export default MainLayout;