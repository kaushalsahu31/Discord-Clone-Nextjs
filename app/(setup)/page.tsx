
import MainServerModal from "@/components/modals/main-server-modal";
import InitialState from "@/components/state/InitialState";
import { initialProfile,ProfileServer } from "@/lib/initial-profile";
import { redirect } from "next/navigation";





const SetupPage =async () => {
  const profile = await initialProfile();
  const server = await ProfileServer(profile._id)
  if("_id" in server) {return redirect(`/servers/${server._id}`)}

  return ( 
  <div>
    <InitialState profile={profile}/>
    <MainServerModal />
  </div> 
  );
}
 
export default SetupPage;