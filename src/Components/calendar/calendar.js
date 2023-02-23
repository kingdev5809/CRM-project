import React, { useEffect, useState } from "react";
// import "../../Layout/layout.css";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";

import events from "./events.js";

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
  })

  function checkMobile() {
    
    if (window.innerWidth < 768) {
        setIsMobile(true)
    }else{
      setIsMobile(false)
    }
    console.log(isMobile);
  }
  

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
        events={events}
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
