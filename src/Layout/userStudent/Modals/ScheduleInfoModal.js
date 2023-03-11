import moment from "moment";
import React from "react";
import { deleteIcon } from "../../../Components/icons/svgIcons";
import calendarImg from "../../../images/calendarImgFFF.png";
import clockImg from "../../../images/modal-mg/clockImdFFF.png";
import locationImg from "../../../images/modal-mg/locationImgFFF.png";

function ScheduleInfoModal({
  infoVisibleModal,
  setInfoVisibleModal,
  group_name,
  start_day,
  end_day,
  text,
}) {
  return (
    <div>
      <div className={infoVisibleModal}>
        <div
          onClick={() => setInfoVisibleModal("d-none")}
          className="w-screen"
        ></div>
        <div className="modalWindows scheduleInfoModal">
          <div className="modal-inner">
            <div className="modal-title">
              <h1>
                <img src={calendarImg} alt="" />
                <span>{group_name}</span>
              </h1>
              <span
                onClick={() => setInfoVisibleModal("d-none")}
                className="closeModal"
              >
                {deleteIcon}
              </span>
            </div>

            <div className="modal-content">
              <div className="teacher-box user-box">
                <img src="" alt="" />
                <div className="box">
                  <h2>Sher Murodjonov</h2>
                  <p>Teacher</p>
                </div>
              </div>
              <p className="comment-box">{text}</p>
              <div className="schedule-box">
                <div className="box">
                  <img src={clockImg} alt="" />
                  <h4>
                    {start_day
                      ? moment(start_day).format("MMMM Do YYYY, kk:mm  ")
                      : null}{" "}
                    - {end_day}
                  </h4>
                </div>
                <div className="box">
                  <img src={locationImg} alt="" />
                  <h4>Rinked 15, Stockholm</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScheduleInfoModal;
