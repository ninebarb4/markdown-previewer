import React from 'react';
import './TextAreas.css';
import { useState, useEffect, useRef } from 'react';

export default function Editor(props) {
    //give a default height to editor text area
    const defaultHeight = "40px";
    //useRef hook used to grab text area element
    const textAreaRef = useRef();
    
    function handleChange(element){
        //set "text" held in parent state
        props.setText(element.target.value);
    }

    //when text updated on change use effect will alter scrollHeight of element
   useEffect(() => {
       //first set height back to default height incase user deletes content
       //if they did this scroll height would remain the same but would have large empty text area
        textAreaRef.current.style.height = defaultHeight;
        const scrollHeight = textAreaRef.current.scrollHeight;
        textAreaRef.current.style.height = scrollHeight + "px";
    }, [props.text])

   

    return (
        <div className="text-container">
            <textarea 
            ref={textAreaRef}
            className="text-areas" 
            id="editor" 
            value={props.text}
            style={{paddingTop: "0px", paddingBottom: "0px"}} 
            onChange={handleChange}
            >

            </textarea>
        </div>
    )
}
