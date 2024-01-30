import { useEffect, useState } from "react";

function Details() {
  const [character, SetCharacter] = useState("");
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/1`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        SetCharacter(data);
      });
  }, []);
  return (
    character && (
      <div key={character.id}>
        <p>Name: {character.name}</p>
        <img src={character.image} alt="Logo" />
        <p>Gender: {character.gender}</p>
        <p>Location: {character.location.name}</p>
        <p>Origins: {character.origin.name}</p>
        <p>Species: {character.species}</p>
      </div>
    )
  );
}

export default Details;
