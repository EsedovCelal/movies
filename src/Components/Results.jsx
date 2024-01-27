import React, { useState, useEffect } from "react";
import "./Results.css";

function Results({ stat, spec, gen, seach }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      `https://rickandmortyapi.com/api/character
      ${stat ? `?status=${stat}` : ""}
      ${spec ? `&species=${spec}` : ""}
      ${gen ? `&gender=${gen}` : ""}`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((getteddata) => {
        setData(getteddata.results);
      })
      .catch((error) => console.log(error));
  }, [gen, stat, spec, seach]);

  return (
    data && (
      <div className="results_main">
        {data.map((item) => (
          <div key={item.id} className="cell">
            <div className="cell_text">
              <div className="results_pic_and_text">
                <img src={item.image} alt="Logo" />
                <div className="top-left">{item.status}</div>
              </div>
              <h2>{item.name}</h2>
              <h2>{item.status}</h2>
              <h2>{item.species}</h2>
              <h2>{item.gender}</h2>
            </div>
          </div>
        ))}
      </div>
    )
  );
}

export default Results;
