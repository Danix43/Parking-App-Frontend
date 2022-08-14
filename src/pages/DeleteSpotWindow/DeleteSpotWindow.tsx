import Button from "components/Button/Button";
import LabelWithData from "components/LabelWithData/LabelWithData";
import Map from "components/Map/Map";
import { getSpotById } from "logic/handling";
import { ParkingSpot } from "logic/sampledata";
import { useState } from "react";
import styled from "styled-components";

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

const DeleteButton = styled(Button)`
    // text-align: center;
    background-color: red;
`;

function handleDelete(spotId: string): void {
    console.log('spotId ', spotId);
}

// TODO: refactor code
function DeleteSpotWindow() {
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
                <div style={{ display: "flex", flexDirection: "column" }}>
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
                            <Map lat={spotDetails.latitude} lng={spotDetails.longitude} />
                        </MapContainer>
                    </div>
                    <DeleteButton text="Delete" onClick={() => handleDelete(spotDetails.id)} img={null} />
                </div>
            </>
        );
    }

    return (
        <BaseContainer>
            <h1 style={{ textAlign: "center", paddingBottom: "20px", borderBottom: "3px solid white" }}>
                Delete a spot!
            </h1>
            {currentSpot === null ? displaySearchWindow() : displaySpotDetails(currentSpot)}
        </BaseContainer>
    );
}


export default DeleteSpotWindow;