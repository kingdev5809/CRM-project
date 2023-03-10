import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import moment from "moment";
import {
  getHomework,
  getOneGroup,
} from "../../../../Redux/Actions/TeacherAction";
import AddHomeworkModal from "../../Modal/AddHomeworkModal";
import exclamationImg from "../../../../images/navbar-img/exclamation.png";
import successImg from "../../../../images/navbar-img/success.png";

import ScheduleInfoModal from "../../Modal/ScheduleInfoModal";
import { toast } from "react-toastify";

function TeacherHomeworks({ group_id, allGroupData }) {
  const [visibleModal, setVisibleModal] = useState("d-none");
  const [rateVisibleModal, setRateVisibleModal] = useState("d-none");
  const [homework_id, setHomework_id] = useState("");
  const [refresh, setRefresh] = useState('')
  const dispatch = useDispatch();
  const { token } = useParams();


  const user = JSON.parse(localStorage.getItem("userInfo"));

  const getGroup = useSelector((state) => state.oneGroup);
  const { oneGroupData } = getGroup;


  
  const getHomeworks = useSelector((state) => state.homeworks);
  const { homeworkData } = getHomeworks;
  
  useEffect(() => {
    if (!group_id) {
      dispatch(getHomework(token));
    } else {
      dispatch(getHomework(group_id));
    }
  }, [group_id]);
  


  useEffect(() => {
    if (!group_id) {
      dispatch(getHomework(token));
    } else {
      dispatch(getHomework(group_id));
    }
  }, [refresh]);

  const handleOpenRateModal = (item) => {
    if (item.check) {
      toast.warning("this homework already checked");
    } else {
      if (!group_id) {
        dispatch(getOneGroup(token));
      } else {
        dispatch(getOneGroup(group_id));
      }
      setRateVisibleModal("d-block");
      setHomework_id(item._id);
    }
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
                <img src={item.check ? successImg : exclamationImg} alt="" />
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
                    <h6>
                      {item.createdAt
                        ? moment(item.createdAt).format("lll")
                        : null}
                    </h6>
                  </div>
                </div>
              </div>

              <div
                className="click-window"
                onClick={() => handleOpenRateModal(item)}
              ></div>
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
        setRefresh={setRefresh}
      />
    </div>
  );
}

export default TeacherHomeworks;
