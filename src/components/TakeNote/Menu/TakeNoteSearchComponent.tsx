import React from "react";
import { BiDockLeft, BiDockRight } from "react-icons/bi";
import { shallowEqual } from "react-redux";

import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { SidebarState } from "@/redux/types/sidebar";
import { closeFirst, openFirst } from "@/redux/slice/sidebar";

import { TakeNoteSearchWrapper } from "@/components/TakeNote/style";


const TakeNoteSearchComponent: React.FC = () => {

    const dispatch = useAppDispatch();

    const sidebarState: SidebarState = useAppSelector((state: RootState) => ({ ...state.sidebar }), shallowEqual);

    const onDockClose = () => {
        dispatch(closeFirst());
    }

    const onDockOpen = () => {
        dispatch(openFirst())
    }

    return (
        <TakeNoteSearchWrapper>
            <div className="dock-wrapper">
                {
                    sidebarState.firstSidebar
                        ? <BiDockLeft className="dock-icon" onClick={onDockClose} />
                        : <BiDockRight className="dock-icon" onClick={onDockOpen} />
                }
            </div>
            <input
                className="search-input"
                placeholder="Search for notes"
            />
        </TakeNoteSearchWrapper>
    );
}

export default TakeNoteSearchComponent;