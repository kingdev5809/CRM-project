import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneGroup } from "../../../Redux/Actions/TeacherAction";
import AddHomeworkModal from "../Modal/AddHomeworkModal";
import exclamationImg from '../../../images/navbar-img/exclamation.png'

function TeacherHomeworks({ group_id, allGroupData }) {
  const [visibleModal, setVisibleModal] = useState("d-none");
  const dispatch = useDispatch();
  const { token } = useParams();

  const getGroup = useSelector((state) => state.oneGroup);
  const { oneGroupData } = getGroup;

  useEffect(() => {
    if (!group_id) {
      dispatch(getOneGroup(token));
      return;
    }
    dispatch(getOneGroup(group_id));
  }, [group_id]);

  const HandleCreatedAt = (item) => {
    const date = new Date(item.createdAt);
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()
    return `${year}-${month}-${day}`
  };
  console.log(oneGroupData);
  return (
    <div className="homework messages-cards">
      <div className="flex homework-title">
        <h1>Homeworks</h1>
        <button onClick={() => setVisibleModal("d-block")}>Create</button>
      </div>
      <div className="items">
        {oneGroupData ? (
          oneGroupData?.group?.homeworks?.map((item) => (
            <div className="item">
              <div className="item-title">
                <img src={exclamationImg} alt="" />
                <h3>{item.name}</h3>
              </div>
              <div className="item-content">
                <p>{item.text}</p>
                <div className="item-box">
                  <div className="user-box">
                    <img src={item.sender?.photo} alt="" />
                    <div className="user-box-inner">
                      <h4>{item.sender?.name}</h4>
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
        ) : (
          <h1>Loading...</h1>
        )}
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
