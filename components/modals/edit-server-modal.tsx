"use client"

import { Dialog,DialogContent,DialogDescription,DialogFooter,DialogHeader,DialogTitle,DialogClose} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {zodResolver} from "@hookform/resolvers/zod"
import { Form, FormControl,FormField,FormItem,FormLabel,FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import FileUpload from "../fileUpload";
import { apiData, apiKillbot } from "@/lib/helper";
import { Contexts } from "../providers/context-provider";
import { ProfileServer } from "@/lib/initial-profile";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import { useModalStore } from "@/hooks/use-modal-store";
import { useEffect } from "react";



const formSchema =z.object({
    name:z.string().min(1,{
        message:"Server name is required."
    }),
    imageUrl:z.string().min(1,{
        message:"Server image is required."
    })
})

export const EditServerModal = () => {
    const router = useRouter()
    const {isOpen, onClose,type, data} = useModalStore()
    const {userProfile, updateUserProfile} = Contexts()
    const isModalOpen =isOpen && type === "editServer";
    const {server} =data; 
  
    
    const form = useForm({
        resolver:zodResolver(formSchema),
        defaultValues:{
            name:"",
            imageUrl:""
        }
    })
    useEffect(() => {
        if(server){
            form.setValue("name",server.name)
            form.setValue("imageUrl",server.imageUrl)
        }
     
    }, [server,form])


    const isLoading = form.formState.isSubmitting;
    const onSubmit = async (values:z.infer<typeof formSchema>)=>{
        try {
            const data:any = values;
            await apiData("patch","server/"+server._id,data)
            form.reset()
            onClose()
            router.refresh()
        } catch (error) {
            console.log(error,"error");
            
        }
    }
    const hadleClose=()=>{
        form.reset()
        onClose()
    }

    return ( 
        <Dialog open={isModalOpen} onOpenChange={hadleClose}>
            <DialogContent className="bg-white text-black p-0 overflow-hidden">
                <DialogHeader className="pt-8 px-6">
                    <DialogTitle className="text-2xl text-center font-bold">Edit your server</DialogTitle><DialogClose  />
                    <DialogDescription className="text-center text-zinc-500">Give your server a personality with a name and an image. You can always change it later</DialogDescription>
                </DialogHeader>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <div className="space-y-8 px-6 ">
                            <div className=" flex items-center justify-center text-center">
                                <FormField control={form.control} 
                                    name="imageUrl"
                                    render={({field})=>(
                                        <FormItem className="w-full">                                           
                                            <FormControl>
                                                <FileUpload Upload={field.onChange} value={field.value}/>
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />               
                            </div>       
                            <FormField control={form.control}
                                name="name"
                                render={({field})=>(
                                    <FormItem>
                                        <FormLabel>Server name</FormLabel>
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
                            <Button variant={'primary'}>Save</Button>
                        </DialogFooter>
                    </form>
                </Form>

            </DialogContent>
        </Dialog>
     );
}
 
export default EditServerModal;