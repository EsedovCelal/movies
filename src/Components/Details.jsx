import { useEffect, useState } from "react";
import "./Details.css";

function Details() {
  const [character, SetCharacter] = useState("");
  const currentUrl = window.location.href;
  const url = new URL(currentUrl);
  const pathname = url.pathname;
  const mainDetails = {
    textAlign: "center",
  };
  const CharacterDetailsStatus = {
    backgroundColor: "#65B741",
    color: "white",
    fontSize: "20px",
    fontWeight: "bold",
    borderRadius: "5px",
    height: "35px",
  };
  const mainDetailsCell = {
    width: "303px",
    marginLeft: "auto",
    marginRight: "auto",
  };
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api${pathname}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        SetCharacter(data);
      });
  }, []);
  return (
    character && (
      <div style={mainDetails}>
        <div style={mainDetailsCell} key={character.id}>
          <h1>{character.name}</h1>
          <img src={character.image} alt="Logo" />
          <p style={CharacterDetailsStatus}>{character.status}</p>
          <div className="detailsText">
            <div>
              <span>Gender: </span>
              {character.gender}
            </div>
            <div>
              <span>Location: </span>
              {character.location.name}
            </div>
            <div>
              <span>Origins: </span>
              {character.origin.name}
            </div>
            <div>
              <span>Species: </span>
              {character.species}
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Details;
