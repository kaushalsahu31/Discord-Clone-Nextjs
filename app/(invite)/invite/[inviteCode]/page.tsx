
import { apiData, apiKillbot } from "@/lib/helper";
import { initialProfile } from "@/lib/initial-profile";
import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";


const InvitePage = async ({ params }: {params: { inviteCode: string } }) => {
    const profile = await initialProfile();
    // if (!profile) return redirectToSignIn();
    if (!params.inviteCode) redirect("/")
   
    const server = await apiData("get", "getserver", { condition: { inviteCode: params.inviteCode }, pages: "single" })
    if (!server) redirect("/")
    const member = await apiData("get", "getmember", { condition: { serverId: server._id, profileId:profile._id}, pages: "single" })
    if (!("_id" in member)) await apiData("post", "member",  { serverId: server._id, profileId:profile._id})
    redirect(`/servers/${server._id}`)

    return (
        <div className="h-full">

            

        </div>
    )
}


export default InvitePage;