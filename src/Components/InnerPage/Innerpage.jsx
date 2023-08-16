import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { imageUrl } from "../../Constants/constant";
import Navbar from "../Navbar/Navbar";
import "./innerPage.css";
import Footercomp from "../Footer/Footercomp";

export default function Innerpage() {
  const { InnerpageId } = useParams();
  const [movieInnerpage, setMovieInnerpage] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${InnerpageId}?api_key=3b301f6beb72161f7d715a58cfadbdd8&language=en-US`
        );
        setMovieInnerpage(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovieDetails();
  }, [InnerpageId]);

  return (
    <div>
      <Navbar />
      <div>
        {movieInnerpage ? (
          <div className="inner-page">
            <img
              src={`${imageUrl + movieInnerpage.poster_path}`}
              alt={`Backdrop of ${movieInnerpage.title}`}
            />
            <div className="image-overlay"></div>
          </div>
        ) : (
          <p className="container">Loading...</p>
        )}
        <div className="container">
          <div className="original">
            <div className="titleImage">
              <img
                src={
                  movieInnerpage ? imageUrl + movieInnerpage.backdrop_path : ""
                }
                alt={
                  movieInnerpage ? `Backdrop of ${movieInnerpage.title}` : ""
                }
              />
            </div>
            <div className="title">
              {movieInnerpage && <h3>{movieInnerpage.original_title}</h3>}
              <p>
                {movieInnerpage
                  ? movieInnerpage.overview
                  : "No overview available"}
              </p>
              <div className="fet">
                <p>
                  Popularity:
                  {movieInnerpage ? movieInnerpage.popularity : "error"}
                </p>
                <p>
                  Release date :
                  {movieInnerpage ? movieInnerpage.release_date : "error"}
                </p>
                <p>
                  Original language :
                  {movieInnerpage ? movieInnerpage.original_language : "error"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footercomp />
    </div>
  );
}
