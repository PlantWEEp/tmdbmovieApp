import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import FilterData from "../Components/Filter/FilterData";
import "./pages.css";

export default function Authors() {
  return (
    <>
      <Navbar />
      <div className="banner">
        <h1>Popular Movie</h1>
      </div>
      <FilterData />
    </>
  );
}
