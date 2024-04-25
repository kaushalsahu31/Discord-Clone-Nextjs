"use client"

import {  useEffect, useState } from "react";
import { Contexts } from "../providers/context-provider";


export const InitialState = ({profile}:any) => {

    const [isMounted, setIsMounted] = useState(false)
    const {updateUserProfile} = Contexts()

    useEffect(() => {
        setIsMounted(true)
        updateUserProfile(profile)
    }, [profile])
    

    if(!isMounted) return null;
    return null
}
 
export default InitialState;