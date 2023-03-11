import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Calendar from "../../../Components/calendar/calendar";
import Navbar from "../../../Components/Navbar";
import { getAllGroupTimes } from "../../../Redux/Actions/StudentAction";
import ScheduleInfoModal from "../Modals/ScheduleInfoModal";

function StudentSchedule() {
  const dispatch = useDispatch();
  const [infoVisibleModal, setInfoVisibleModal] = useState("d-block");
  const getGroupTimes = useSelector((state) => state.groupTimes);
  const { allGroupTimes } = getGroupTimes;

  useEffect(() => {
    dispatch(getAllGroupTimes());
  }, []);

  const handleEventDrop = (clickInfo) => {
    setInfoVisibleModal("d-block");
    console.log(clickInfo);
  };

  const CalendarFunc = (event) => {
    let day = new Date(event.start_day).getDay();
    const events = {
      title: event.group_id?.group_name,
      startRecur: `${event.start_day}T${event.start}+05:00`,
      endRecur: `${event.end_day}T${event.end}+05:00`,
      daysOfWeek: [day],
      startTime: event.start,
      endTime: event.end,
      groupId: event.group_id?._id,
      teacherId: event.group_id?.teacher,
      classNames: event.color,
    };
    console.log(event);
    return events;
  };
  const events = [
    allGroupTimes?.group_times?.map((event) => CalendarFunc(event)),
  ];
  return (
    <div className="flex">
      <Navbar />
      <div className="scheldulePage container">
        <Calendar events={events} handleEventDrop={handleEventDrop} />
        <ScheduleInfoModal
          infoVisibleModal={infoVisibleModal}
          setInfoVisibleModal={setInfoVisibleModal}
        />
      </div>
    </div>
  );
}

export default StudentSchedule;
