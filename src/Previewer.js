import React from 'react';
import './TextAreas.css';

export default function Previewer(props) {
    return (
        <div className="text-container">
            {/* need to use value attribute in text area to update rather than just inserting props.text netween textarea element tags*/}
            <textarea className="text-areas" id="preview" value={props.text}>
            
            </textarea>
        </div>
    )
}