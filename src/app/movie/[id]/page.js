import Image from "next/image";
import React from "react";

export default async function MoviePage({ params }) {
  const id = params.id;

  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "289bea1b1dmsh088ccd97957615ep127f36jsn0cf9e7913e5e",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const movie = data[0].details;

  return (
    <div className="container">
      <h2 className="movie_title">
        Netflix \ <span> {movie.type} </span>
      </h2>
      <div className="card_section">
        <div>
          <Image
            src={movie.backgroundImage.url}
            alt={movie.title}
            width={600}
            height={300}
          />
        </div>
        <div>
          <h1>{movie.title}</h1>
          <p>{movie.synopsis}</p>
        </div>
      </div>
    </div>
  );
}
