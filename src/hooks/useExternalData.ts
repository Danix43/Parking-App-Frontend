import axios from "axios";
import BASE_API_URL from "logic/config";
import { ParkingSpot } from "logic/sampledata";
import { useState, useEffect } from "react";

export default function useExternalData() {
  const [data, setData] = useState<ParkingSpot[]>();

  useEffect(() => {
    axios
      .get(BASE_API_URL + "/parking/all")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return [data, setData];
}
