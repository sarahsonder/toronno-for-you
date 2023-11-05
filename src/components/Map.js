import { GoogleMap, useLoadScript, Marker, TransitLayerF} from '@react-google-maps/api';
import React from "react";

const libraries = ['places'];
const mapContainerStyle = {
    width: '50vw',
    height: '50vh',
};
const center = {
    lat: 43.66,
    lng: -79.40,
};

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
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={15}
                center={center}
            >
                <Marker position={center} />
                <TransitLayerF autoUpdate/>
            </GoogleMap>
        </div>
    )
}
export default Map;