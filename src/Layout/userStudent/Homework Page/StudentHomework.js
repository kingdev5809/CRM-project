import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Navbar from "../../../Components/Navbar";
import { getAllGroups } from "../../../Redux/Actions/StudentAction";
import Homeworks from "./components/Homeworks";
import userImg from "../../../images/navbar-img/userImg.png";

function Homework() {
  const [group_id, setGroup_id] = useState();
  const [teacher, setTeacher] = useState([]);

  const dispatch = useDispatch();

  const getGroups = useSelector((state) => state.groups);
  const { allGroupData } = getGroups;

  useEffect(() => {
    dispatch(getAllGroups());
  }, []);

  const handleChangeGroup = (item) => {
    setGroup_id(item._id);
    setTeacher(item.teacher);
  };
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
                <NavLink to={`/student/homework/engelska`}>
                  <div className="click-window"></div>
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
          <Homeworks group_id={group_id} teacher={teacher} />
        </div>
      </div>
    </div>
  );
}

export default Homework;
