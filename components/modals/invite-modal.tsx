"use client"

import { Dialog,DialogContent,DialogDescription,DialogHeader,DialogTitle,DialogClose} from "@/components/ui/dialog";

import {  useEffect, useState } from "react";
import FileUpload from "../fileUpload";
import { apiData } from "@/lib/helper";
import { Contexts } from "../providers/context-provider";
import { useModalStore } from "@/hooks/use-modal-store";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Check, Copy, RefreshCw } from "lucide-react";
import useOrigin from "@/hooks/use-origin";
import { v4 as uuidv4 } from "uuid";




export const InviteModal = () => {
    const {onOpen,isOpen, onClose,type,data} = useModalStore()
    const {server}=data;
    const {userProfile, updateUserProfile} = Contexts()
    const isModalOpen =isOpen && (type === "Invite");

    const origin =  useOrigin()
    const inviteUrl = `${origin}/invite/${server?.inviteCode}`

    const [copied,setCopied]= useState(false)
    const [isLoading,setIsLoading]= useState(false)

    const onCopy = () => {
        navigator.clipboard.writeText(inviteUrl);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 1000);
    }
    const onNew=async () => {
        try {
            setIsLoading(true);
            const check = await apiData("get","getserver",{condition:{_id:server?._id,profileId:userProfile._id},pages:"single"})
            if(check){
                await apiData("patch","server/"+server?._id,{inviteCode:uuidv4()})
                const res = await apiData("get","getserver",{condition:{_id:server?._id},pages:"single"})
                onOpen("Invite",{server:res})
            }
        } catch (error) {
            console.log(error);
            
        }finally{
            setIsLoading(false);
        }
    }
   
   

    return ( 
        <Dialog open={isModalOpen} onOpenChange={onClose}>
            <DialogContent className="bg-white text-black p-0 overflow-hidden">
                <DialogHeader className="pt-8 px-6">
                    <DialogTitle className="text-2xl text-center font-bold">Invite Friends</DialogTitle><DialogClose  />
                </DialogHeader>

             <div className="p-6">
                <Label className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">Server Invite Link</Label>
                <div className="flex items-center mt-2 gap-x-2">
                    <Input 
                    className=" bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0" 
                    value={inviteUrl}
                    />
                    <Button disabled={isLoading} onClick={onCopy} size="icon">
                        {copied?<Check className=" w-4 h-4 ml-2"/>:<Copy className=" w-4 h-4 ml-2"/>}
                        
                        </Button>
                </div>
                <Button
                variant="link"
                size="sm"
                onClick={onNew}
                className=" text-xs text-zinc-500 mt-4"
                >
                    Generate a new link
                    <RefreshCw  className=" w-4 h-4 ml-2"/>
                </Button>
             </div>
            </DialogContent>
        </Dialog>
     );
}
 
export default InviteModal;