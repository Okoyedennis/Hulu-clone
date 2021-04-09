import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router";
import Search from "./Search";
import "./Style/Banner.css";

const Banner = () => {
  const [showSearch, setShowSearch] = useState(false);
  const history = useHistory();
  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <Search />}
        <Button
          variant="outlined"
          onClick={() => setShowSearch(!showSearch)}
          className="banner__searchButton"
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className="banner__info">
        <h1>Get Out and stretch your imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you.
        </h5>
        <Button variant="outlined" onClick={() => history.push("/search")}>
          Explore Nearby
        </Button>
      </div>
    </div>
  );
};

export default Banner;