import React, { useEffect, useState } from "react";
import axios from "../../axios";
import { API_key, Image_url } from "../../Constants/constant";
import "./Featuredmovie.css";

export default function Featuredmovie() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `trending/all/week?api_key=${API_key}`
        );
        setMovie(response.data.results[0]);
      } catch (error) {
        console.error("Error fetching featured movie:", error);
      }
    };

    fetchData();
  }, []);

  if (!movie) {
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    );
  }

  return (
    <>
      <div
        className="FeaturedMovie"
        style={{
          backgroundImage: `url(${Image_url}${movie.backdrop_path})`,
          height: "700px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}>
        <div className="container">
          <div className="text_heading">
            <h1>{movie.original_title}</h1>
            <p style={{ width: "60%" }} className="pspider">
              {movie.overview}
            </p>
            <div className="btn">
              <button className="play">Play</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
