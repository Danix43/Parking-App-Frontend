import React from 'react'
import { Map as MapGl, Marker } from 'react-map-gl';
import MAPBOX_API_KEY from '../../keys';


type MapProps = {
    lat: number,
    lng: number,
}

function Map({ lat, lng }: MapProps) {
    type MapDefaultPropTypes = {
        center: {
            lat: number,
            lng: number,
        },
        zoom: number,
    }

    const defaultProps: MapDefaultPropTypes = {
        center: { lat: 44.4378042, lng: 26.0244267 },
        zoom: 11
    };

    return (
        <MapGl
            initialViewState={{
                latitude: lat,
                longitude: lng,
                zoom: defaultProps.zoom
            }}
            reuseMaps
            longitude={lng}
            latitude={lat}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxAccessToken={MAPBOX_API_KEY}
        >
            <Marker longitude={lng} latitude={lat}>
            </Marker>
        </MapGl>
    );
}

export default Map;