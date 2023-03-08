import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getHomework,
  getOneGroup,
} from "../../../../Redux/Actions/TeacherAction";
import AddHomeworkModal from "../../Modal/AddHomeworkModal";
import exclamationImg from "../../../../images/navbar-img/exclamation.png";
import ScheduleInfoModal from "../../Modal/ScheduleInfoModal";

function TeacherHomeworks({ group_id, allGroupData }) {
  const [visibleModal, setVisibleModal] = useState("d-none");
  const [rateVisibleModal, setRateVisibleModal] = useState("d-none");
  const [homework_id, setHomework_id] = useState("");
  const dispatch = useDispatch();
  const { token } = useParams();

  const getHomeworks = useSelector((state) => state.homeworks);
  const { homeworkData } = getHomeworks;

  const user = JSON.parse(localStorage.getItem("userInfo"));

  const getGroup = useSelector((state) => state.oneGroup);
  const { oneGroupData } = getGroup;

  useEffect(() => {
    if (!group_id) {
      dispatch(getHomework(token));
    } else {
      dispatch(getHomework(group_id));
    }
  }, [group_id]);

  const handleOpenRateModal = (item) => {
    if (!group_id) {
      dispatch(getOneGroup(token));
    } else {
      dispatch(getOneGroup(group_id));
    }
    setRateVisibleModal("d-block");
    setHomework_id(item._id)
  };
  const HandleCreatedAt = (item) => {
    const date = new Date(item.createdAt);
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    return `${year}-${month}-${day}`;
  };
  return (
    <div className="homework messages-cards">
      <div className="flex homework-title">
        <h1>Homeworks</h1>
        <button onClick={() => setVisibleModal("d-block")}>Create</button>
      </div>
      <div className="items">
        {homeworkData?.length == 0 && <h1>Choose group</h1>}

        {homeworkData
          ?.map((item) => (
            <div className="item" key={item._id}>
              <div className="item-title">
                <img src={exclamationImg} alt="" />
                <h3>{item.name}</h3>
              </div>
              <div className="item-content">
                <p>{item.text}</p>
                <div className="item-box">
                  <div className="user-box">
                    <img src={user?.teach?.photo} alt="" />
                    <div className="user-box-inner">
                      <h4>{user?.teach?.name}</h4>
                      <h6>Teacher</h6>
                    </div>
                  </div>
                  <div
                    className="click-window"
                    onClick={() => handleOpenRateModal(item)}
                  ></div>
                  <div className="created-time">
                    <h6>{HandleCreatedAt(item)}</h6>
                  </div>
                </div>
              </div>
            </div>
          ))
          .reverse()}
      </div>
      <AddHomeworkModal
        visibleModal={visibleModal}
        setVisibleModal={setVisibleModal}
        allGroupData={allGroupData}
      />
      <ScheduleInfoModal
        visibleModal={rateVisibleModal}
        setVisibleModal={setRateVisibleModal}
        data={oneGroupData}
        group_id={group_id ? group_id : token}
        homework_id={homework_id}
      />
    </div>
  );
}

export default TeacherHomeworks;
