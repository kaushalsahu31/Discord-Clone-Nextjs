"use client"

import { Dialog,DialogContent,DialogDescription,DialogFooter,DialogHeader,DialogTitle,DialogClose} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {zodResolver} from "@hookform/resolvers/zod"
import { Form, FormControl,FormField,FormItem,FormLabel,FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { apiData, apiKillbot } from "@/lib/helper";
import { Contexts } from "../providers/context-provider";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import { useModalStore } from "@/hooks/use-modal-store";

const formSchema =z.object({
    name:z.string().min(1,{
        message:"Server name is required."
    })
})


export const CreateChannelModal = () => {
    const router = useRouter()
    const {userProfile, updateUserProfile} = Contexts()
    const {isOpen, onClose,type} = useModalStore()
    const isModalOpen =isOpen && type === "CreateChannel";


    const form = useForm({
        resolver:zodResolver(formSchema),
        defaultValues:{
            name:""
        }
    })
    const isLoading = form.formState.isSubmitting;


    const onSubmit = async (values:z.infer<typeof formSchema>)=>{
        try {
            const data:any = values;
            data['profileId']=userProfile ? userProfile?._id:null
            data['inviteCode']=uuidv4();
            await apiData("post","server",data)
            const response = await apiData("get","getserver",{condition:{profileId:userProfile?._id},pages:"single",orderby:[['_id', -1]]});
            await apiKillbot(
                {
                schema:[
                    {modal:"channel",method:"post",body:{name:"general",profileId:userProfile ? userProfile?._id:null,serverId:response._id}},
                    {modal:"member",method:"post",body:{role:"ADMIN",profileId:userProfile ? userProfile?._id:null,serverId:response._id}}
                    ] 
                }
            )
            form.reset()
            onClose()
            if(type!=="InitialServer") router.push(`/servers/${response._id}`)
            router.refresh()
        } catch (error) {
            console.log(error,"error");
            
        }
    }
   

    return ( 
        <Dialog open={isModalOpen} onOpenChange={onClose}>
            <DialogContent className="bg-white text-black p-0 overflow-hidden">
                <DialogHeader className="pt-8 px-6">
                    <DialogTitle className="text-2xl text-center font-bold">Create Channel</DialogTitle><DialogClose  />
                </DialogHeader>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <div className="space-y-8 px-6 ">
                            <FormField control={form.control}
                                name="name"
                                render={({field}:any)=>(
                                    <FormItem>
                                        <FormLabel>Channel name</FormLabel>
                                        <FormControl>
                                        <Input disabled={isLoading}
                                        className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                                        {...field}
                                        />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />                  
                        </div>
                        <DialogFooter className="bg-gray-100 px-6 py-4">
                            <Button variant={'primary'}>Create</Button>
                        </DialogFooter>
                    </form>
                </Form>

            </DialogContent>
        </Dialog>
     );
}
 
export default CreateChannelModal;