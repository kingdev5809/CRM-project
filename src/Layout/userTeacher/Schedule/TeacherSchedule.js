import React, { useState } from "react";
import Calendar from "../../../Components/calendar/calendar";
import Navbar from "../../../Components/Navbar";
import ScheduleInfoModal from "../Modal/ScheduleInfoModal";

function TeacherSchedule() {

  return (
    <div className="flex">
      <Navbar />
      <div className="scheldulePage container">
        <Calendar />
      </div>
    
    </div>
  );
}

export default TeacherSchedule;
