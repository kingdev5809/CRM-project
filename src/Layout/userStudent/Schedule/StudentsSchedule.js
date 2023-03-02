import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Calendar from "../../../Components/calendar/calendar";
import Navbar from "../../../Components/Navbar";
import { getAllGroupTimes } from "../../../Redux/Actions/StudentAction";

function StudentSchedule() {
  const [refresh, setRefresh] = useState("");

  const dispatch = useDispatch();

  const getGroupTimes = useSelector((state) => state.groupTimes);
  const { data } = getGroupTimes;

  useEffect(() => {
    dispatch(getAllGroupTimes());
  }, [refresh]);

  const CalendarFunc = (event) => {
    let day = new Date(event.start_day).getDay();
    const events = {
      title: event.group_id?.group_name,
      startRecur: `${event.start_day}T${event.start}+05:00`,
      endRecur: `${event.end_day}T${event.end}+05:00`,
      daysOfWeek: [day],
      startTime: event.start,
      endTime: event.end,
      groupId: event._id,
      classNames: event.color,
    };
    return events;
  };

  const events = [data?.group_times?.map((event) => CalendarFunc(event))];
console.log(events);
  return (
    <div className="flex">
      <Navbar />
      <div className="scheldulePage container">
        <Calendar refresh={refresh} events={events} />
      </div>
    </div>
  );
}

export default StudentSchedule;
