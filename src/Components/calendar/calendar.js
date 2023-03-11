import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";

export default function Calendar(props) {
  const { handleEventClick, events, handleEventDrop } = props;
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
        editable={selectable}
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
        eventClick={handleEventDrop}
        eventDrop={handleEventDrop}
        slotMinTime="06:00:00"
        slotMaxTime="22:00:00"
      />
    </div>
  );
}
