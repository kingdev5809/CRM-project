import React from "react";
import Calendar from "../../../Components/calendar/calendar";
import Navbar from "../../../Components/Navbar";

function Schedule() {
  return (
    <div className="flex">
      <Navbar/>
      <div className="scheldulePage container">
      <Calendar />
    </div>
    </div>
  );
}

export default Schedule;
