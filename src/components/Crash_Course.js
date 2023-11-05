import React from "react"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const link1 = "https://cdn-res.keymedia.com/cdn-cgi/image/f=auto/https://cdn-res.keymedia.com/cms/images/us/069/0132_637141014913266235.jpg"

export const Crash_Course = () => {
    return(
        <div className="crash-course">
            <h1>Welcome to the 6ix</h1>
            <h2>Toronto is made up of six boroughs, but how do we get around?</h2>
            <Subway/>
            <Streetcar/>
        </div>
    )
}

const Subway = ()=> {
    return(
        <div style={{ display: 'flex', width: 1200, padding: 30 }}>
            <Row>
                <Col><h3>Subway</h3></Col>
                <Col>~ More than 100 years of service carrying over 31 billion customers
                </Col>
                <Col>~ Three rapid heavy-rail lines extending across the city with 70 stations</Col>
                <Col> <br></br> <b>Consist of:</b> <br></br>
                    <b>Line 1 (Yonge-University):</b> Canada's first subway line and U-shaped line that mainly runs north-south with 38 stations
                    Serves Toronto and runs into the city of Vaughan (York Region)
                    <br></br>
                    <b>Line 2 (Bloor-Danforth):</b> Second longest line with 31 stations mainly running east-west<br></br>
                    <b>Line 4:</b> System’s newest and shortest line with 5 stations running east-west <br></br> </Col>
            </Row>
            <img src={link1} alt="Image of a subway"/>
        </div>)
}

const Streetcar = () => {
    return (
        <div style={{ display: 'block', width: 700, padding: 30 }}>
            <h3>Streetcar</h3>
            <Row>
                <Col>~ Consist of 9 streetcar lines and 4 night networks
                </Col>
                <Col>
                    ~ Accessibility Friendly
                </Col>
            </Row>
        </div>
    )
}



export default Crash_Course;