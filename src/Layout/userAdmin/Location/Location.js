import React from "react";
import { homeIcon } from "../../../Components/icons/svgIcons";
import Navbar from "../../../Components/Navbar";

const Location = () => {
  return (
    <div className="locationPage  container">
      <div className="main-header-pages  ">
        <h1>All Classes</h1>
        <button>Create</button>
      </div>
      <div className="main">
        <div className="items">
          <div className="item">
            {homeIcon}
            <p>Bäckgårdsvägen 27 Vårby</p>
          </div>

          <div className="item">
            {homeIcon}
            <p>Bäckgårdsvägen 27 Vårby</p>
          </div>

          <div className="item">
            {homeIcon}
            <p>Bäckgårdsvägen 27 Vårby</p>
          </div>

          <div className="item">
            {homeIcon}
            <p>Bäckgårdsvägen 27 Vårby</p>
          </div>

          <div className="item">
            {homeIcon}
            <p>Bäckgårdsvägen 27 Vårby</p>
          </div>
          <div className="item">
            {homeIcon}
            <p>Bäckgårdsvägen 27 Vårby</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
