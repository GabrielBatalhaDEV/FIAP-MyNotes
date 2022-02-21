import React from "react";
import './notes.css'

function Notes(props) {
    return (
        <ul>
            <li>
                <a href="/#" contentEditable="true" suppressContentEditableWarning="true">
                    <h2>{props.title}</h2>
                    <p>{props.text}</p>
                </a>
            </li>
        </ul>
    );
}


export default Notes;