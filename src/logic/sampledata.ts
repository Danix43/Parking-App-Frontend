export type User = {
  id: number | undefined;
  name: string | undefined;
  balance: number | undefined;
};

export type ParkingSpot = {
  id: string;
  isUsed: boolean;
  currentUser: User;
  locationName: string;
  longitude: number;
  latitude: number;
};

export const sampleDataGetAll: ParkingSpot[] = [
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
  {
    id: "2",
    isUsed: false,
    currentUser: {
      id: 2,
      name: "user 2",
      balance: 30,
    },
    locationName: "location 2",
    longitude: 43.544123,
    latitude: 12.6546456,
  },
  {
    id: "3",
    isUsed: true,
    currentUser: {
      id: 3,
      name: "user 3",
      balance: 30,
    },
    locationName: "location 3",
    longitude: 12.544123,
    latitude: 32.6546456,
  },
];

export default sampleDataGetAll;
