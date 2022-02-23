import React from "react";
import Boards from "../Components/Boards";
import '../Components/boards.css'

function Home(){
    return(     
        <>
            <Boards to="/Board" boardName="Board No 1" />
            <Boards to="/Board" boardName="Board No 2" />
        </>
    );
}

export default Home;