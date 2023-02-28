import React, { useEffect, useState } from "react";
import {
  deleteIcon,
  editIcon,
  studentIcon,
} from "../../../Components/icons/svgIcons";
import Navbar from "../../../Components/Navbar";
import "../../layout.css";
import userImg from "../../../images/navbar-img/userImg.png";
import AddClassModal from "../Modals/AddClassModal";
import { useDispatch, useSelector } from "react-redux";
import { getAllGroups } from "../../../Redux/Actions/AdminAction";
import { NavLink } from "react-router-dom";

const Classes = () => {
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
          <button onClick={() => setVisibleModal("d-block")}>CREATE</button>
        </div>
        <div className="items container-95">
          {data ? (
            data?.groups
              .map((item) => (
                <div className="item">
                  <img src={userImg} alt="" />
                  <div className="item-box">
                    <NavLink to={`/admin/classes/${item._id}`}>
                      <h3> {item.group_name} </h3>
                    </NavLink>
                    <h4>
                      <b>Teacher:</b> {item?.teacher?.name}
                    </h4>
                    <div className="itemBtn">
                      <span>
                        <i className="svg1">{studentIcon}</i> Student:14{" "}
                      </span>{" "}
                      <span className="editBtn">
                        <i className="svg2">{editIcon}</i> Edit{" "}
                      </span>
                      <span className="deleteBtn">
                        <i className="svg3">{deleteIcon}</i> Delete
                      </span>
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

        <AddClassModal
          visibleModal={visibleModal}
          setVisibleModal={setVisibleModal}
          setRefresh={setRefresh}
        />
      </div>
    </div>
  );
};

export default Classes;
