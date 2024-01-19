import React, { useState } from "react";
import TakeNoteCatalogueTitleComponent from "./TakeNoteCatalogueTitleComponent.tsx";
import { VscChevronRight, VscNewFolder, VscChevronDown } from "react-icons/vsc";

import { TakeNoteCatalogueWrapper } from "../style";
import TakeNoteCatalogueItemComponent from "./TakeNoteCatalogueItemComponent.tsx";
import TakeNoteCatalogueEditComponent from "./TakeNoteCatalogueEditComponent.tsx";

const TakeNoteCatalogueComponent: React.FC = () => {

    const [cataItem, setCataItem] = useState<string[]>([
        "", "", "", "", "", "", "", "", "", "", "", ""
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
        console.log('传递到前面来的值', value)

        let temp = [...cataItem];
        temp.push(value);
        setCataItem(temp);

        setAddItem(false);
    }

    return (
        <TakeNoteCatalogueWrapper>
            <TakeNoteCatalogueTitleComponent />

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

                        <div className="wapper new-folder-wapper" onClick={handleAddItem}> <VscNewFolder className="vsc-new-folder" /> </div>
                    </div>
                </div>
            </div>

            <div className="catelogue-item-container">
                {
                    triggerSubMenu ?
                        cataItem.map((item: string, index: number) => {
                            return <TakeNoteCatalogueItemComponent
                                key={`${index}-${item}`}
                                name={`${index + 1}-文件夹名称-${index}`}
                            />
                        })
                        :
                        <></>
                }

                {
                    addItem ? <TakeNoteCatalogueEditComponent onEnter={onEditInputEnter} /> : <></>
                }

            </div>
        </TakeNoteCatalogueWrapper>
    );
}

export default TakeNoteCatalogueComponent;