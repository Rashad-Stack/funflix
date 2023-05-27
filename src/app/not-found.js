import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <section className="container">
      <div className="error_page">
        <h1>404</h1>
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/">
          <button>Go to Home Page</button>
        </Link>
      </div>
    </section>
  );
}
