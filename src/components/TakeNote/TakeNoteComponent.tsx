import React from "react"
import { TakeNoteWrapper } from "./style"
import TakeNoteCatalogueComponent from "./Catalogue/TakeNoteCatalogueComponent";
import TakeNoteMenuComponent from "./Menu/TakeNoteMenuComponent"
import TakeNoteContentComponent from "./Content/TakeNoteContentComponent"

const TakeNoteComponent: React.FC = () => {
    return (
        <TakeNoteWrapper>
            <TakeNoteCatalogueComponent />
            <TakeNoteMenuComponent />
            <TakeNoteContentComponent />
        </TakeNoteWrapper>

    );
}

export default TakeNoteComponent;