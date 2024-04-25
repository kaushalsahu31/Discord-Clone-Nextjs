import { ProfileServer, initialProfile } from "@/lib/initial-profile";
import { redirect } from "next/navigation";
import NavigationAction from "./navigation-action";
import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";
import NavigationItem from "./navigation-item";
import { ModeToggle } from "../mode-toggle";
import { UserButton } from "@clerk/nextjs";
import { AvatarIcon } from "@radix-ui/react-icons";
import { apiData } from "@/lib/helper";

const NavigationSidebar = async() => {
    const profile = await initialProfile();
    const servers = await apiData("get","getmember",{condition:{profileId:profile._id},pages:"all",populate:"serverId"})
    // const servers = await ProfileServer(profile._id,"all")
    // if("_id" in server) {return redirect(`/servers/${server._id}`)}
    
    
    
    return ( 
        <div className="space-y-4 flex flex-col items-center h-full text-primary w-full dark:bg-[#1E1F22] py-3">
            <NavigationAction/>
            <Separator
            className="h-[2px] bg-zinc-300 dark:bg-zinc-700 rounded-md w-10 mx-auto"
            />
            <ScrollArea className=" flex-1 w-full ">
                {
                    servers.map((server:any)=>(
                        <div key={server.serverId.key} className="mb-4">
                            <NavigationItem name={server.serverId.name} id={server.serverId._id} imageUrl={server.serverId.imageUrl}/>
                        </div>
                    ))
                }
            </ScrollArea>
            <div className="flex flex-col gap-2 items-center">
            <ModeToggle />
            <UserButton afterSignOutUrl="/" appearance={{
                elements:{
                    avatarBox: "h-[48px] w-[48px]"
                }}
            } />
        </div>
        </div>
     );
}
 
export default NavigationSidebar;