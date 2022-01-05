import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Finder } from "./components/Finder";



export const OpggApp = () => {

    return (
        <div>
            <h1>Opgg App</h1>

            <Finder />
        </div>
    )
}
