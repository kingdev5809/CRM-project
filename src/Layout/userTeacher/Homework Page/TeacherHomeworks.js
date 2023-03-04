import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneGroup } from "../../../Redux/Actions/TeacherAction";

function TeacherHomeworks({ group_id }) {
  const dispatch = useDispatch();

  const getGroup = useSelector((state) => state.oneGroup);
  const { oneGroupData } = getGroup;

  useEffect(() => {
    dispatch(getOneGroup(group_id));
  }, [group_id]);

  return (
    <div className="homework messages-cards">
      <div className="flex homework-title">
        <h1>Homeworks</h1>
        <button>Create</button>
      </div>
      <div className="items">
        {oneGroupData ? (
          oneGroupData?.group?.homeworks?.map((item) => (
            <div className="item">
              <div className="item-title">
                <img src={item.titleImg} alt="" />
                <h3>Engelska book 23 page eassy</h3>
              </div>
              <div className="item-content">
                <p>{item.messageText}</p>
                <div className="item-box">
                  <div className="user-box">
                    <img src={item.userImg} alt="" />
                    <div className="user-box-inner">
                      <h4>{item.userName}</h4>
                      <h6>{item.userGrade}</h6>
                    </div>
                  </div>
                  <div className="created-time">
                    <h6>{item.sendData}</h6>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
}

export default TeacherHomeworks;
