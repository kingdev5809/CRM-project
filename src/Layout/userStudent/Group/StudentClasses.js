import React, { useEffect } from "react";

import Navbar from "../../../Components/Navbar";
import "../../layout.css";
import userImg from "../../../images/navbar-img/userImg.png";
import { useDispatch, useSelector } from "react-redux";
import { getAllGroups } from "../../../Redux/Actions/StudentAction";

const StudentClasses = () => {
  const dispatch = useDispatch();

  const getGroups = useSelector((state) => state.groups);
  const { allGroupData } = getGroups;

  useEffect(() => {
    dispatch(getAllGroups());
  }, []);

  return (
    <div className="flex">
      <Navbar />
      <div className="classes-page  main-box container ">
        <div className="main-header-pages ">
          <h1>All Classes</h1>
        </div>
        <div className="items container-95">
          {allGroupData ? (
            allGroupData?.map((item) => (
              <div className="item">
                <img src={userImg} alt="" />
                <div className="item-box">
                  <h3> {item.group_name} </h3>
                  <h4>
                    <b>Teacher:</b> {item.teacher.name}
                  </h4>
                </div>
                <div className="item-box-2"></div>
              </div>
            ))
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentClasses;
