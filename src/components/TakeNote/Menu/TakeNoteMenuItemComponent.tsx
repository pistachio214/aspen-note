import React, { useEffect, useState } from "react";
import { BiCalendar } from "react-icons/bi";
import { shallowEqual } from "react-redux";
import { v4 as uuidv4 } from 'uuid';

import { useAppSelector } from "@/redux/hook";
import { SidebarState } from "@/redux/types/sidebar";
import { RootState } from "@/redux/store";

import { TakeNoteMenuItemWrapper } from "@/components/TakeNote/style";
import { TakeNoteItem } from "../type";

const TakeNoteMenuItemComponent: React.FC = () => {

    const sidebarState: SidebarState = useAppSelector((state: RootState) => ({ ...state.sidebar }), shallowEqual);

    const [contentItem, setContentItem] = useState<TakeNoteItem[]>([
        {
            uuid: uuidv4(),
            title: 'Welcome to Takenote!',
            p_uuid: uuidv4(),
            updated_at: '2023-12-12 12:12:12',
            content: "# 大师兄,师傅和二师兄被妖怪抓走啦！\n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 "
        },
        {
            uuid: uuidv4(),
            title: '九阳真经',
            p_uuid: uuidv4(),
            updated_at: '2023-12-12 08:12:12',
            content: "# 大师兄,师傅和二师兄被妖怪抓走啦！\n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 "
        }
    ]);

    useEffect(() => {
        let firstSidebarKey = sidebarState.firstSidebarKey;

        if (firstSidebarKey != '' && firstSidebarKey != undefined && firstSidebarKey != null) {
            console.log('这里跟着变')

            const data = [
                {
                    uuid: uuidv4(),
                    title: `Welcome to Takenote! - ${sidebarState.firstSidebarKey}`,
                    p_uuid: uuidv4(),
                    updated_at: '2023-12-12 12:12:12',
                    content: "# 大师兄,师傅和二师兄被妖怪抓走啦！\n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 "
                },
                {
                    uuid: uuidv4(),
                    title: `九阳真经 - ${sidebarState.firstSidebarKey}`,
                    p_uuid: uuidv4(),
                    updated_at: '2023-12-12 08:12:12',
                    content: "# 大师兄,师傅和二师兄被妖怪抓走啦！\n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 "
                }
            ];

            setContentItem(data);
        }

    }, [sidebarState.firstSidebarKey])

    return (
        <TakeNoteMenuItemWrapper>
            {
                contentItem.map((item: TakeNoteItem, _: number) => {
                    return (
                        <div className="item" key={item.uuid}>
                            <div className="title" aria-label={item.title}>
                                {item.title}
                            </div>
                            <div className="updated-at">
                                <BiCalendar className="icon" />
                                {item.updated_at}
                            </div>
                        </div>
                    )
                })
            }
        </TakeNoteMenuItemWrapper>
    );
}

export default TakeNoteMenuItemComponent;