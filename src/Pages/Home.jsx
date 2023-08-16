import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Featuredmovie from "../Components/FeaturedMovie/Featuredmovie";
import FilterData from "../Components/Filter/FilterData";

export default function Home() {
  return (
    <>
      <Navbar />
      <Featuredmovie />
      <FilterData />
    </>
  );
}
