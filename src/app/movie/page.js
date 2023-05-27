import React from "react";
import MovieCard from "@/app/components/MovieCard";

export default async function Movie() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const url = process.env.RAPID_KEY;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "289bea1b1dmsh088ccd97957615ep127f36jsn0cf9e7913e5e",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const { titles: movies } = await res.json();

  return (
    <section className="movieSection">
      <div className="container">
        <h1>Series and Movies</h1>
        <div className="card_section">
          {movies.map((movie, i) => (
            <MovieCard key={movie.jawSummary?.id} {...movie} />
          ))}
        </div>
      </div>
    </section>
  );
}
