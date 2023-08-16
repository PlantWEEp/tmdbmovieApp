import React from "react";
import { baseurl, imageUrl } from "../../Constants/constant";
import "./filter.css";

export default function Movie({ movie }) {
  return (
    <>
      <div className="container">
        <div className="imgPopular">
          <div className="imagedrop">
            <img
              src={`${imageUrl + movie.backdrop_path}`}
              alt={`Backdrop of ${movie.title}`}
            />
          </div>
          <h4>{movie.title}</h4>
        </div>
      </div>
    </>
  );
}
