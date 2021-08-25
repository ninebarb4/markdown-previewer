import React from 'react';
import './TextAreas.css';

export default function Editor(props) {
    function handleChange(e){
        console.log(e.target.value);
        props.setText(e.target.value);
    }
    return (
        <div className="text-container">
            <textarea className="text-areas" id="editor" onChange={handleChange}>

            </textarea>
        </div>
    )
}
