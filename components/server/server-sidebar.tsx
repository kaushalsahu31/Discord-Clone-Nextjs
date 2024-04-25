import { apiData, apiKillbot } from "@/lib/helper";
import { initialProfile } from "@/lib/initial-profile";
import { redirectToSignIn } from "@clerk/nextjs";
import ServerHeader from "./server-header";

interface ServerSidebarProps{
    serverId:string

}

const ServerSidebar = async({serverId}:ServerSidebarProps) => {
    const profile = await initialProfile();
    if (!profile) return redirectToSignIn();
    let channel:any=[]
    let member:any=[]
    let currentUser:any=[]
    let currentServer:Object={}
   

    const serverData =async (serverId:string) => {
        let res = await apiKillbot(
            {
            schema:[
                {modal:"channel",method:"get",id:"",condition:{serverId},pages:"all",populate:"",select:" -updatedAt -createdAt -__v"},
                {modal:"member",method:"get",id:"",condition:{serverId},pages:"all",populate:"profileId",select:" -updatedAt -createdAt -__v"},
                {modal:"server",method:"get",id:serverId,pages:"all",populate:"",select:" -updatedAt -createdAt -__v"},
                ] 
            }
        )
        channel= res.channel
        member= res.member
        currentUser= res.member.filter((val:any)=>val.profileId._id==profile._id)
        currentServer=res.server   
    }
    await serverData(serverId)
    return ( 
        <div className="flex flex-col h-full text-primary w-full dark:bg-[#1E1F22] bg-[#f2f3f5]">
           <ServerHeader
           server={currentServer}
           member={currentUser.length>0?currentUser[0]:{}}
           members={member}
           />
        </div>
     );
}
 
export default ServerSidebar;