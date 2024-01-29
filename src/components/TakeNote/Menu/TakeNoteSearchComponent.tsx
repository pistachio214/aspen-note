import React from "react";

import { TakeNoteSearchWrapper } from "@/components/TakeNote/style";


const TakeNoteSearchComponent: React.FC = () => {

    return (
        <TakeNoteSearchWrapper>
            <input
                className="search-input"
                placeholder="Search for notes"
            />
        </TakeNoteSearchWrapper>
    );
}

export default TakeNoteSearchComponent;