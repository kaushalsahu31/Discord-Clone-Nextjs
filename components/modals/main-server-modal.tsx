"use client"

import { useModalStore } from "@/hooks/use-modal-store";
import { useEffect, useState } from "react";


export const MainServerModal = () => {
    const {isOpen, onClose,type,onOpen} = useModalStore()
    const [isMounted,setIsMounted] = useState(false)
    useEffect(() => {
        setIsMounted(true)
        onOpen("InitialServer")
    }, [])
    if(!isMounted) return null;
    


    return ( 
        <>
        
        </>
     );
}
 
export default MainServerModal;