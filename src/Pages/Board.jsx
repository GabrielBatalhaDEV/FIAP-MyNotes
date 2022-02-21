import React from "react";
import Notes from '../Components/Notes'

function Board(props){

    return(
        <>
            <Notes title='Note One..: ' text='Este é nosso primeiro note...'/>
            <Notes title='Note Two..: ' text='Este é nosso segundo note...'/>
        </>
    );
}

export default Board;