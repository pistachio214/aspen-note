import React from "react";

import { TakeNoteNoneContentWrapper } from "@/components/TakeNote/style";

import logo from '@/assets/logo.svg';

const TakeNoteNoneContentComponent: React.FC = () => {
    return (
        <TakeNoteNoneContentWrapper>
            <div className="container">
                <img src={logo} className="logo-img" />
                Welcome to Pistachio Note 👏👏👏👏
            </div>
        </TakeNoteNoneContentWrapper>
    )
}

export default TakeNoteNoneContentComponent;