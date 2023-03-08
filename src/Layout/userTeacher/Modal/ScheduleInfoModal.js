import React, { useEffect, useState } from "react";
import "../../layout.css";
import { deleteIcon } from "../../../Components/icons/svgIcons";
import calendarImg from "../../../images/calendarImg.png";
import userImg from "../../../images/navbar-img/userImg.png";
import studentImg from "../../../images/modal-mg/studentImg.png";
import succsesImg from "../../../images/navbar-img/success.png";
import exclamationImg from "../../../images/navbar-img/exclamation.png";
import Rating from "../../../Components/Rating";
import { useDispatch } from "react-redux";
import { postCheckHomework } from "../../../Redux/Actions/TeacherAction";
function ScheduleInfoModal(props) {
  const { visibleModal, setVisibleModal, data, homework_id, group_id } = props;

  const user = JSON.parse(localStorage.getItem("userInfo"));

  let dataRates = [];
  let studentsId = [];
  for (let i = 0; i < data?.length; i++) {
    dataRates.push({
      rate: 0,
      teacher_id: user.teach._id,
      student_id: data[i].student._id,
      homework_id,
      group_id,
    });
  }
  const handleAddStudentId = (id) => {
    if (!studentsId.includes(id)) {
      studentsId.push(id);
    }
  };
  const handleRemoveStudentId = (item) => {
    studentsId = studentsId.filter((id) => id !== item);
  };
  const dispatch = useDispatch();

  const handleCheckHomework = () => {
    dispatch(
      postCheckHomework(
        { data: dataRates, group_id: homework_id, students_id: studentsId },
        setVisibleModal,
        dataRates,
        studentsId
      )
    );

  };
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
                  data.map((item, index) => (
                    <div className="item" key={item.student._id}>
                      <div className="user-box">
                        <img src={item.student.photo} alt="" />
                        <div className="box">
                          <h3>{`${item.student.surname} ${item.student.name}`}</h3>
                          <p>Student {dataRates[index].rate} </p>
                        </div>
                      </div>
                      <Rating item={item} index={index} dataRates={dataRates} />
                      <input
                        type="radio"
                        name={item._id}
                        onClick={() => handleAddStudentId(item.student._id)}
                      />
                      <input
                        type="radio"
                        name={item._id}
                        onClick={() => handleRemoveStudentId(item.student._id)}
                      />
                    </div>
                  ))
                ) : (
                  <h1>Loading...</h1>
                )}

                {/* item end */}
              </div>
            </div>
            <button onClick={handleCheckHomework}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScheduleInfoModal;
