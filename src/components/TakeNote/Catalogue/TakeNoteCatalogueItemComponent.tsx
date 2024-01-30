import React from "react";

import {
    AiOutlineFolder,
    AiOutlineFolderOpen
} from "react-icons/ai";
import { shallowEqual } from "react-redux";

import RightMenu from '@right-menu/react';
import { OptionsType } from '@right-menu/core';

import { SidebarState } from "@/redux/types/sidebar";
import { useAppSelector, useAppDispatch } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { setFirstSidebarKey } from "@/redux/slice/sidebar";


import { TakeNoteCatalogueItemWrapper } from "@/components/TakeNote/style";
import { TakeNoteCatalogueItemProps as IProps } from "@/components/TakeNote/type";

const TakeNoteCatalogueItemComponent: React.FC<IProps> = (props: IProps) => {

    const dispatch = useAppDispatch();
    const sidebarState: SidebarState = useAppSelector((state: RootState) => ({ ...state.sidebar }), shallowEqual);

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
        dispatch(setFirstSidebarKey(props.uuid));
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
            <TakeNoteCatalogueItemWrapper onClick={handleCatalogue} className={sidebarState.firstSidebarKey == props.uuid ? 'catalogue-item-active' : ''}>
                <div className="item-icon-title-wrapper">
                    <div className="item-icon">
                        {
                            sidebarState.firstSidebarKey == props.uuid ? (
                                <AiOutlineFolderOpen />
                            ) : (
                                <AiOutlineFolder />
                            )
                        }
                    </div>
                    <div className="item-title">{props.name}</div>
                </div>
            </TakeNoteCatalogueItemWrapper>
        </RightMenu>
    )
}

export default TakeNoteCatalogueItemComponent;