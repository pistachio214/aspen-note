import React, { useState } from "react";

import Modal from 'react-modal';

import { TakeNoteSettingProps, TakeGitBaseic } from "@/components/TakeNote/type";
import { TakeNoteSettingModalWrapper } from "@/components/TakeNote/style";

const TakeNoteSettingModal: React.FC<TakeNoteSettingProps> = (props: TakeNoteSettingProps) => {

    const [temp, setTemp] = useState<TakeGitBaseic>({
        owner: '',
        repo: '',
        authorization: ''
    });

    const customStyles = {
        overlay: {
            backgroundColor: 'rgba(123, 121, 121, 0.85)'
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    const handleSubmit = () => {
        console.log('发送到SQLite, temp=', temp);
    }

    return (
        <>
            <Modal
                isOpen={props.isOpen}
                onAfterOpen={props.onAfterOpen}
                onRequestClose={props.onRequestClose}
                style={customStyles}
            >
                <TakeNoteSettingModalWrapper>
                    <h2>设置</h2>
                    <form>
                        <div className="form-container">
                            <div className="form-item">
                                <div className="item-label">用户名称</div>
                                <div className="item-content">
                                    <input
                                        placeholder="请输入您的Github用户名称"
                                        defaultValue={temp.owner}
                                        onChange={(e) => {
                                            let data = {
                                                ...temp, ...{
                                                    owner: e.currentTarget.value
                                                }
                                            };
                                            setTemp(data);
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="form-item">
                                <div className="item-label">仓库名称</div>
                                <div className="item-content">
                                    <input
                                        placeholder="请输入您要存储的仓库名称"
                                        defaultValue={temp.repo}
                                        onChange={(e) => {
                                            let data = {
                                                ...temp, ...{
                                                    repo: e.currentTarget.value
                                                }
                                            };
                                            setTemp(data);
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="form-item">
                                <div className="item-label">Authorization</div>
                                <div className="item-content">
                                    <input
                                        placeholder="请输入您设置的Authorization"
                                        defaultValue={temp.authorization}
                                        onChange={(e) => {
                                            let data = {
                                                ...temp, ...{
                                                    authorization: e.currentTarget.value
                                                }
                                            };
                                            setTemp(data);
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="form-item form-footer">

                                <div className="footer-button">
                                    <button type="button" className="primary" onClick={() => handleSubmit()}>确定</button>
                                </div>

                                <div className="footer-button">
                                    <button type="button" className="default" onClick={() => props.onClose()}>取消</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </TakeNoteSettingModalWrapper>

            </Modal>
        </>
    );
}

TakeNoteSettingModal.defaultProps = {
    isOpen: false,
    onAfterOpen: () => { },
    onRequestClose: () => { },
    onClose: () => { }
}

export default TakeNoteSettingModal; 