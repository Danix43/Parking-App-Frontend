import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import styled from "styled-components";
import { ParkingSpot } from "logic/sampledata";
import BASE_API_URL from "logic/config";
import Button from "components/Button/Button";
import LabelWithData from "components/LabelWithData/LabelWithData";
import Marker from "components/Map/MapMarkers/Marker";
import Map from "components/Map/Map";
import { useState } from "react";


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

  overflow: auto;
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

async function fetchAllSpots(): Promise<ParkingSpot[]> {
  console.log('fetching from api');
  return axios.get(BASE_API_URL + "/parking/all").then((res) => res.data);
}

function SeeAllSpotsWindow() {
  const { isLoading, error, data } = useQuery<ParkingSpot[]>(['parkingData'], fetchAllSpots, {
    initialData: [
      {
        id: "1",
        isUsed: false,
        currentUser: {
          id: undefined,
          name: undefined,
          balance: undefined,
        },
        locationName: "location 1",
        longitude: 23.544123,
        latitude: 24.6546456,
      },
    ]
  });

  const [currentSpot, setCurrentSpot] = useState<ParkingSpot>(data[1] === undefined ? data[0] : data[1]);

  if (isLoading) {
    return <div>{`the data is still loading ${isLoading}`}</div>
  }

  if (error) {
    return <div>{`error when fetching \n ${error}`}</div>
  }

  if (data === undefined) {
    return <div>Error when loading the data</div>
  }

  const spotsButtons = data.map((spot: ParkingSpot) => createSpotButton(spot));
  function createSpotButton(spot: ParkingSpot) {
    return (
      <Button
        key={spot.id}
        text={`Spot at ${spot.locationName}`}
        onClick={() => { setCurrentSpot(spot) }}
        img={null}
      ></Button>
    );
  }

  return (
    <BaseContainer>
      <ListContainer>{spotsButtons}</ListContainer>
      <DataContainer>
        <LabelWithData labelTitle="ID" dataContent={`${currentSpot.id}`} />
        <LabelWithData
          labelTitle="Is Used?"
          dataContent={`${currentSpot.isUsed ? "Yes" : "No"}`}
        />
        <LabelWithData
          labelTitle="Located at"
          dataContent={`${currentSpot.locationName}`}
        />
        <LabelWithData
          labelTitle="Located at (GPS Coords)"
          dataContent={`${currentSpot.longitude} / ${currentSpot.latitude}`}
        />
        {currentSpot.currentUser !== undefined ? (
          <>
            <LabelWithData
              labelTitle="Used By User ID"
              dataContent={`${currentSpot.currentUser?.id}`}
            />
            <LabelWithData
              labelTitle="Used By User"
              dataContent={`${currentSpot.currentUser?.name}`}
            />
            <LabelWithData
              labelTitle="Used By User with balance"
              dataContent={`${currentSpot.currentUser?.balance}`}
            />
          </>
        ) : null}
      </DataContainer>
      <MapContainer>
        <h1 style={{ textAlign: "center", justifySelf: "center" }}>Map</h1>
        <Map
          handleClickOnMap={() => { }}
          lat={currentSpot.latitude}
          lng={currentSpot.longitude}
          Marker={
            <Marker lat={currentSpot.latitude} lng={currentSpot.longitude} />
          }
        />
      </MapContainer>
    </BaseContainer>
  );

}

export default SeeAllSpotsWindow;
