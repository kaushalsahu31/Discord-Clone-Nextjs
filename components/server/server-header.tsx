"use client"

import { useEffect, useState } from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { ChevronDown, LogOut, PlusCircle, Settings, Trash, UserPlus, Users } from "lucide-react"
import { useModalStore } from "@/hooks/use-modal-store"

interface ServerHeaderProps{
    server:any,
    member:any,
    members:any,
}

const ServerHeader = ({server,member,members}:ServerHeaderProps) => {
    const [isMounted,setIsMounted] = useState(false)
    useEffect(() => {
        setIsMounted(true)
    }, [])

    const {isOpen, onClose,type,onOpen} = useModalStore()
    
    const isAdmin =member.role ==="ADMIN"
    const isModerator =member.role ==="MODERATOR" || isAdmin
    // console.log(member,"membermember");
    
    if(!isMounted) return null;
    return ( 
       <DropdownMenu>
        <DropdownMenuTrigger className=" focus:outline-none" asChild>
            <button className="w-full text-md font-semibold px-3 flex items-center h-12 border-neutral-200 dark:border-neutral-800 border-b-2 hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition">
                {server.name}
                <ChevronDown className=" h-5 w-5 ml-auto"/>
            </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 text-xs font-medium text-black dark:text-neutral-400 space-y-[2px]">
            {
                isModerator && (
                    <DropdownMenuItem onClick={()=>onOpen("Invite",{server})} className=" text-indigo-600 dark:text-indigo-400 px-3 py-2 text-sm cursor-pointer">Invite People <UserPlus className=" h-4 w-4 ml-auto"/></DropdownMenuItem>
                )    
            }
            {
                isAdmin && (
                    <DropdownMenuItem onClick={()=>onOpen("editServer",{server})} className="px-3 py-2 text-sm cursor-pointer">Server Settings<Settings className=" h-4 w-4 ml-auto"/></DropdownMenuItem>
                )
            }
            {
                isAdmin && (
                    <DropdownMenuItem onClick={()=>onOpen("Members",{server:{server,members}})} className="px-3 py-2 text-sm cursor-pointer">Manage Members <Users className=" h-4 w-4 ml-auto"/></DropdownMenuItem>
                )    
            }
            {
                isModerator && (
                    <DropdownMenuItem className="px-3 py-2 text-sm cursor-pointer">Create Channels<PlusCircle className=" h-4 w-4 ml-auto"/></DropdownMenuItem>
                )
            }
            {
                isModerator && (
                    <DropdownMenuSeparator />
                )
            }
            {
                isAdmin && (
                    <DropdownMenuItem onClick={()=>onOpen("leaveServer",{server:{server,member,leave:'delete'}})} className=" text-rose-500 dark:text-rose-500 px-3 py-2 text-sm cursor-pointer">Delete Server <Trash className=" h-4 w-4 ml-auto"/></DropdownMenuItem>
                )    
            }
            {
                !isAdmin && (
                    <DropdownMenuItem onClick={()=>onOpen("leaveServer",{server:{server,member,leave:'leave'}})} className=" text-rose-500 dark:text-rose-500 px-3 py-2 text-sm cursor-pointer">Leave Server <LogOut className=" h-4 w-4 ml-auto"/></DropdownMenuItem>
                )    
            }
        </DropdownMenuContent>
       </DropdownMenu>
     );
}
 
export default ServerHeader;