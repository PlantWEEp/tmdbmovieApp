import React, { useEffect } from "react";
import "./filter.css";

export default function Filterbtn({
  setactivegenre,
  PopularMovie,
  activeGenre,
  setFiltered,
}) {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(PopularMovie);
    } else {
      const handleFilter = PopularMovie.filter((m) =>
        m.genre_ids.includes(activeGenre)
      );
      setFiltered(handleFilter);
    }
  }, [activeGenre, setFiltered]);

  return (
    <div className="container">
      <div className="filterbtn">
        <button onClick={() => setactivegenre(0)}>All</button>
        <button onClick={() => setactivegenre(14)}>Comedy</button>
        <button onClick={() => setactivegenre(12)}>Action</button>
      </div>
    </div>
  );
}
