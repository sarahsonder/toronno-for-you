import React from "react";

export const Buttons = () => {
    return (
        <>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <button style={{ width: "200px", height: "100px", fontSize: "25pt"}}>
                    Crash Course</button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button className="Trip_Planning" style={{ width: "200px", height: "100px", fontSize: "25pt"}}>Trip Planning</button>
            </div>
        </>

    )
}