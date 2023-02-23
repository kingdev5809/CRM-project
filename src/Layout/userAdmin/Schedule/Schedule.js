import React from "react";
import Calendar from "../../../Components/calendar/calendar";
import Navbar from "../../../Components/Navbar";

function Schedule() {
  return (
    <div className="scheldulePage">
      <div className="navbar-box">
        <Navbar />
      </div>
      <div className="schelduleMain container">
        <Calendar />
      </div>
    </div>
  );
}

export default Schedule;
