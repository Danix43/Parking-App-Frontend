import React, { useState } from 'react'
import styled from 'styled-components';
import { getSpotById } from '../../logic/handling';
import { ParkingSpot } from '../../logic/sampledata';
import LabelWithData from '../LabelWithData/LabelWithData';
import Map from '../Map/Map';

const BaseContainer = styled.div`
    display: flex;
    flex-direction: column;

    height: 100%;
`;

const SearchContainer = styled.form`
    display: flex;
    flex-direction: column;
`;

const DataContainer = styled.div`
    display: flex;
    flex-direction: column;

    border-right: 3px solid white;
    padding: 1rem;
`;

const MapContainer = styled.div`
    height: 50rem;
    width: 100%;
    padding: 1rem;
`;

// TODO: refactor code
function SeeSpotStatusWindow() {
    const [currentSpot, setCurrentSpot] = useState<ParkingSpot | null>(null);
    const [spotId, setSpotId] = useState('');

    const displaySearchWindow = () => {

        return (
            <SearchContainer onSubmit={(e) => {
                e.preventDefault();
                setCurrentSpot(getSpotById(spotId));
            }}>
                <label>Enter the id of the parking spot:</label>
                <input type="text" value={spotId} onChange={(event) => setSpotId(event.currentTarget.value)}></input>
                <input type="submit" value="Search"></input>
            </SearchContainer>
        )
    }

    const displaySpotDetails = (spotDetails: ParkingSpot) => {
        return (
            <>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <DataContainer>
                        <LabelWithData labelTitle='ID' dataContent={`${spotDetails.id}`} />
                        <LabelWithData labelTitle='Is Used?' dataContent={`${spotDetails.isUsed ? "Yes" : "No"}`} />
                        <LabelWithData labelTitle='Located at' dataContent={`${spotDetails.locationName}`} />
                        <LabelWithData labelTitle='Located at (GPS Coords)' dataContent={`${spotDetails.longitude} / ${spotDetails.latitude}`} />
                        {spotDetails.currentUser.id !== undefined ? (<>
                            <LabelWithData labelTitle='Used By User ID' dataContent={`${spotDetails.currentUser?.id}`} />
                            <LabelWithData labelTitle='Used By User' dataContent={`${spotDetails.currentUser?.name}`} />
                            <LabelWithData labelTitle='Used By User with balance' dataContent={`${spotDetails.currentUser?.balance}`} />
                        </>) : null
                        }
                    </DataContainer>
                    <MapContainer>
                        {/* <h1 style={{ textAlign: "center", justifySelf: "center" }}>Map</h1> */}
                        <Map lat={spotDetails.latitude} lng={spotDetails.longitude} />
                    </MapContainer>
                </div>
            </>
        );
    }

    return (
        <BaseContainer>
            <h1 style={{ textAlign: "center", paddingBottom: "20px", borderBottom: "3px solid white" }}>
                Search a spot!
            </h1>
            {currentSpot === null ? displaySearchWindow() : displaySpotDetails(currentSpot)}
        </BaseContainer>
    );
}


export default SeeSpotStatusWindow;