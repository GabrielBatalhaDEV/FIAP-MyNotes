import React from "react";
import imgBoard from '../img/board.jpg'
import Boards from "../Components/Boards";
import './home.css'

function Home(){
    return(     
        <>
            <Boards to="/Board" boardName="Board No 1"><img alt="Board No 1" src={imgBoard} className="board" /></Boards>
            <Boards to="/Board" boardName="Board No 1" />
        </>
    );
}

export default Home;