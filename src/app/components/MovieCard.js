import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function MovieCard(movie) {
  const { id, type, title, synopsis, backgroundImage } =
    movie?.jawSummary || {};

  return (
    <div className="card">
      <div className="card_image">
        <Image
          src={backgroundImage?.url}
          alt={title}
          width="0"
          height="0"
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          priority={true}
        />
      </div>
      <div className="card_data">
        <h2>{title.substring(0, 18)}</h2>
        <p>{synopsis.substring(0, 66)}...</p>
        <Link href={`/movie/${id}`}>
          <button>Read More</button>
        </Link>
      </div>
    </div>
  );
}
