import React from "react";
import "../../layout.css";
import { deleteIcon } from "../../../Components/icons/svgIcons";
import calendarImg from "../../../images/calendarImg.png";
import userImg from "../../../images/navbar-img/userImg.png";
import clockImg from "../../../images/modal-mg/clockImd.png";
import locationImg from "../../../images/modal-mg/locationImg.png";
import studentImg from "../../../images/modal-mg/studentImg.png";
import starImg from "../../../images/navbar-img/starts.png";
import succsesImg from "../../../images/navbar-img/success.png";
import exclamationImg from "../../../images/navbar-img/exclamation.png";
function ScheduleInfoModal(props) {
  const { visibleModal, setVisibleModal, data } = props;

  return (
    <div>
      <div className={visibleModal}>
        <div
          onClick={() => setVisibleModal("d-none")}
          className="w-screen"
        ></div>
        <div className="modalWindows scheduleInfoModal ">
          <div className="modal-title">
            <h1>
              <img src={calendarImg} alt="" />
              <span>
                {" "}
                English A1 lesson for begineer teenagers after dinner
              </span>
            </h1>
            <span
              onClick={() => setVisibleModal("d-none")}
              className="closeModal"
            >
              {deleteIcon}
            </span>
          </div>

          <div className="modal-content">
            <div className="teacher-box user-box">
              <img src={userImg} alt="" />
              <div className="box">
                <h2>Sher Murodjonov</h2>
                <p>Teacher</p>
              </div>
            </div>
            <p className="comment-box">
              Are you thinking about a future with the English language as your
              main working tool? Do you want to develop your communication
              skills?
            </p>
            <div className="schedule-box">
              <div className="box">
                <img src={studentImg} alt="" />
                <h4>14 Students</h4>
              </div>
            </div>
            <div className="student-box">
              <div className="items">
                {/* item start */}
                <div className="rate-images">
                  <img className="success-img" src={succsesImg} alt="" />
                  <img
                    className="exclamation-img"
                    src={exclamationImg}
                    alt=""
                  />
                </div>
                {data?.length == 0 && <h1>Not Students</h1>}
                {data ? (
                  data.map((item) => (
                    <div className="item">
                      <div className="user-box">
                        <img src={item.student.photo} alt="" />
                        <div className="box">
                          <h3>{`${item.student.surname} ${item.student.name}`}</h3>
                          <p>Student</p>
                        </div>
                      </div>
                      <img className="star-img" src={starImg} alt="" />
                      <input type="radio" name="rate" />
                      <input type="radio" name="rate" />
                    </div>
                  ))
                ) : (
                  <h1>Loading...</h1>
                )}

                {/* item end */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScheduleInfoModal;
