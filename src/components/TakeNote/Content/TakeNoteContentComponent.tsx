import React, { useState, useEffect, useRef } from "react";
import { shallowEqual } from "react-redux";

import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import hljs from 'highlight.js';
// import 'highlight.js/styles/atom-one-light.css';
import 'highlight.js/styles/intellij-light.min.css';

import { VscSync, VscTrash } from "react-icons/vsc";
import { TiEdit, TiEye, TiChevronLeft, TiChevronRight } from "react-icons/ti";

// 导入编辑器的样式
import 'react-markdown-editor-lite/lib/index.css';
import HtmlRender from 'react-markdown-editor-lite/cjs/editor/preview';

import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { SidebarState } from "@/redux/types/sidebar";
import { RootState } from "@/redux/store";
import { closeSecond, openSecond } from "@/redux/slice/sidebar";

import { TakeNoteContentWrapper } from "@/components/TakeNote/style";

const TakeNoteContentComponent: React.FC = () => {

    const dispatch = useAppDispatch();

    const sidebarState: SidebarState = useAppSelector((state: RootState) => ({ ...state.sidebar }), shallowEqual);

    const editorRef = useRef<MdEditor>(null);

    const [content, setContent] = useState<string>("# 大师兄,师傅和二师兄被妖怪抓走啦！\n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 \n\n 12312312 ");
    const [type, setType] = useState<number>(1);

    const mdParser = new MarkdownIt({
        html: true,
        linkify: true,
        typographer: true,
        highlight: function (str, lang) {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return hljs.highlight(lang, str).value
                } catch (__) { }
            }
            return '' // use external default escaping
        }
    });

    useEffect(() => {
        // editorRef.current?.fullScreen(true);
        editorRef.current?.setText(content)
    })

    const handleEditorChange = (data: { text: string, html: string }) => {
        setContent(data.text);
        console.log('handleEditorChange', data.html, data.text);
    }

    const handleEdit = () => {
        setType(2);
    }

    const handleShow = () => {
        setType(1);
    }

    const recycleMenu = () => {
        dispatch(closeSecond());
    }

    const openMenu = () => {
        dispatch(openSecond());
    }

    const renderHTML = (text: string) => {
        // 模拟异步渲染Markdown
        return mdParser.render(text);
    }


    return (
        <TakeNoteContentWrapper>
            <div className="content-wrapper">
                {
                    type == 1 ?
                        <HtmlRender className="preview-wrapper" html={mdParser.render(content)} />
                        :
                        <MdEditor
                            ref={editorRef}
                            style={{ height: '100%', padding: '0 0 40px 0' }}
                            renderHTML={(text: string) => renderHTML(text)}
                            config={{
                                view: { menu: true, md: true, html: true },
                                canView: { menu: true, md: true, html: true, fullScreen: true, hideMenu: true, both: true }
                            }}
                            onChange={handleEditorChange}
                            placeholder={'输入您的内容！'}
                        />
                }
            </div>

            {/* fixed safari浏览器中 fixed布局造成的width不自适应的问题 (https://www.cnblogs.com/savokiss/p/9486240.html) */}
            <div style={{ width: '100%', overflow: 'hidden', position: 'relative' }}>
                <div className="footer-wrapper">
                    <div className="footer-tool-wrapper">
                        {
                            sidebarState.secondSidebar ? (
                                <div className="tool-wrapper" onClick={recycleMenu}>
                                    <TiChevronLeft className="tool-icon" />
                                </div>
                            ) : (
                                <div className="tool-wrapper" onClick={openMenu}>
                                    <TiChevronRight className="tool-icon" />
                                </div>
                            )
                        }

                        {
                            type == 1 ? (
                                <div className="tool-wrapper" onClick={handleEdit}>
                                    <TiEdit className="tool-icon" />
                                </div>
                            ) : (
                                <div className="tool-wrapper" onClick={handleShow}>
                                    <TiEye className="tool-icon" />
                                </div>
                            )
                        }

                        <div className="tool-wrapper">
                            <VscTrash className="tool-icon" />
                        </div>

                        <div className="tool-wrapper">
                            <VscSync className="tool-icon" />
                        </div>

                    </div>
                </div>
            </div>

        </TakeNoteContentWrapper>
    );
}

export default TakeNoteContentComponent;