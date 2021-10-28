import React from 'react';
import './TextAreas.css';
//Prism and the themes used for highlighting.  I believe it used default syntax highlihtting theme
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

const marked = require("marked");

//https://marked.js.org/using_advanced#options
//breaks: true - if there are line breaks it adds <br> tags to compiled html
//highlight function set to return the Prism.js highlight method
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
            className="preview-area" 
            //this is used instead of set innerHTML when using react
            dangerouslySetInnerHTML={{__html: marked(props.text)}}
            id="preview" 
            style={{paddingTop: "0px", paddingBottom: "0px", paddingLeft: "1em"}} 
            >
            </div>
        </div>
    )
}