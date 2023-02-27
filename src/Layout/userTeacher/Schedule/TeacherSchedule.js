import React, { useState } from "react";
import Calendar from "../../../Components/calendar/calendar";
import Navbar from "../../../Components/Navbar";
import ScheduleInfoModal from "../Modal/ScheduleInfoModal";

function TeacherSchedule() {
  const [visibleModal, setVisibleModal] = useState("d-block");

  return (
    <div className="flex">
      <Navbar />
      <div className="scheldulePage container">
        <Calendar />
      </div>
      <ScheduleInfoModal
        visibleModal={visibleModal}
        setVisibleModal={setVisibleModal}
      />
    </div>
  );
}

export default TeacherSchedule;
