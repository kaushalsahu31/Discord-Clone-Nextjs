"use client"
import React, { createContext, useContext, useState } from "react";
type ContextType = {
    userProfile: any |null;
    updateUserProfile: (val:any) => void;
};
const ContextDefaultValues: ContextType = {
    userProfile:null,
    updateUserProfile: (val:any=null) => {}
};
const Context = createContext<ContextType>(ContextDefaultValues);

export function Contexts() {
    return useContext(Context);
}
type Props = {
    children: React.ReactNode;
};

export function ContextProvider({ children }: Props) {
    const [userProfile, setUserProfile] = useState(null);
    const updateUserProfile = (val:any=null) => {
        setUserProfile(val)
    }
    const value = {userProfile, updateUserProfile};
    return (
        <>
            <Context.Provider value={value}>
                {children}
            </Context.Provider>
        </>
    );
}