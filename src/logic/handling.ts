import { ParkingSpot } from "./sampledata";

function getSpotById(id: string): ParkingSpot | null {
  const spot: ParkingSpot = {
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
  };

  if (id === spot.id) {
    return spot;
  }

  return null;
}

export { getSpotById };
