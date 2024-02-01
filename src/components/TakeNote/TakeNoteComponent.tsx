import React from "react";

import { shallowEqual } from "react-redux";

import TakeNoteCatalogueComponent from "@/components/TakeNote/Catalogue/TakeNoteCatalogueComponent";
import TakeNoteMenuComponent from "@/components/TakeNote/Menu/TakeNoteMenuComponent";
import TakeNoteContentComponent from "@/components/TakeNote/Content/TakeNoteContentComponent";

import { SidebarState } from "@/redux/types/sidebar";
import { useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";

import { TakeNoteWrapper } from "@/components/TakeNote/style";

const TakeNoteComponent: React.FC = () => {

    const sidebarState: SidebarState = useAppSelector((state: RootState) => ({ ...state.sidebar }), shallowEqual);

    return (
        <TakeNoteWrapper>
            {
                sidebarState.secondSidebar ? (
                    <>
                        <TakeNoteCatalogueComponent />
                        <TakeNoteMenuComponent />
                    </>
                ) : null
            }
            <TakeNoteContentComponent />
        </TakeNoteWrapper>
    );
}

export default TakeNoteComponent;