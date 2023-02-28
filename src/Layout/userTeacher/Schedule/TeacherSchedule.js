import React, { useEffect, useState } from "react";
import Calendar from "../../../Components/calendar/calendar";
import Navbar from "../../../Components/Navbar";
import ScheduleInfoModal from "../Modal/ScheduleInfoModal";

function TeacherSchedule() {
  const [isMobile, setIsMobile] = useState(false);

  function checkMobile() {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", checkMobile);
    checkMobile();
  });

  console.log(isMobile);
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
