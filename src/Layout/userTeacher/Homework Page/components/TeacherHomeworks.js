import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getHomework } from "../../../../Redux/Actions/TeacherAction";
import AddHomeworkModal from "../../Modal/AddHomeworkModal";
import exclamationImg from "../../../images/navbar-img/exclamation.png";

function TeacherHomeworks({ group_id, allGroupData }) {
  const [visibleModal, setVisibleModal] = useState("d-none");
  const dispatch = useDispatch();
  const { token } = useParams();

  const getGroup = useSelector((state) => state.oneGroup);
  const { oneGroupData } = getGroup;

  const user = JSON.parse(localStorage.getItem("userInfo"));

  useEffect(() => {
    if (!group_id) {
      dispatch(getHomework(token));
      return;
    }
    dispatch(getHomework(group_id));
  }, [group_id]);

  const HandleCreatedAt = (item) => {
    const date = new Date(item.createdAt);
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    return `${year}-${month}-${day}`;
  };
  console.log(oneGroupData);
  return (
    <div className="homework messages-cards">
      <div className="flex homework-title">
        <h1>Homeworks</h1>
        <button onClick={() => setVisibleModal("d-block")}>Create</button>
      </div>
      <div className="items">
        {group_id ? "" : <h1>Choose group</h1>}
        {oneGroupData
          ?.map((item) => (
            <div className="item">
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
    </div>
  );
}

export default TeacherHomeworks;
