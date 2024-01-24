import styled from "styled-components";

export const TakeNoteWrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
`

export const TakeNoteCatalogueWrapper = styled.div`
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
                        -webkit-user-select: none;
                        -moz-user-select: none;
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

export const TakeNoteCatalogueTitleWrapper = styled.div`
    width: 100%;
    height: 40px;
    margin: 0.5rem 0%;
    padding-top: 1rem;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;

    display: flex;
    justify-content: center;
    
`

export const TakeNoteCatalogueItemWrapper = styled.div`
    padding: 0 0.5rem;
    height: 35px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 0.9rem;
    flex-shrink: 0;
    cursor: default;


    .item-icon-title-wapper {
        height: 35px;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding-left: 10px;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;

        .item-title {
            padding-left: 0.75rem;
            user-select: none;
            -webkit-user-select: none;
            -moz-user-select: none;
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
        background: #3a3a3a;
        color: white;

        .outline {
            display: block;
            height: 35px;
            display: flex;
            align-items: center;
        }
    }

`

export const TakeNoteCatalogueEditInputWrapper = styled.div`
    padding: 0 0.5rem;
    height: 35px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 0.9rem;
    flex-shrink: 0;
    background: #3a3a3a;

    .item-icon-title-wapper {
        height: 35px;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding-left: 10px;

        .item-input {
            padding-left: 0.75rem;
            padding-right: 0.75rem;

            input {
                padding: 0;
                height: 25px;
                width: 80%;
                padding-right: 10px;
                caret-color: white;
                color: white;
                background-color: transparent;
                font-size: 14px;

                border-radius: 0;
                border-top: none;
                border-left: none;
                border-right: none;
                box-shadow: none;
                border-bottom: 1px solid white;
            }
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
        color: white;
        .outline {
            display: block;
            height: 35px;
            display: flex;
            align-items: center;
        }
    }
`

export const TakeNoteMenuWrapper = styled.div`
    height: 100%;
    width: 300px;

    background-color: #e5e5e5;
    border-right: 1px solid #cccccc;

    display: flex;
    flex-direction: column;
`

export const TakeNoteSearchWrapper = styled.div`
    width: 100%;
    height: 60px;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;

    border-bottom: 1px solid #d1d1d1;

    .search-input {
        padding: 0 1rem;
        height: 40px;
        width: 250px;
        font-size: 14px;
    }
`

export const TakeNoteMenuItemWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    overflow-y: auto; /* 设置垂直滚动条 */

    .item {
        height: 70px;
        border-bottom: 1px solid #d1d1d1;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-shrink: 0;

        &:hover {
            background-color: #d8d8d8;
        }

        .title {
            padding: 10px 15px 0 15px;
            font-weight: 500;
        }

        .updated-at {
            padding: 0 15px 5px 15px;
            font-size: 12px;
            display: flex;
            flex-direction: row;
            align-items: center;
            
            .icon {
                margin-right: 5px;
            }
        }
    }
`

export const TakeNoteContentWrapper = styled.div`
    flex: 1;
    height: 100%;

    background-color: #fafafa;

`