import React, { MouseEvent, useState } from 'react'
import { Map as MapGl, MapLayerMouseEvent } from 'react-map-gl';
import MAPBOX_API_KEY from '../../keys';

type MapProps = {
    lat?: number,
    lng?: number,
    Marker?: JSX.Element,
    handleClickOnMap: Function,
}

function Map({ lat, lng, Marker, handleClickOnMap }: MapProps) {
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

    const [viewState] = useState({
        longitude: lng || defaultProps.center.lng,
        latitude: lat || defaultProps.center.lat,
        zoom: 10,
    });

    return (
        <MapGl
            initialViewState={viewState}
            reuseMaps
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxAccessToken={MAPBOX_API_KEY}
            onClick={(e: MapLayerMouseEvent) => {
                handleClickOnMap(e);
            }}>
            {Marker}
        </MapGl>
    );
}

export default Map;