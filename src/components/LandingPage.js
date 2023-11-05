import React from "react";
import {Buttons} from "./Buttons";

const LandingPage = () => {
    return (
        <div className="landingPage">
            <h1>ToronnoForYou❣️</h1>
            <h2> Your one-stop-shop for all things Toronto Transit</h2>
            <Buttons/>
            <img src={"https://www.toronto.ca/wp-content/uploads/2017/07/8e31-explore-visitor-banner.jpg"} alt="Picture of Toronto" />
        </div>
    )
}

export default LandingPage;