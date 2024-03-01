import React from "react";

import {
    AiOutlineFolder,
    AiOutlineFolderOpen
} from "react-icons/ai";
import { shallowEqual } from "react-redux";

import { SidebarState } from "@/redux/types/sidebar";
import { useAppSelector, useAppDispatch } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { setFirstSidebarKey } from "@/redux/slice/sidebar";


import { TakeNoteCatalogueItemWrapper } from "@/components/TakeNote/style";
import { TakeNoteCatalogueItemProps as IProps } from "@/components/TakeNote/type";

const TakeNoteCatalogueItemComponent: React.FC<IProps> = (props: IProps) => {

    const dispatch = useAppDispatch();
    const sidebarState: SidebarState = useAppSelector((state: RootState) => ({ ...state.sidebar }), shallowEqual);

    const handleCatalogue = () => {
        dispatch(setFirstSidebarKey(props.uuid));
    }

    return (
        <TakeNoteCatalogueItemWrapper
            className={sidebarState.firstSidebarKey == props.uuid ? 'catalogue-item-active' : ''}
            onClick={handleCatalogue}
        >
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
    )
}

export default TakeNoteCatalogueItemComponent;