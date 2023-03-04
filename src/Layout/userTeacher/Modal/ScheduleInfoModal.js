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
  const { visibleModal, setVisibleModal } = props;

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
                <img src={clockImg} alt="" />
                <h4>Monday,July 15 15:00- 16:30</h4>
              </div>
              <div className="flex">
                <div className="box">
                  <img src={locationImg} alt="" />
                  <h4>Rinkeby 15,Stockholm</h4>
                </div>
                <div className="box">
                  <img src={studentImg} alt="" />
                  <h4>14 Students</h4>
                </div>
              </div>
            </div>
            <div className="student-box">
              <div className="items">
                {/* item start */}
                <div className="item">
                  <div className="user-box">
                    <img src={userImg} alt="" />
                    <div className="box">
                      <h2>Sher Murodjonov</h2>
                      <p>Teacher</p>
                    </div>
                  </div>
                  <img className="star-img" src={starImg} alt="" />
                  <img className="success-img" src={succsesImg} alt="" />
                  <img
                    className="exclamation-img"
                    src={exclamationImg}
                    alt=""
                  />
                </div>
                {/* item end */}

                {/* item start */}
                <div className="item">
                  <div className="user-box">
                    <img src={userImg} alt="" />
                    <div className="box">
                      <h2>Sher Murodjonov</h2>
                      <p>Teacher</p>
                    </div>
                  </div>
                  <img className="star-img" src={starImg} alt="" />
                  <img className="success-img" src={succsesImg} alt="" />
                  <img
                    className="exclamation-img"
                    src={exclamationImg}
                    alt=""
                  />
                </div>
                {/* item end */}

                {/* item start */}
                <div className="item">
                  <div className="user-box">
                    <img src={userImg} alt="" />
                    <div className="box">
                      <h2>Sher Murodjonov</h2>
                      <p>Teacher</p>
                    </div>
                  </div>
                  <img className="star-img" src={starImg} alt="" />
                  <img className="success-img" src={succsesImg} alt="" />
                  <img
                    className="exclamation-img"
                    src={exclamationImg}
                    alt=""
                  />
                </div>
                {/* item end */}

                {/* item start */}
                <div className="item">
                  <div className="user-box">
                    <img src={userImg} alt="" />
                    <div className="box">
                      <h2>Sher Murodjonov</h2>
                      <p>Teacher</p>
                    </div>
                  </div>
                  <img className="star-img" src={starImg} alt="" />
                  <img className="success-img" src={succsesImg} alt="" />
                  <img
                    className="exclamation-img"
                    src={exclamationImg}
                    alt=""
                  />
                </div>
                {/* item end */}

                {/* item start */}
                <div className="item">
                  <div className="user-box">
                    <img src={userImg} alt="" />
                    <div className="box">
                      <h2>Sher Murodjonov</h2>
                      <p>Teacher</p>
                    </div>
                  </div>
                  <img className="star-img" src={starImg} alt="" />
                  <img className="success-img" src={succsesImg} alt="" />
                  <img
                    className="exclamation-img"
                    src={exclamationImg}
                    alt=""
                  />
                </div>
                {/* item end */}

                {/* item start */}
                <div className="item">
                  <div className="user-box">
                    <img src={userImg} alt="" />
                    <div className="box">
                      <h2>Sher Murodjonov</h2>
                      <p>Teacher</p>
                    </div>
                  </div>
                  <img className="star-img" src={starImg} alt="" />
                  <img className="success-img" src={succsesImg} alt="" />
                  <img
                    className="exclamation-img"
                    src={exclamationImg}
                    alt=""
                  />
                </div>
                {/* item end */}

                {/* item start */}
                <div className="item">
                  <div className="user-box">
                    <img src={userImg} alt="" />
                    <div className="box">
                      <h2>Sher Murodjonov</h2>
                      <p>Teacher</p>
                    </div>
                  </div>
                  <img className="star-img" src={starImg} alt="" />
                  <img className="success-img" src={succsesImg} alt="" />
                  <img
                    className="exclamation-img"
                    src={exclamationImg}
                    alt=""
                  />
                </div>
                {/* item end */}

                {/* item start */}
                <div className="item">
                  <div className="user-box">
                    <img src={userImg} alt="" />
                    <div className="box">
                      <h2>Sher Murodjonov</h2>
                      <p>Teacher</p>
                    </div>
                  </div>
                  <img className="star-img" src={starImg} alt="" />
                  <img className="success-img" src={succsesImg} alt="" />
                  <img
                    className="exclamation-img"
                    src={exclamationImg}
                    alt=""
                  />
                </div>
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
