const sampleDataGetAll = [
  {
    id: 1,
    isUsed: false,
    currentUser: null,
    locationName: "location 1",
    longitude: 23.544123,
    latitude: 24.6546456,
  },
  {
    id: 2,
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
    id: 3,
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
