import React, { useEffect, useRef, useState } from "react";
import Navbar from "../../../Components/Navbar";
import Groups from "./Groups";
import Homeworks from "./Homeworks";

function Homework() {
  const windowSize = useRef([window.innerWidth]);
  const [visibleHomework, setVisibleHomework] = useState(true);

  useEffect(() => {
    if (windowSize.current[0] < 1050) {
      setVisibleHomework(false);
    } else {
      setVisibleHomework(true);
    }
  });

  return (
    <div className="flex">
      <Navbar />
      <div className="homeworkPage container">
        <Groups />
       {visibleHomework?  <Homeworks /> : ''}
      </div>
    </div>
  );
}

export default Homework;
