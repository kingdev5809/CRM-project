import React, { useState } from "react";
import Calendar from "../../../Components/calendar/calendar";
import Navbar from "../../../Components/Navbar";
import AddGroupTimeModal from "../Modals/AddGroupTimeModal";

function Schedule() {
  const [visibleModalTwo, setVisibleModalTwo] = useState("d-none");

  const [start_day, setStart_day] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const handleEventClick = (clickInfo) => {
    let startDate = new Date(clickInfo.startStr);
    let endDate = new Date(clickInfo.endStr);
    let startYear = startDate.getFullYear();
    let startMonth = startDate.getMonth() + 1;
    let startDay = startDate.getDate();
    let startHours = startDate.getHours();
    let startMinutes = startDate.getMinutes();
    let endHours = endDate.getHours();
    let endMinutes = endDate.getMinutes();
    if (startDay < 10) startDay = "0" + startDay;
    if (startHours < 10) startHours = "0" + startHours;
    if (startMonth < 10) startMonth = "0" + startMonth;
    if (startMinutes < 10) startMinutes = "0" + startMinutes;
    if (endHours < 10) endHours = "0" + endHours;
    if (endMinutes < 10) endMinutes = "0" + endMinutes;

    setStart_day(`${startYear}-${startMonth}-${startDay}`);
    setStart(`${startHours}:${startMinutes}`);
    setEnd(`${endHours}:${endMinutes}`);
    setVisibleModalTwo("d-block");
  };
  return (
    <div className="flex ">
      <Navbar />
      <div className="scheldulePage container">
        <Calendar handleEventClick={handleEventClick} />
        <AddGroupTimeModal
          visibleModal={visibleModalTwo}
          setVisibleModal={setVisibleModalTwo}
          start_day={start_day}
          start={start}
          end={end}
          setStart_day={setStart_day}
          setStart={setStart}
          setEnd={setEnd}
        />
      </div>
    </div>
  );
}

export default Schedule;
