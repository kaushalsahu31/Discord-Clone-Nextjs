import {create} from 'zustand'

export type Modaltype = 'CreateServer' | "InitialServer" | "Invite" | "editServer" | "Members" | "leaveServer" | "CreateChannel" ;

interface ModalData {
    server?:any;
}

interface ModalStore {
    type:Modaltype | null;
    isOpen:boolean;
    onOpen: (type:Modaltype,data?:ModalData) => void;
    onClose: () => void;
    data:ModalData
}


export const useModalStore = create<ModalStore>((set) => ({
    type: null,
    isOpen: false,
    data:{},
    onOpen: (type:Modaltype,data={}) => set({data, type, isOpen: true}),
    onClose: () => set({isOpen: false})
}));