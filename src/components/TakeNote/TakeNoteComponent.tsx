import React from "react";

import TakeNoteCatalogueComponent from "@/components/TakeNote/Catalogue/TakeNoteCatalogueComponent";
import TakeNoteMenuComponent from "@/components/TakeNote/Menu/TakeNoteMenuComponent";
import TakeNoteContentComponent from "@/components/TakeNote/Content/TakeNoteContentComponent";

import { TakeNoteWrapper } from "@/components/TakeNote/style";

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