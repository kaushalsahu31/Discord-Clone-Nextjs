import { currentUser,redirectToSignIn } from "@clerk/nextjs";
import { apiData } from "./helper";


export const initialProfile = async () =>{
    const user = await currentUser();
    if (!user) {
        return redirectToSignIn();
    }
    const profile =await apiData("get","getusers",{condition:{userId:user.id},pages:"single"})
    // console.log(profile,"profile");
    
    if (profile && "_id" in profile) return profile
    const payload:any ={
        userId:user.id,
        name:`${user.firstName} ${user.lastName}`,
        imageUrl:user.imageUrl,
        email:user.emailAddresses[0].emailAddress
    }
    await apiData("post","users",payload)
    const newProfile  =await apiData("get","getusers",{condition:{userId:user.id},pages:"single"})
    return newProfile
}

export const ProfileServer = async (id:string,type:string="single") =>{

   const server =await apiData("get","getserver",{condition:{profileId:id},pages:type})
    return server;
}

