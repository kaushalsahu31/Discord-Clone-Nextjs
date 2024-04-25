
import ServerSidebar from "@/components/server/server-sidebar";
import { apiData, apiKillbot } from "@/lib/helper";
import { initialProfile } from "@/lib/initial-profile";
import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";


const ServerIdLayout = async ({ children, params }: { children: React.ReactNode, params: { serverId: string } }) => {
    const profile = await initialProfile();
    if (!profile) return redirectToSignIn();

    let res = await apiKillbot(
        {
        schema:[
            {modal:"server",method:"get",condition: { _id: params.serverId }, pages: "single" },
            {modal:"member",method:"get",condition: { serverId: params.serverId, profileId:profile._id }, pages: "single" }
            ] 
        }
    )
   
    if (!("_id" in res.server)) redirect("/")
    // if (!("_id" in res.member)) redirect("/")

    return (
        <div className="h-full">

            <div className="hidden md:flex h-full w-60 z-20 flex-col fixed inset-y-0">
                <ServerSidebar serverId={params.serverId}/>
            </div>
            <main className="h-full md:pl-60">
                {children}
            </main>

        </div>
    )
}


export default ServerIdLayout;