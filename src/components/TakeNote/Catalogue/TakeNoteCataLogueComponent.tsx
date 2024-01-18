import React, { useState } from "react";
import TakeNoteCataLogueTitleComponent from "./TakeNoteCataLogueTitleComponent";
import { VscChevronRight, VscNewFolder, VscChevronDown } from "react-icons/vsc";

import { TakeNoteCatalogueWapper } from "../style";
import TakeNoteCataLogueItemComponent from "./TakeNoteCataLogueItemComponent";

const TakeNoteCataLogueComponent: React.FC = () => {

    const cataItem = [
        "", "", "", "", "", "", "", "", "", "", "", ""

    ];
    const [triggerSubMenu, setTriggerSubMenu] = useState<boolean>(true);

    const triggerSubOnClick = () => {
        setTriggerSubMenu(!triggerSubMenu);
    }

    return (
        <TakeNoteCatalogueWapper>
            <TakeNoteCataLogueTitleComponent />

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

                        <div className="wapper new-folder-wapper"> <VscNewFolder className="vsc-new-folder" /> </div>
                    </div>
                </div>
            </div>

            <div className="catelogue-item-container">
                {
                    triggerSubMenu ?
                        cataItem.map((item: string, index: number) => {
                            return <TakeNoteCataLogueItemComponent
                                key={`${index}-${item}`}
                                name={`${index + 1}-文件夹名称-${index}`}
                            />
                        })
                        :
                        <></>
                }
                <>New Catelogue</>
            </div>
        </TakeNoteCatalogueWapper>
    );
}

export default TakeNoteCataLogueComponent;