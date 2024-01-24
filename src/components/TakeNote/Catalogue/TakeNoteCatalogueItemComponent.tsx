import React from "react";

import {
    AiOutlineFolder,
    // AiOutlineEllipsis
} from "react-icons/ai";

import RightMenu from '@right-menu/react';
import { OptionsType } from '@right-menu/core';

import { TakeNoteCatalogueItemWrapper } from "@/components/TakeNote/style";
import { TakeNoteCataLogueItemProps as IProps } from "@/components/TakeNote/props";

const TakeNoteCatalogueItemComponent: React.FC<IProps> = (props: IProps) => {

    const options: OptionsType = [
        {
            type: 'li',
            text: '编辑',
            callback: () => alert('Hello RightMenu'),
        },
        {
            type: 'li',
            text: `<div style="color: red;">删除</div>`,
            callback: () => alert('Hello RightMenu'),
        },
    ];

    const handleCatalogue = () => {
        console.log('点击了一级菜单')
    }

    return (
        <RightMenu
            minWidth={70}
            maxWidth={200}
            onBeforeInit={() => { }}
            onAfterInit={() => { }}
            theme="mac"
            options={options}
        >
            <TakeNoteCatalogueItemWrapper onClick={handleCatalogue}>
                <div className="item-icon-title-wapper">
                    <div className="item-icon"><AiOutlineFolder /></div>
                    <div className="item-title">{props.name}</div>
                </div>
                {/* <div className="item-icon outline">
                    <AiOutlineEllipsis />
                </div> */}
            </TakeNoteCatalogueItemWrapper>
        </RightMenu>
    )
}

export default TakeNoteCatalogueItemComponent;