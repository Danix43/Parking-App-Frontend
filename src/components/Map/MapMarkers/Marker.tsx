import React from 'react'
import { Marker as MapMarker } from "react-map-gl"

type MarkerTypes = {
    lat: number,
    lng: number,
}

function Marker({ lat, lng }: MarkerTypes) {
    return (
        <MapMarker
            latitude={lat}
            longitude={lng}
        />
    );
}

export default Marker