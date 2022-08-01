import React, { useState } from 'react'
import styled from 'styled-components';
import LabelWithData from '../LabelWithData/LabelWithData';
import { getAllSpotsData } from '../../logic/requests';
import Button from '../Button/Button';
import Map from '../Map/Map';

const BaseContainer = styled.div`
    display: flex;
    flex-direction: row;

    height: 62rem;
    `;

const ListContainer = styled.li`
    display: flex;
    flex-direction: column;

    border-right: 3px solid white;
    padding: 30px;

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


function SeeAllSpotsWindow() {
    const [allSpotsData, setAllSpotsData] = useState(getAllSpotsData());
    const [currentSpot, setCurrentSpot] = useState(allSpotsData[1]);

    const spotsButtons = allSpotsData.map(spot => createSpotButton(spot));
    function createSpotButton(spot: any) {
        return (
            <Button key={spot.id} text={`Spot at ${spot.locationName}`} onClick={() => setCurrentSpot(spot)} img={null}></Button>
        );
    };

    return (
        <BaseContainer>
            <ListContainer>
                {spotsButtons}
            </ListContainer>
            <DataContainer>
                <LabelWithData labelTitle='ID' dataContent={`${currentSpot.id}`} />
                <LabelWithData labelTitle='Is Used?' dataContent={`${currentSpot.isUsed ? "Yes" : "No"}`} />
                <LabelWithData labelTitle='Located at' dataContent={`${currentSpot.locationName}`} />
                <LabelWithData labelTitle='Located at (GPS Coords)' dataContent={`${currentSpot.longitude} / ${currentSpot.latitude}`} />
                {currentSpot.currentUser !== null ? (<>
                    <LabelWithData labelTitle='Used By User ID' dataContent={`${currentSpot.currentUser?.id}`} />
                    <LabelWithData labelTitle='Used By User' dataContent={`${currentSpot.currentUser?.name}`} />
                    <LabelWithData labelTitle='Used By User with balance' dataContent={`${currentSpot.currentUser?.balance}`} />
                </>) : null
                }
            </DataContainer>
            <MapContainer>
                <h1 style={{ textAlign: "center", justifySelf: "center" }}>Map</h1>
                <Map lat={currentSpot.latitude} lng={currentSpot.longitude} />
            </MapContainer>
        </BaseContainer >
    );
}
export default SeeAllSpotsWindow;