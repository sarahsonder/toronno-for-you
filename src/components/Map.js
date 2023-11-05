import {GoogleMap, useLoadScript, Marker, TransitLayerF, Autocomplete,
    DirectionsRenderer} from '@react-google-maps/api';
import React, { useRef, useState } from "react";
import "./App.css";

const [map, setMap] = useState(null);
const [directionsResponse, setDirectionsResponse] = useState(null);
const originRef = useRef();
const destiantionRef = useRef();

const libraries = ['places'];
const mapContainerStyle = {
    width: '50vw',
    height: '50vh',
};
const center = {
    lat: 43.66,
    lng: -79.40,
};

async function calculateRoute() {
    if (originRef.current.value === "" || destiantionRef.current.value === "") {
        return 3;
    }
    const directionsService = new window.google.maps.DirectionsService();
    const results = await directionsService.route({
        origin: originRef.current.value,
        destination: destiantionRef.current.value,
        travelMode: window.google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
}

function clearRoute() {
    setDirectionsResponse(null);
    originRef.current.value = "";
    destiantionRef.current.value = "";
}

const Map = () => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyBFFZEfnHwgKc7fhW4CsllDgBlb8Loufxo',
        libraries,
    });

    if (loadError) {
        return <div>Error loading maps</div>;
    }

    if (!isLoaded) {
        return <div>Loading maps</div>;
    }

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
        <div className="searchbox">
            <div className="row">
                <div className="col-lg-4">
                    <Autocomplete>
                        <input
                            type="text"
                            name="Origin"
                            className="form-control"
                            placeholder="Origin"
                            ref={originRef}
                        />
                    </Autocomplete>
                </div>
                <div className="col-lg-4">
                    <Autocomplete>
                        <input
                            type="text"
                            name="Destication"
                            className="form-control"
                            placeholder="Destication"
                            ref={destiantionRef}
                        />
                    </Autocomplete>
                </div>
                <div className="col-lg-2">
                    <button
                        type="submit"
                        name="submit"
                        className="btn btn-primary"
                        onClick={calculateRoute}
                    >
                        Search
                    </button>
                </div>
                <div className="col-lg-2">
                    <button
                        type="submit"
                        name="clear"
                        className="btn btn-danger"
                        onClick={clearRoute}
                    >
                        Clear
                    </button>
                </div>
            </div>
        </div>
        <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={15}
            center={center}
        >
            <Marker position={center} />
            <TransitLayerF autoUpdate />
            {directionsResponse && (
                <DirectionsRenderer directions={directionsResponse} />
            )}
        </GoogleMap>
        </div>
    )
}
export default Map;