import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Calendar from "../../../Components/calendar/calendar";
import Navbar from "../../../Components/Navbar";
import {
  getAllGroupTimes,
  getOneGroupTime,
} from "../../../Redux/Actions/StudentAction";
import ScheduleInfoModal from "../Modals/ScheduleInfoModal";

function StudentSchedule() {
  const dispatch = useDispatch();
  const [infoVisibleModal, setInfoVisibleModal] = useState("d-none");
  const getGroupTimes = useSelector((state) => state.groupTimes);
  const { allGroupTimes } = getGroupTimes;

  const getGroupTime = useSelector((state) => state.oneGroupTime);
  const { oneGroupTimes } = getGroupTime;

  useEffect(() => {
    dispatch(getAllGroupTimes());
  }, []);

  
  // info modal states
  const [group_name, setGroup_name] = useState("");

  const [start_day, setStart_day] = useState("");
  const [end_day, setEnd_day] = useState("");


  const handleEventDrop = (clickInfo) => {
    setInfoVisibleModal("d-block");
    dispatch(getOneGroupTime(clickInfo.event.id));
    let endDate = new Date(clickInfo.event.endStr);
    let endHours = endDate.getHours();
    let endMinutes = endDate.getMinutes();
    if (endHours < 10) endHours = "0" + endHours;
    if (endMinutes < 10) endMinutes = "0" + endMinutes;
    setGroup_name(clickInfo.event.title);
    setStart_day(clickInfo.event.start);
    setEnd_day(`${endHours}:${endMinutes}`);
    
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
      id: event._id,
      teacherId: event.group_id?.teacher,
      classNames: event.color,
    };

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
          group_name={group_name}
          start_day={start_day}
          end_day={end_day}
          oneGroupTimes={oneGroupTimes}
        />
      </div>
    </div>
  );
}

export default StudentSchedule;
