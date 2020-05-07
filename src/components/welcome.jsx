import React from "react"
import { Imag } from "../components/imager"
import {Game } from "../components/board"

const Title = () => <div>Gra w kolko i krzyzyk</div>
export const MainBundle = () => {
    return (
        <>
            <Title />
            <Title />
            <Title />
            <Imag />
            <Game />
            
        </>
    );
}
