import React from "react"
import { TakeNoteMenuWrapper } from "../style";
import TakeNoteSearchComponent from "./TakeNoteSearchComponent";
import TakeNoteMenuItemComponent from "./TakeNoteMenuItemComponent";

const TakeNoteMenuComponent: React.FC = () => {
    return (
        <TakeNoteMenuWrapper>
            <TakeNoteSearchComponent />
            <TakeNoteMenuItemComponent />
        </TakeNoteMenuWrapper>
    );
}

export default TakeNoteMenuComponent;