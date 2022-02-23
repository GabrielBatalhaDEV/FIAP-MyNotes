import React from "react";
import { Link } from "react-router-dom";
import './boards.css'




function Boards(props){
    return(
        <>
        <Link to={props.to}>
            <div className="boards" >
                    {props.boardName}
            </div>
        </Link>
        </>
    );
}

export default Boards;