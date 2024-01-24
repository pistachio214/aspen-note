import {
    createSlice,
    // PayloadAction 
} from "@reduxjs/toolkit";
import { SidebarState } from "../types/sidebar";

const initialState: SidebarState = {
    firstSidebar: true,
    secondSidebar: true,
};

export const sidebarSlice = createSlice({
    name: "sidebar",
    initialState,
    reducers: {
        openFirst: (state: SidebarState) => {
            state.firstSidebar = true;
        },
        closeFirst: (state: SidebarState) => {
            state.firstSidebar = false;
        },
        openSecond: (state: SidebarState) => {
            state.secondSidebar = true;
        },
        closeSecond: (state: SidebarState) => {
            state.secondSidebar = false;
        },
        openAll: (state: SidebarState) => {
            state = initialState;
        },
        closeAll: (state: SidebarState) => {
            state = {
                firstSidebar: false,
                secondSidebar: false,
            };
        },
    },
});

export const { openFirst, closeFirst, openSecond, closeSecond, openAll, closeAll } = sidebarSlice.actions;
export default sidebarSlice.reducer;




