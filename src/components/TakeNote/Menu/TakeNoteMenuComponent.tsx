import React from "react";

import { shallowEqual } from "react-redux";
import { 
    BsFileEarmarkPlus, 
    BsArrowBarLeft, 
    BsArrowBarRight,
    BsArrowDown,
    BsArrowUp
} from "react-icons/bs";

import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { SidebarState } from "@/redux/types/sidebar";
import { RootState } from "@/redux/store";
import { closeFirst, openFirst } from "@/redux/slice/sidebar";

import TakeNoteSearchComponent from "@/components/TakeNote/Menu/TakeNoteSearchComponent";
import TakeNoteMenuItemComponent from "@/components/TakeNote/Menu/TakeNoteMenuItemComponent";

import { TakeNoteMenuWrapper } from "@/components/TakeNote/style";


const TakeNoteMenuComponent: React.FC = () => {

    const dispatch = useAppDispatch();

    const sidebarState: SidebarState = useAppSelector((state: RootState) => ({ ...state.sidebar }), shallowEqual);

    const onDockClose = () => {
        dispatch(closeFirst());
    }

    const onDockOpen = () => {
        dispatch(openFirst())
    }

    return (
        <TakeNoteMenuWrapper>
            <TakeNoteSearchComponent />

            <TakeNoteMenuItemComponent />
            
            <div className="footer-wrapper">
                <div className="fotter-tool-wrapper">
                    <div className="tool-wrapper">
                        {
                            sidebarState.firstSidebar ? (
                                <div className="tool-wrapper" onClick={onDockClose}>
                                    <BsArrowBarLeft className="tool-icon" />
                                </div>
                            ) : (
                                <div className="tool-wrapper" onClick={onDockOpen}>
                                    <BsArrowBarRight className="tool-icon" />
                                </div>
                            )
                        }
                    </div>

                    <div className="tool-wrapper">
                        <div className="tool-wrapper">
                            <BsFileEarmarkPlus className="tool-icon" />
                        </div>
                    </div>

                    <div className="tool-wrapper">
                        <div className="tool-wrapper">
                            <BsArrowUp className="tool-icon" />
                        </div>
                    </div>

                    <div className="tool-wrapper">
                        <div className="tool-wrapper">
                            <BsArrowDown className="tool-icon" />
                        </div>
                    </div>

                </div>
            </div>
        </TakeNoteMenuWrapper>
    );
}

export default TakeNoteMenuComponent;