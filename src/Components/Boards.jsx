import React from "react";
import { Link } from "react-router-dom";


function Boards(props){
    return(
        <>
        <Link to={props.to} className="boards">
            <div>
                <p>
                    {props.boardName}
                </p>
            </div>
        </Link>
        </>
    );
}

export default Boards;