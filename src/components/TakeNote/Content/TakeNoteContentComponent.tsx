import React, { useState, useEffect, useRef } from "react";
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import hljs from 'highlight.js';
// import 'highlight.js/styles/atom-one-light.css';
import 'highlight.js/styles/intellij-light.min.css';

// 导入编辑器的样式
import 'react-markdown-editor-lite/lib/index.css';
import HtmlRender from 'react-markdown-editor-lite/cjs/editor/preview';

import { TakeNoteContentWrapper } from "@/components/TakeNote/style";

const TakeNoteContentComponent: React.FC = () => {

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

    // const onClickEdit = () => {
    //     setType(1);
    // }

    const renderHTML = (text: string) => {
        // 模拟异步渲染Markdown
        return mdParser.render(text);
    }


    return (
        <TakeNoteContentWrapper>
            {
                type == 1 ?
                    <HtmlRender className="preview-wrapper" html={mdParser.render(content)} />
                    :
                    <MdEditor
                        ref={editorRef}
                        style={{ height: '100%', border: '1px solid red' }}
                        renderHTML={(text: string) => renderHTML(text)}
                        config={{
                            view: { menu: true, md: true, html: true },
                            canView: { menu: true, md: true, html: true, fullScreen: true, hideMenu: true, both: true }
                        }}
                        onChange={handleEditorChange}
                        placeholder={'输入您的内容！'}
                    />
            }

        </TakeNoteContentWrapper>
    );
}

export default TakeNoteContentComponent;