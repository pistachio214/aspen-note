import React from "react"
import { TakeNoteSearchWrapper } from "../style";

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