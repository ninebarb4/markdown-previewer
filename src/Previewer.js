import React from 'react';
import './TextAreas.css';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

const marked = require("marked");

marked.setOptions({
    breaks: true,
    highlight: function (code) {
        return Prism.highlight(code, Prism.languages.javascript, 'javascript')
    }
});

export default function Previewer(props) {
    return (
        <div className="text-container">
            <div
            //ref={outputTextArea}
            className="preview-area" 
            dangerouslySetInnerHTML={{__html: marked(props.text)}}
            id="preview" 
            style={{paddingTop: "0px", paddingBottom: "0px", paddingLeft: "1em"}} 
            >
            </div>
        </div>
    )
}