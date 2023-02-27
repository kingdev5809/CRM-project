import React, { useEffect, useState } from "react";
// import "../../Layout/layout.css";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";

import events from "./events.js";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllGroups,
  getAllGroupTimes,
} from "../../Redux/Actions/AdminAction.js";

export default function Calendar() {
  const [isMobile, setIsMobile] = useState(false);
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
        end: "timeGridDay,dayGridMonth,dayGridWeek,dayGridYear",
      };
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

  const dispatch = useDispatch();

  const getGroupTimes = useSelector((state) => state.groupTimes);
  const { data } = getGroupTimes;
  // function getDate(dayString) {
  //   const today = new Date();
  //   const year = today.getFullYear().toString();
  //   let month = (today.getMonth() + 1).toString();

  //   if (month.length === 1) {
  //     month = "0" + month;
  //   }

  //   return dayString.replace("YEAR", year).replace("MONTH", month);
  // }
  //  console.log(data);
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
    };
    return events;
  };

  const events = [data?.groupTimes.map((event) => CalendarFunc(event))];
  console.log(events);
  return (
    <div className="calendarComponent">
      <FullCalendar
        defaultView="dayGridMonth"
        editable={true}
        headerToolbar={getHeaderToolbar()}
        header={{
          left: "prev,next",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        themeSystem="Simplex"
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
        events={events[0]}
        // eventColor={"#" + Math.floor(Math.random() * 16777215).toString(16)}

        //eventContent={renderEventContent} // custom render function
        // eventClick={this.handleEventClick}
        //eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
        /* you can update a remote database when these fire:
        eventAdd={function(){}}
        eventChange={function(){}}
        eventRemove={function(){}}*/
      />
    </div>
  );
}
