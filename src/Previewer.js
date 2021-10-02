import React from 'react';
import './TextAreas.css';
import { useState, useEffect, useRef } from 'react';


const marked = require("marked");

export default function Previewer(props) {
    const defaultHeight = "40px";
    const outputTextArea = useRef();

    useEffect(() => {
        //first set height back to default height incase user deletes content
        //if they did this scroll height would remain the same but would have large empty text area
        outputTextArea.current.style.height = defaultHeight;
         const scrollHeight = outputTextArea.current.scrollHeight;
         outputTextArea.current.style.height = scrollHeight + "px";
     }, [props.text])


    return (
        <div className="text-container">
            <textarea 
            ref={outputTextArea}
            className="text-areas" 
            id="previewer" 
            value={marked(props.text)}
            style={{paddingTop: "0px", paddingBottom: "0px"}} 
            >

            </textarea>
            
        </div>
    )
}