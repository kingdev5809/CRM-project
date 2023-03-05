import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Navbar from "../../../Components/Navbar";
import { getAllGroups } from "../../../Redux/Actions/TeacherAction";
import userImg from "../../../images/navbar-img/userImg.png";
import TeacherHomeworks from "./TeacherHomeworks";

function TeacherHomeworkPage() {
  const [group_id, setGroup_id] = useState();

  const dispatch = useDispatch();

  const getGroups = useSelector((state) => state.groups);
  const { allGroupData } = getGroups;

  useEffect(() => {
    dispatch(getAllGroups());
  }, []);

  const handleChangeGroup = (item) => {
    setGroup_id(item._id);
  };
  console.log(group_id);
  return (
    <div className="flex">
      <Navbar />
      <div className="homeworkPage container">
        <div className="group-sec group-cards">
          <h1>Class Groups</h1>
          <div className="items">
            {allGroupData?.groups?.map((item) => (
              <div className="item">
                <div className="item-box">
                  <h3>{item.group_name}</h3>
                </div>
                <div className="user-box">
                  <img src={userImg} alt="" />
                  <div className="user-box-inner">
                    <h4>{item.teacher.name}</h4>
                    <h6>Teacher class group</h6>
                  </div>
                </div>

                <div className="item-box-3"></div>
                <NavLink to={`/teacher/homework/${item._id}`}>
                  <div
                    onClick={() => handleChangeGroup(item)}
                    className="click-window"
                  ></div>
                </NavLink>
                <div
                  onClick={() => handleChangeGroup(item)}
                  className="click-window-2"
                ></div>
              </div>
            ))}
          </div>
        </div>
        <div className="deskop-responsive">
          <TeacherHomeworks group_id={group_id} allGroupData={allGroupData} />
        </div>
      </div>
    </div>
  );
}

export default TeacherHomeworkPage;
