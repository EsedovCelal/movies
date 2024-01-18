import React, { useState, useEffect } from "react";

function Rick_and_morty() {
  const [data, setData] = useState("Əlaqə yoxdur hələki");
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/1", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((getteddata) => {
        setData(getteddata);
        console.log(getteddata);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h1>RICK AND MORTY</h1>
      <h2>{data.name}</h2>
      <h2>{data.status}</h2>
      <h2>{data.species}</h2>
      <h2>{data.gender}</h2>
      <img src={data.image} alt="Logo" />
    </div>
  );
}
export default Rick_and_morty;
