import React from "react"
import { TakeNoteWapper } from "./style"
import TakeNoteCataLogueComponent from "./Catalogue/TakeNoteCataLogueComponent"
import TakeNoteMenuComponent from "./Menu/TakeNoteMenuComponent"
import TakeNoteContentComponent from "./Content/TakeNoteContentComponent"

const TakeNoteComponent: React.FC = () => {
    return (
        <TakeNoteWapper>
            <TakeNoteCataLogueComponent />
            <TakeNoteMenuComponent />
            <TakeNoteContentComponent />
        </TakeNoteWapper>

    );
}

export default TakeNoteComponent;