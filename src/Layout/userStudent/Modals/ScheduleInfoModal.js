import React from "react";
import { deleteIcon } from "../../../Components/icons/svgIcons";
import calendarImg from "../../../images/calendarImgFFF.png";
import clockImg from "../../../images/modal-mg/clockImdFFF.png";
import locationImg from "../../../images/modal-mg/locationImgFFF.png";

function ScheduleInfoModal({ infoVisibleModal, setInfoVisibleModal }) {
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
                <span>
                  {" "}
                  English A1 lesson for begineer teenagers after dinner
                </span>
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
              <p className="comment-box">
                Are you thinking about a future with the English language as
                your main working tool? Do you want to develop your
                communication skills?
              </p>
              <div className="schedule-box">
                <div className="box">
                  <img src={clockImg} alt="" />
                  <h4>Monday, July 15 15:00 - 16:00</h4>
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
