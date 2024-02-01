import React, { useEffect, useRef } from "react";

// 导入编辑器的样式
import 'react-markdown-editor-lite/lib/index.css';
import 'highlight.js/styles/atom-one-light.css';

import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import hljs from 'highlight.js';
// import 'highlight.js/styles/intellij-light.min.css';

import { TakeNotePreviewProps } from "@/components/TakeNote/type";
import { TakeNoteContentWrapper } from "@/components/TakeNote/style";


const TakeNotePreviewContentComponent: React.FC<TakeNotePreviewProps> = (props: TakeNotePreviewProps) => {

    const editorRef = useRef<MdEditor>(null);

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
        editorRef.current?.setText(props.content)
    })

    const renderHTML = (text: string) => {
        // 模拟异步渲染Markdown
        return mdParser.render(text);
    }

    return (
        <TakeNoteContentWrapper>
            <div className="content-wrapper">
                <MdEditor
                    ref={editorRef}
                    style={{ height: '100%', padding: '0 0 40px 0' }}
                    renderHTML={(text: string) => renderHTML(text)}
                    config={{
                        view: { menu: false, md: false, html: true },
                    }}
                    htmlClass="preview-wrapper custom-html-style"
                />
            </div>

        </TakeNoteContentWrapper>
    );
}

export default TakeNotePreviewContentComponent;