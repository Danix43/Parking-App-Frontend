import Map from 'components/Map/Map';
import Marker from 'components/Map/MapMarkers/Marker';
import TextInput from 'components/TextInput/TextInput';
import { saveSpot } from 'logic/handling';
import { ParkingSpot } from 'logic/sampledata';
import { MapLayerMouseEvent } from 'mapbox-gl';
import React, { useState } from 'react'
import styled from 'styled-components';

const BaseContainer = styled.form`
    display: flex;
    flex-direction: column;
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: row;

    padding-bottom: 4rem;
`;

const MapContainer = styled.div`
    height: 40rem;
    width: 100%;
    padding: 1rem;
`;

const RegisterButton = styled.button`

`;

function AddNewSpotWindow() {
    const [coords, setCoords] = useState([0, 0]);
    const [marker, setMarker] = useState(<></>);

    const handleSpotRegistration = (e: any) => {
        e.preventDefault();

        const spot: ParkingSpot = {
            id: "23",
            isUsed: false,
            locationName: "test",
            longitude: coords[0],
            latitude: coords[1]
        }

        saveSpot(spot);
    }

    const addMarkerOnMap = (e: MapLayerMouseEvent) => {
        const lat = e.lngLat.lat;
        const lng = e.lngLat.lng;

        setCoords([lat, lng]);

        setMarker(
            <Marker lat={lat} lng={lng} />
        )
    }

    return (
        <BaseContainer onSubmit={(e) => {
            e.preventDefault()
            handleSpotRegistration(e)
        }}>
            <h1 style={{
                textAlign: "center",
                borderBottom: "3px solid white",
                paddingBottom: "1rem",
                marginBottom: "0"
            }}>Add a new spot!</h1>

            <InfoContainer style={{
                display: "flex",
                flexDirection: "row",
                gap: '3rem',

                paddingLeft: "3rem"
            }}>
                {/* TODO: add geolocation for the location field */}
                <TextInput title='Cost per hour' type='number' placeHolder='0.5' />

                <MapContainer>
                    <Map
                        handleClickOnMap={(e: MapLayerMouseEvent) => {
                            addMarkerOnMap(e);
                        }}
                        Marker={marker}
                    />
                    <h1 style={{ textAlign: "center", justifySelf: "center" }}>Click a point on the map</h1>
                </MapContainer>
            </InfoContainer>

            <RegisterButton>
                Register
            </RegisterButton>
        </BaseContainer>
    );
}

export default AddNewSpotWindow;