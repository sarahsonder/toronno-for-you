import React from "react";
//style={{ width: "200px", height: "100px", fontSize: "25pt"}}
export const Buttons = () => {
    return (
        <>
            <div className="buttons">
                <a href="/crash-course">
                    <button className="Crash_Course">
                        Crash Course</button>
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="/trip-planning">
                    <button className="Trip_Planning">
                        Trip Planning</button>
                </a>
            </div>
        </>

    )
}