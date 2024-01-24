import React, { KeyboardEvent, useState, FocusEvent } from "react";
import { AiOutlineFolder } from "react-icons/ai";

import { TakeNoteCatalogueEditInputWrapper } from "@/components/TakeNote/style";
import { TakeNoteCatalogueEditProps as IProps } from "@/components/TakeNote/props";

const TakeNoteCatalogueEditComponent: React.FC<IProps> = (props: IProps) => {

    const [value, setValue] = useState<string>('');

    const onKeyUp = (e: KeyboardEvent) => {
        if (e.key == "Enter") {
            if (value != undefined && value != null && value != '') {
                props.onEnter(value);
            }
            setValue('');
        }
    }

    const onBlur = (e: FocusEvent) => {
        if (value != undefined && value != null && value != '') {
            console.log("使用了回车健,值为 input value = ", value);
            props.onEnter(value);
        } else {
            props.onClear();
        }
        setValue('');
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
                        onBlur={onBlur}
                        placeholder="please input title"
                    />
                </div>
            </div>

        </TakeNoteCatalogueEditInputWrapper>
    )
}

export default TakeNoteCatalogueEditComponent;