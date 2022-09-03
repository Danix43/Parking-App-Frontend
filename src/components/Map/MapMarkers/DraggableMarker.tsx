import React from 'react'
import { Marker, MarkerDragEvent } from 'react-map-gl'

type DraggalbeMarkerTypes = {
    lat: number,
    lng: number,
    onDragStart: Function,
    onDrag: Function,
    onDragEnd: Function,
}

function DraggableMarker({ lat, lng, onDragStart, onDrag, onDragEnd }: DraggalbeMarkerTypes) {
    return (
        <Marker
            latitude={lat}
            longitude={lng}
            draggable
            onDragStart={(dragEvent: MarkerDragEvent) => onDragStart(dragEvent)}
            onDrag={(dragEvent: MarkerDragEvent) => onDrag(dragEvent)}
            onDragEnd={(dragEvent: MarkerDragEvent) => onDragEnd(dragEvent)}
        />
    )
}

export default DraggableMarker