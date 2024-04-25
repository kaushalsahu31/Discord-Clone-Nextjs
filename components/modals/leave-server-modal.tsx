"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogClose, DialogFooter } from "@/components/ui/dialog";

import { useState } from "react";
import { useModalStore } from "@/hooks/use-modal-store";
import { apiData, apiKillbot } from "@/lib/helper";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export const LeaveServerModal = () => {
    const router = useRouter()
    const { onOpen, isOpen, onClose, type, data } = useModalStore()
    const isModalOpen = isOpen && (type === "leaveServer");
    const [isLoading, setIsLoading] = useState(false)


    const { server } = data;
    if (!server) return null;

    const LeaveServer = async(server:any) => {
        try {
            setIsLoading(true)
            console.log(server,"server");
            
            if (server?.server?.profileId == server.member.profileId._id) {
                await apiData("delete",`server/${server?.server?._id}`,{})
            }else{
                await apiData("delete",`member/${server?.member?._id}`,{})
            }
            onClose()
            router.refresh();
            router.push("/");
        } catch (error) {
            console.log(error);
        }finally{
            setIsLoading(false)
        }
    }

    return (
        <Dialog open={isModalOpen} onOpenChange={onClose}>
            <DialogContent className="bg-white text-black p-0 overflow-hidden">
                <DialogHeader className="pt-8 px-6">
                    <DialogTitle className="text-2xl text-center font-bold capitalize">{server?.leave} Server</DialogTitle><DialogClose />
                    <DialogDescription className=" text-center text-zinc-500">Are you sure you want to {server?.leave} <span>{server?.server?.name}</span> server</DialogDescription>
                </DialogHeader>
                <DialogFooter className=" bg-gray-100 px-6 py-4">
                <div className="flex items-center justify-between w-full">
                    <Button disabled={isLoading} onClick={()=>{onClose()}} variant="ghost">Cancel</Button>
                    <Button disabled={isLoading} onClick={()=>{LeaveServer(server)}} variant="primary">Confirm</Button>
                </div>
                </DialogFooter>
               
            </DialogContent>
        </Dialog>
    );
}

export default LeaveServerModal;