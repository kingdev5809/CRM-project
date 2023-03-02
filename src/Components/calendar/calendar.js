import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import { useDispatch, useSelector } from "react-redux";
import { getAllGroupTimes } from "../../Redux/Actions/AdminAction.js";
import { USER_LOGIN_SUCCESS } from "../../Redux/Constants/UserConstants.js";

export default function Calendar(props) {
  const { handleEventClick, events } = props;
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
      />
    </div>
  );
}
