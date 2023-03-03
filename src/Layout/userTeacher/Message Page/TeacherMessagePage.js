import React, { useEffect, useState } from "react";
import Navbar from "../../../Components/Navbar";
import Message from "./Message";
import userImg from "../../../images/navbar-img/userImg.png";
import { useDispatch, useSelector } from "react-redux";
import { getAllGroups } from "../../../Redux/Actions/TeacherAction";
import { NavLink } from "react-router-dom";

function TeacherMessagePage() {
  const [group_id, setGroup_id] = useState();
  const [group_name, setGroup_name] = useState();

  const getGroups = useSelector((state) => state.groups);
  const { data } = getGroups;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllGroups());
  }, []);


  const handleChangeGroup = (item) => {
    setGroup_id(item._id);
    setGroup_name(item.group_name);
  };
  return (
    <div className="flex">
      <Navbar />
      <div className="messagesPage container">
        <div className="class-sec group-cards">
          <h1>Class Groups</h1>
          <div className="items">
            {data?.groups?.map((item) => (
              <div className="item">
                <div className="item-box">
                  <h3>{item.group_name}</h3>
                  <p>{item.describtion}</p>
                </div>
                <div className="user-box">
                  <img src={userImg} alt="" />
                  <div className="user-box-inner">
                    <h4>{item.teacher.name}</h4>
                    <h6>Teacher class group</h6>
                  </div>
                </div>

                <div className="item-box-3"></div>
                <NavLink to={`/student/message/engelska`}>
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
          <Message group_id={group_id} group_name={group_name} />
        </div>
      </div>
    </div>
  );
}

export default TeacherMessagePage;
