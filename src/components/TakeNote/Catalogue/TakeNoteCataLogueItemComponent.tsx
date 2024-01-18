import React from "react"

import { AiOutlineFolder, AiOutlineEllipsis } from "react-icons/ai";

import { TakeNoteCataLogueItemWapper } from "../style";
import { TakeNoteCataLogueItemProps } from "../props";

const TakeNoteCataLogueItemComponent: React.FC<TakeNoteCataLogueItemProps> = (props: TakeNoteCataLogueItemProps) => {
    return (
        <TakeNoteCataLogueItemWapper>
            <div className="item-icon-title-wapper">
                <div className="item-icon"><AiOutlineFolder /></div>
                <div className="item-title">{props.name}</div>
            </div>

            <div className="item-icon outline"><AiOutlineEllipsis /></div>
        </TakeNoteCataLogueItemWapper>
    )
}

export default TakeNoteCataLogueItemComponent;