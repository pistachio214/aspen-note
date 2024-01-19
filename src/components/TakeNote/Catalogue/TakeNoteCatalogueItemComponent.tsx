import React from "react"

import { AiOutlineFolder } from "react-icons/ai";
import RightMenu from '@right-menu/react'
import { OptionsType } from '@right-menu/core';

import { TakeNoteCatalogueItemWrapper } from "../style";
import { TakeNoteCataLogueItemProps } from "../props";

const TakeNoteCatalogueItemComponent: React.FC<TakeNoteCataLogueItemProps> = (props: TakeNoteCataLogueItemProps) => {

    const options: OptionsType = [
        {
            type: 'li',
            text: '编辑',
            callback: () => alert('Hello RightMenu'),
        },
        {
            type: 'li',
            text: '删除',
            callback: () => alert('Hello RightMenu'),
        },
    ];

    return (
        <TakeNoteCatalogueItemWrapper>
            <RightMenu
                minWidth={100}
                maxWidth={200}
                onBeforeInit={() => { }}
                onAfterInit={() => { }}
                theme="win10"
                options={options}
            >
                <div className="item-icon-title-wapper">
                    <div className="item-icon"><AiOutlineFolder /></div>
                    <div className="item-title">{props.name}</div>
                </div>
            </RightMenu>
            
        </TakeNoteCatalogueItemWrapper >
    )
}

export default TakeNoteCatalogueItemComponent;