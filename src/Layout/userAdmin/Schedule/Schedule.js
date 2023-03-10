import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Calendar from "../../../Components/calendar/calendar";
import Navbar from "../../../Components/Navbar";
import { getAllGroupTimes } from "../../../Redux/Actions/AdminAction";
import AddGroupTimeModal from "../Modals/AddGroupTimeModal";
import UpdateGroupTimeModal from "../Modals/UpdateGroupTimeModal";

function Schedule() {
  const [visibleModalTwo, setVisibleModalTwo] = useState("d-none");
  const [visibleUpdateModal, setVisibleUpdateModal] = useState("d-none");
  const [start_day, setStart_day] = useState("");
  const [end_day, setEnd_day] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [id, setId] = useState("");

  const [refresh, setRefresh] = useState("");

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

  const handleEventDrop = (clickInfo) => {
    let startDate = new Date(clickInfo.event.startStr);
    let endDate = new Date(clickInfo.event.endStr);
    let startYear = startDate.getFullYear();
    let startMonth = startDate.getMonth() + 1;
    let startDay = startDate.getDate();
    let endYear = endDate.getFullYear();
    let endMonth = endDate.getMonth() + 1;
    let endDay = endDate.getDate();
    let startHours = startDate.getHours();
    let startMinutes = startDate.getMinutes();
    let endHours = endDate.getHours();
    let endMinutes = endDate.getMinutes();
    if (startDay < 10) startDay = "0" + startDay;
    if (endDay < 10) endDay = "0" + endDay;
    if (startHours < 10) startHours = "0" + startHours;
    if (startMonth < 10) startMonth = "0" + startMonth;
    if (startMinutes < 10) startMinutes = "0" + startMinutes;
    if (endMonth < 10) endMonth = "0" + endMonth;
    if (endHours < 10) endHours = "0" + endHours;
    if (endMinutes < 10) endMinutes = "0" + endMinutes;
    setStart_day(`${startYear}-${startMonth}-${startDay}`);
    setEnd_day(`${endYear}-${endMonth}-${endDay}`);
    setStart(`${startHours}:${startMinutes}`);
    setEnd(`${endHours}:${endMinutes}`);
    setId(clickInfo.event.id);
    setVisibleUpdateModal("d-block");
  };

  const dispatch = useDispatch();

  const getGroupTimes = useSelector((state) => state.groupTimes);
  const { allGroupTimes } = getGroupTimes;

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
      groupId: event.group_id?._id,
      id: event._id,
      classNames: event.color,
    };

    return events;
  };

  const events = [allGroupTimes?.map((event) => CalendarFunc(event))];

  return (
    <div className="flex ">
      <Navbar />
      <div className="scheldulePage container">
        <Calendar
          handleEventClick={handleEventClick}
          events={events}
          handleEventDrop={handleEventDrop}
        />
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
        <UpdateGroupTimeModal
          visibleModal={visibleUpdateModal}
          setVisibleModal={setVisibleUpdateModal}
          start_day={start_day}
          start={start}
          end={end}
          end_day={end_day}
          setEnd_day={setEnd_day}
          setStart_day={setStart_day}
          setStart={setStart}
          setEnd={setEnd}
          id={id}
          setId={setId}
          setRefresh={setRefresh}
        />
      </div>
    </div>
  );
}

export default Schedule;
