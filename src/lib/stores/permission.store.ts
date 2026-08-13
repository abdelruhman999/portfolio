import { create } from "zustand";
import md5 from "md5";



interface PermissionState {
    permissions: string[];
    allowedPages: string[];
    setPermissions: (permissions: string[]) => void;
    setAllowedPages: (pages: string[]) => void;
    hasPermission: (permission: string) => boolean;
    isPageAllowed: (page: string) => boolean;
    reset: () => void;
}


const initialState = {
    permissions: [],
    allowedPages: [],
};


export const usePermissionStore = create<PermissionState>((set, get) => ({
    ...initialState,

    setPermissions: (permissions: string[]) => set({ permissions }),


    setAllowedPages: (pages: string[]) => set({ allowedPages: pages }),


    hasPermission: (permission: string) => {
        const { permissions } = get();
        return permissions.includes(md5(permission));
    },


    isPageAllowed: (page: string) => {
        const { allowedPages } = get();
        return allowedPages.includes(md5(page));
    },

    
    reset: () => set(initialState),
}));
