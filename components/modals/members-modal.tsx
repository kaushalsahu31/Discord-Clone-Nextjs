"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";

import { useEffect, useState } from "react";
import { useModalStore } from "@/hooks/use-modal-store";
import { ScrollArea } from "../ui/scroll-area";
import UserAvatar from "../user-avatar";
import { Check, LeafyGreen, Loader2, MoreVertical, Shield, ShieldAlert, ShieldCheckIcon, ShieldQuestion } from "lucide-react";
import { DropdownMenu, DropdownMenuItem, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuPortal, DropdownMenuSubContent } from "../ui/dropdown-menu";
import { apiData, apiKillbot } from "@/lib/helper";
import { useRouter } from "next/navigation";

const roleIconMap: any = {
    "GUEST": null,
    "MODERATOR": <ShieldCheckIcon className=" h-4 w-4 ml-2" />,
    "ADMIN": <ShieldAlert className=" h-4 w-4 ml-2 text-rose-500" />,
}


export const MembersModal = () => {
    const router = useRouter()
    const { onOpen, isOpen, onClose, type, data } = useModalStore()
    const isModalOpen = isOpen && (type === "Members");
    const [loadingID, setLoadingID] = useState("")


    const { server } = data;
    if (!server) return null;

    const changeRole = async(role:string,id:string,member_id:string) => {
        try {
            setLoadingID(member_id)
            await apiData("patch",`member/${id}`,{role})
            router.refresh()
            let res = await apiKillbot(
                {
                schema:[
                    {modal:"member",method:"get",id:"",condition:{serverId:server.server._id},pages:"all",populate:"profileId",select:" -updatedAt -createdAt -__v"},
                    {modal:"server",method:"get",id:server.server._id,pages:"all",populate:"",select:" -updatedAt -createdAt -__v"},
                    ] 
                }
            )
           onOpen("Members",{server:{server:res.server,members:res.member}})   
        } catch (error) {
            console.log(error);
        }finally{
            setLoadingID("")
        }
    }
    const KickUser = async(id:string,member_id:string) => {
        try {
            setLoadingID(member_id)
            await apiData("delete",`member/${id}`,{})
            router.refresh()
            let res = await apiKillbot(
                {
                schema:[
                    {modal:"member",method:"get",id:"",condition:{serverId:server.server._id},pages:"all",populate:"profileId",select:" -updatedAt -createdAt -__v"},
                    {modal:"server",method:"get",id:server.server._id,pages:"all",populate:"",select:" -updatedAt -createdAt -__v"},
                    ] 
                }
            )
           onOpen("Members",{server:{server:res.server,members:res.member}})   
        } catch (error) {
            console.log(error);
        }finally{
            setLoadingID("")
        }
    }

    return (
        <Dialog open={isModalOpen} onOpenChange={onClose}>
            <DialogContent className="bg-white text-black p-0 overflow-hidden">
                <DialogHeader className="pt-8 px-6">
                    <DialogTitle className="text-2xl text-center font-bold">Manage Members</DialogTitle><DialogClose />
                    <DialogDescription className=" text-center text-zinc-500">{server.members && server.members.length} Members</DialogDescription>
                </DialogHeader>
                <ScrollArea className=" my-8 max-h-[420px] px-6">
                    {
                        // console.log(server?.members)

                        server?.members?.length > 0 ? server?.members.map((member: any) => {
                            return (
                                <div key={member._id} className=" flex items-center gap-x-2 mb-2">
                                    <UserAvatar src={member.profileId.imageUrl} />
                                    <div className="flex flex-col gap-y-1">
                                        <div className="flex text-xs font-semibold items-center gap-x-1">{member.profileId.name}
                                            {roleIconMap[member.role.toString()]}
                                        </div>
                                        <p className=" text-xs text-zinc-500">{member.profileId.email}</p>
                                    </div>
                                    {server.server.profileId !== member.profileId._id && loadingID !== member.profileId._id && (
                                        <div className=" ml-auto">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger className=" outline-none">
                                                    <MoreVertical className=" h-4 w-4 text-zinc-500" />
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent side="left">
                                                    <DropdownMenuSub>
                                                        <DropdownMenuSubTrigger className=" flex items-center">
                                                            <ShieldQuestion className=" w-4 h-4 mr-2" />
                                                            <span>Role</span>
                                                        </DropdownMenuSubTrigger>
                                                        <DropdownMenuPortal>
                                                            <DropdownMenuSubContent>
                                                                <DropdownMenuItem onClick={()=>{changeRole("GUEST",member._id,member.profileId._id)}}>
                                                                    <Shield className=" w-4 h-4 mr-2" />
                                                                    Guest
                                                                    {member.role == "GUEST" && (<Check className=" w-4 h-4 ml-auto" />)}
                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem onClick={()=>{changeRole("MODERATOR",member._id,member.profileId._id)}}> 
                                                                    <Shield className=" w-4 h-4 mr-2" />
                                                                    Moderator 
                                                                    {member.role == "MODERATOR" && (<Check className=" w-4 h-4 ml-auto" />)}
                                                                </DropdownMenuItem>
                                                            </DropdownMenuSubContent>
                                                        </DropdownMenuPortal>
                                                    </DropdownMenuSub>
                                                    <DropdownMenuSeparator/>
                                                    <DropdownMenuItem onClick={()=>{KickUser(member._id,member.profileId._id)}} >
                                                        <LeafyGreen className=" w-4 h-4 mr-2" />
                                                        Kick
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </div>
                                    )}
                                    {loadingID == member.profileId._id &&(
                                        <Loader2 className="animate-spin text-zinc-500 ml-auto w-4 h-4"/>
                                    )}

                                </div>
                            )
                        }) : <></>
                    }
                </ScrollArea>
            </DialogContent>
        </Dialog>
    );
}

export default MembersModal;