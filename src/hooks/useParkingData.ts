import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import BASE_API_URL from "logic/config";
import { ParkingSpot } from "logic/sampledata";
import { useState } from "react";

async function fetchAllSpots(): Promise<ParkingSpot[]> {
  return axios.get(BASE_API_URL + "/parking/all").then((res) => res.data);
}

export default function useParkingData() {
  let placeholder = [];

  const { isLoading, error, data } = useQuery(["parkingData"], fetchAllSpots, {
    placeholderData: [
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
    ],
  });
}
