import React from "react";
import {Buttons} from "./Buttons";
//const link1 = "CoronationPark.jpg"

const LandingPage = () => {
    return (
        <div className="landingPage">
            <h1>ToronnoForYou❣️</h1>
            <h2> Your one-stop-shop for all things Toronto Transit</h2>
            <Buttons/>
            <img src="CoronationPark.jpg" alt="Picture of Toronto" />
        </div>
    )
}

export default LandingPage;