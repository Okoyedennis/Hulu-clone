import React from "react";
import "./Nav.css";
import requests from "./requests";

const Nav = ({ setSelectedOption }) => {
  return (
    <div className="nav">
      <h3 onClick={() => setSelectedOption(requests.fetchTrending)}>
        Treanding
      </h3>
      <h3 onClick={() => setSelectedOption(requests.fetchTopRated)}>
        Top Rated
      </h3>

      <h3 onClick={() => setSelectedOption(requests.fetchActionMovies)}>
        Action
      </h3>
      <h3 onClick={() => setSelectedOption(requests.fetchComedyMovies)}>
        Comedy
      </h3>
      <h3 onClick={() => setSelectedOption(requests.fetchHorrorMovies)}>
        Horror
      </h3>
      <h3 onClick={() => setSelectedOption(requests.fetchRomanceMovies)}>
        Romance
      </h3>
      <h3 onClick={() => setSelectedOption(requests.fetchMystery)}>Mystery</h3>
      <h3 onClick={() => setSelectedOption(requests.fetcSciFi)}>Sci-fi</h3>
      <h3 onClick={() => setSelectedOption(requests.fetchWestern)}>Western</h3>
      <h3 onClick={() => setSelectedOption(requests.fetchAnimation)}>
        Animation
      </h3>
      <h3 onClick={() => setSelectedOption(requests.fetchTV)}>Movie</h3>
    </div>
  );
};

export default Nav;
