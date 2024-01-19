import React, { KeyboardEvent, useState } from "react";
import { AiOutlineFolder } from "react-icons/ai";

import { TakeNoteCatalogueEditInputWrapper } from "../style";
import { TakeNoteCatalogueEditProps } from "../props";

const TakeNoteCatalogueEditComponent: React.FC<TakeNoteCatalogueEditProps> = (props: TakeNoteCatalogueEditProps) => {

    const [value, setValue] = useState<string>('');

    const onKeyUp = (e: KeyboardEvent) => {
        if (e.key == "Enter") {
            if (value != undefined && value != null && value != '') {
                console.log("使用了回车健,值为 input value = ", value);
                props.onEnter(value);

                setValue('');
            }
        }
    }

    return (
        <TakeNoteCatalogueEditInputWrapper>
            <div className="item-icon-title-wapper">
                <div className="item-icon"><AiOutlineFolder /></div>
                <div className="item-input">
                    <input
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        onKeyUp={onKeyUp}
                    />
                </div>
            </div>

        </TakeNoteCatalogueEditInputWrapper>
    )
}

export default TakeNoteCatalogueEditComponent;