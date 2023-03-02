import React, { useEffect, useState } from "react";
import {
  deleteIcon,
  editIcon,
  studentIcon,
} from "../../../Components/icons/svgIcons";
import Navbar from "../../../Components/Navbar";
import "../../layout.css";
import userImg from "../../../images/navbar-img/userImg.png";
import { useDispatch, useSelector } from "react-redux";
import { getAllGroups } from "../../../Redux/Actions/TeacherAction";
import { NavLink } from "react-router-dom";

const TeacherClasses = () => {
  const [visibleModal, setVisibleModal] = useState("d-none");

  const [refresh, setRefresh] = useState("");

  const dispatch = useDispatch();

  const getGroups = useSelector((state) => state.groups);
  const { data } = getGroups;

  useEffect(() => {
    dispatch(getAllGroups());
  }, [refresh]);

  return (
    <div className="flex">
      <Navbar />
      <div className="classes-page  main-box container ">
        {/* <div className="navbar-box">
        <Navbar />
      </div> */}
        <div className="main-header-pages ">
          <h1>All Classes</h1>
        </div>
        <div className="items container-95">
          {data ? (
            data?.groups
              .map((item) => (
                <div className="item">
                  <img src={userImg} alt="" />
                  <div className="item-box">
                    <NavLink to={`/teacher/classes/${item._id}`}>
                      <h3> {item.group_name} </h3>
                    </NavLink>
                    <h4>
                      <b>Teacher:</b> {item.teacher?.name}
                    </h4>
                    <div className="itemBtn">
                      <span>
                        <i className="svg1">{studentIcon}</i> Student:14{" "}
                      </span>{" "}
                    </div>
                  </div>
                  <div className="item-box-2"></div>
                </div>
              ))
              .reverse()
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeacherClasses;
