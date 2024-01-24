import React from "react"

import TakeNoteSearchComponent from "@/components/TakeNote/Menu/TakeNoteSearchComponent";
import TakeNoteMenuItemComponent from "@/components/TakeNote/Menu/TakeNoteMenuItemComponent";

import { TakeNoteMenuWrapper } from "@/components/TakeNote/style";

const TakeNoteMenuComponent: React.FC = () => {
    return (
        <TakeNoteMenuWrapper>
            <TakeNoteSearchComponent />
            <TakeNoteMenuItemComponent />
        </TakeNoteMenuWrapper>
    );
}

export default TakeNoteMenuComponent;