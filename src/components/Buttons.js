import React from "react";

export const Buttons = () => {
    return (
        <>
            <div className="buttons">
                <button style={{ width: "200px", height: "100px", fontSize: "25pt"}}>
                    Crash Course</button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="/trip-planning">
                    <button className="Trip_Planning" style={{ width: "200px", height: "100px", fontSize: "25pt"}}>Trip Planning</button>
                </a>
            </div>
        </>

    )
}