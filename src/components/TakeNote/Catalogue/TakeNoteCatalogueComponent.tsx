import React, { useState } from "react";
import { shallowEqual } from "react-redux";
import {
    VscChevronRight,
    VscNewFolder,
    VscChevronDown,
} from "react-icons/vsc";
import { AiOutlineCloudSync, AiOutlineSetting } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";

import TakeNoteCatalogueTitleComponent from "@/components/TakeNote/Catalogue/TakeNoteCatalogueTitleComponent";
import TakeNoteCatalogueItemComponent from "@/components/TakeNote/Catalogue/TakeNoteCatalogueItemComponent";
import TakeNoteCatalogueEditComponent from "@/components/TakeNote/Catalogue/TakeNoteCatalogueEditComponent";
import { RootState } from '@/redux/store';
import { SidebarState } from "@/redux/types/sidebar";
import { useAppSelector } from "@/redux/hook";

import { TakeNoteCatalogueWrapper } from "@/components/TakeNote/style";
import { TakeNoteCatalogueMenu } from "@/components/TakeNote/type";

const TakeNoteCatalogueComponent: React.FC = () => {

    const sidebarState: SidebarState = useAppSelector((state: RootState) => ({ ...state.sidebar }), shallowEqual);

    const [cataItem, setCataItem] = useState<TakeNoteCatalogueMenu[]>([
        {
            uuid: 'jishutie',
            title: "技术贴",
        },
        {
            uuid: 'dog-bone',
            title: "dog bone",
        },
        {
            uuid: 'bibeiruanjian',
            title: "必备软件",
        },
        {
            uuid: 'poe-luyouqi',
            title: "Poe路由器",
        },
        {
            uuid: 'slyours',
            title: "四联优侍",
        },
        {
            uuid: 'slyours-jianke',
            title: "健科公司文档",
        },
        {
            uuid: 'ruxiaoyi',
            title: "如小意",
        },
    ]);

    const [triggerSubMenu, setTriggerSubMenu] = useState<boolean>(true);
    const [addItem, setAddItem] = useState<boolean>(false);

    const triggerSubOnClick = () => {
        setTriggerSubMenu(!triggerSubMenu);
    }

    const handleAddItem = () => {
        setTriggerSubMenu(true);
        setAddItem(true);
    }

    const onEditInputEnter = (value: string) => {
        let temp = [...cataItem];
        temp.push({
            title: value,
            uuid: uuidv4()
        });
        setCataItem(temp);

        clearAddInput();
    }

    const clearAddInput = () => {
        setAddItem(false);
    }

    return sidebarState.firstSidebar ?
        (
            <TakeNoteCatalogueWrapper>
                <TakeNoteCatalogueTitleComponent />

                <div className="setting-container">
                    <div className="setting-icon">
                        <AiOutlineSetting className="vsc-chevron-right" />
                    </div>
                    <div className="setting-title">Setting</div>
                </div>

                <div className="setting-container">
                    <div className="setting-icon">
                        <AiOutlineCloudSync className="vsc-chevron-right" />
                    </div>
                    <div className="setting-title">sync</div>
                </div>

                <div className="catelogue-container">
                    <div className="container-wapper">
                        <div className="title-container">
                            <div className="wapper title-wapper" onClick={triggerSubOnClick}>
                                {
                                    triggerSubMenu ?
                                        <VscChevronDown className="vsc-chevron-right" />
                                        :
                                        <VscChevronRight className="vsc-chevron-right" />
                                }
                                <span>CATEGORIES</span>
                            </div>

                            <div className="wapper new-folder-wapper" onClick={handleAddItem}>
                                <VscNewFolder className="vsc-new-folder" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="catelogue-item-container">
                    {
                        triggerSubMenu ?
                            cataItem.map((item: TakeNoteCatalogueMenu, index: number) => {
                                return <TakeNoteCatalogueItemComponent
                                    key={`${index}-${item.uuid}`}
                                    uuid={item.uuid}
                                    name={`${item.title}`}
                                />
                            })
                            :
                            null
                    }

                    {
                        addItem ?
                            <TakeNoteCatalogueEditComponent
                                onEnter={onEditInputEnter}
                                onClear={clearAddInput}
                            />
                            :
                            null
                    }

                </div>
            </TakeNoteCatalogueWrapper>
        )
        :
        null;
}

export default TakeNoteCatalogueComponent;