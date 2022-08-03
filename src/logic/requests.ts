import sampleDataGetAll, { ParkingSpot } from "./sampledata";

export function getSpotsData(isUsed: boolean): ParkingSpot[] {
  if (isUsed) {
    return sampleDataGetAll.filter(
      (spot: ParkingSpot) => spot.isUsed === isUsed
    );
  } else {
    return sampleDataGetAll;
  }
}
