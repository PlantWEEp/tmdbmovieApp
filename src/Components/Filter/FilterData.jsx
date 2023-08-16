import { useEffect, useState } from "react";
import axios from "../../axios";
import Movie from "./Movie";
import Filterbtn from "./Filterbtn";
import { Link } from "react-router-dom";
import Footercomp from "../Footer/Footercomp";

export default function FilterData() {
  const [popular, setPopular] = useState([]);
  const [Filtered, setFiltered] = useState([]);
  const [activeGenre, setactivegenre] = useState([]);

  // const dashbar = movie.id.replace(/\s+/g, "-").toLowerCase();

  useEffect(() => {
    const fetchPopularData = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/popular?api_key=3b301f6beb72161f7d715a58cfadbdd8&language=en-US&page=1"
        );
        setPopular(response.data.results);
        setFiltered(response.data.results);
      } catch (error) {
        console.error("Error fetching popular data:", error);
      }
    };

    fetchPopularData();
  }, []);

  let PopularMovie = popular ? popular.slice(0, 20) : [];

  return (
    <>
      <div className="container">
        <h2 className="headingfilter">Popular Movie</h2>
        <Filterbtn
          PopularMovie={PopularMovie}
          setactivegenre={setactivegenre}
          activeGenre={activeGenre}
          setFiltered={setFiltered}
        />
        <div className="filterPopular">
          {Array.isArray(Filtered) && Filtered.length > 0 ? (
            Filtered.map((movie) => (
              <Link key={movie.id} to={`/innerpage/${movie.id} `}>
                <Movie key={movie.id} movie={movie} />
              </Link>
            ))
          ) : (
            <p>No popular movies found.</p>
          )}
        </div>
      </div>
      <Footercomp />
    </>
  );
}
