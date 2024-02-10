import { Box, Typography } from "@mui/material";
import Selection from "../Selection";
import { useEffect } from "react";
import { useState } from "react";
import Results from "../Results";

export default function AllLocations() {
  const [dataFromLocation, SetDataFromLocation] = useState(null); //for selected episode from Selection
  const [location, setLocation] = useState(1);
  const [locationInfo, setLocationInfo] = useState([]); //for taking all location count
  const dataFromChildForLocation = (data) => {
    SetDataFromLocation(data);
  };

  const charactersForOneLocation = [];
  const array = dataFromLocation
    ? locationInfo[dataFromLocation.replace(/^\D+/g, "") - 1].characters.filter(
        (obj) => charactersForOneLocation.push(obj)
      )
    : "";
  const newArray =
    array && array.map((number) => number.replace(/[^0-9]/g, ""));

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/location/${location}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.id) {
          setLocation(location + 1);
          setLocationInfo((locationInfo) => [
            ...locationInfo,
            {
              label: `Location - ${data.id}`,
              name: `${data.name}`,
              dimension: `${data.dimension}`,
              id: `${data.id}`,
              characters: data.residents,
              Type: data.type,
            },
          ]);
        }
        if (data.error === "Location not found") {
          console.log("end");
        }
      })
      .catch((error) => console.log(error));
  }, [location]);
  return (
    <Box>
      <Typography>
        Location:
        {dataFromLocation
          ? locationInfo[dataFromLocation.replace(/^\D+/g, "") - 1].name
          : ""}
      </Typography>
      <Typography>
        Dimension:
        {dataFromLocation
          ? locationInfo[dataFromLocation.replace(/^\D+/g, "") - 1].dimension
          : ""}
      </Typography>
      <Typography>
        Type:
        {dataFromLocation
          ? locationInfo[dataFromLocation.replace(/^\D+/g, "") - 1].Type
          : ""}
      </Typography>
      <Selection
        title={"Locations"}
        options={locationInfo}
        selectedOption={dataFromLocation}
        setSelectedOption={dataFromChildForLocation}
      />
      <Results
        ids={
          newArray || [
            38, 45, 71, 82, 83, 92, 112, 114, 116, 117, 120, 127, 155, 169, 175,
            179, 186, 201, 216, 239, 271, 302, 303, 338, 343, 356, 394,
          ]
        }
      />
    </Box>
  );
}
