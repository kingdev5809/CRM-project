import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import { useDispatch, useSelector } from "react-redux";
import { getAllGroupTimes } from "../../Redux/Actions/AdminAction.js";
import ScheduleInfoModal from "../../Layout/userTeacher/Modal/ScheduleInfoModal.js";
import { USER_LOGIN_SUCCESS } from "../../Redux/Constants/UserConstants.js";

export default function Calendar() {
  const [isMobile, setIsMobile] = useState(true);
  const [selectable, setSelectable] = useState(false);
  function getHeaderToolbar() {
    if (isMobile) {
      return {
        start: "prev",
        center: "title",
        end: "next",
      };
    } else {
      return {
        start: "prev,today,next",
        center: "title",
        end: "timeGridDay,timeGridSevenDay,dayGridMonth,dayGridYear",
      };
    }
  }
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("userInfo"));
  useEffect(() => {
    if (user?.rektor) {
      setSelectable(true);
    } else {
      setSelectable(false);
    }
  }, []);
  function getResponsiveView() {
    if (isMobile) {
      return 1;
    } else {
      return 7;
    }
  }

  useEffect(() => {
    window.addEventListener("resize", checkMobile);
    checkMobile();
  });

  function checkMobile() {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }

  const getGroupTimes = useSelector((state) => state.groupTimes);
  const { data } = getGroupTimes;

  useEffect(() => {
    dispatch(getAllGroupTimes());
  }, []);

  const CalendarFunc = (event) => {
    let day = new Date(event.start_day).getDay();
    const events = {
      title: event.group_id.group_name,
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
  const events = [data?.groupTimes?.map((event) => CalendarFunc(event))];

  const handleEventClick = (clickInfo) => {
    // if (
    //   confirm(
    //     `Are you sure you want to delete the event '${clickInfo.event.start}'`
    //   )
    // ) {
    //   clickInfo.event.remove();
    // }
    console.log(clickInfo);
  };

  return (
    <div className="calendarComponent">
      <FullCalendar
        initialView="timeGridSevenDay"
        editable={true}
        headerToolbar={getHeaderToolbar()}
        views={{
          timeGridSevenDay: {
            type: "timeGrid",
            duration: { days: getResponsiveView() },
            buttonText: "Week",
          },
        }}
        selectable={selectable}
        themeSystem="Simplex"
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
        events={events[0]}
        // dateClick={handleEventClick}
        select={handleEventClick}
        // eventClick={handleEventClick}
        // eventAdd={handleEventClick}
        // eventChange={handleEventClick}
        // eventsSet={handleEventClick}
        // eventColor={"#" + Math.floor(Math.random() * 16777215).toString(16)}

        //eventContent={renderEventContent} // custom render function
        // eventClick={this.handleEventClick}
        //eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
        /* you can update a remote database when these fire:
        eventRemove={function(){}}*/
      />
    </div>
  );
}
