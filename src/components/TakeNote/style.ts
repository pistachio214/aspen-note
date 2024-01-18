import styled from "styled-components";

export const TakeNoteWapper = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
`

export const TakeNoteCatalogueWapper = styled.div`
    height: 100%;
    width: 240px;

    color: #d0d0d0;
    background-color: #2d2d2d;
    border-right: 1px solid #141414;

    display: flex;
    flex-direction: column;

    .catelogue-container {
        display: flex;
        flex-direction: column;

        padding: 0.5rem 0;

        .container-wapper {
            display: flex;
            flex-direction: row;
            align-items: center;

            .title-container {
                width: 100%;
                padding: 0 0.5rem;

                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;

                .title-wapper {
                    span {
                        color: #7a7a7a;
                        font-size: 0.8rem;
                        font-weight: bold;
                        padding-left: 0.75rem;
                        cursor: default;
                        user-select: none;
                    }

                    &:hover {
                        .vsc-chevron-right {
                            color: #FFFFFF;
                        }
                    }
                }

                .new-folder-wapper {
                    &:hover {
                        .vsc-new-folder {
                            color: #FFFFFF;
                        }
                    }
                }

                .wapper {
                    display: flex;
                    align-items: center;
                    
                    .vsc-chevron-right {
                        color: #909090;
                        width: 15px;
                    }
                }
            }
        }
    }

    .catelogue-item-container {
        margin-bottom: 10px;
        width: 100%;
        height: 100%;
        overflow-y: auto; /* 设置垂直滚动条 */

        display: flex;
        flex-direction: column;

    }
`

export const TakeNoteCatalogueTitleWapper = styled.div`
    width: 100%;
    margin: 0.5rem 0%;
    padding-top: 1rem;
    user-select: none;

    display: flex;
    justify-content: center;
    
`

export const TakeNoteCataLogueItemWapper = styled.div`
    padding: 0 0.5rem;
    height: 35px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 0.9rem;
    flex-shrink: 0;

    .item-icon-title-wapper {
        height: 35px;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding-left: 10px;

        .item-title {
            padding-left: 0.75rem;
            user-select: none;
        }
    }

    .item-icon {
        height: 35px;
        display: flex;
        align-items: center;
    }

    .outline {
        display: none;
    }

    &:hover {
        background: #202020;
        color: white;

        .outline {
            display: block;
            height: 35px;
            display: flex;
            align-items: center;
        }
    }

`

export const TakeNoteMenuWapper = styled.div`
    height: 100%;
    width: 330px;

    background-color: #e5e5e5;
    border-right: 1px solid #cccccc;
`

export const TakeNoteContentWapper = styled.div`
    flex: 1;
    height: 100%;

    background-color: #fafafa;

`