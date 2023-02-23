import React, { useState } from "react";
import {
  deleteIcon,
  editIcon,
  studentIcon,
} from "../../../Components/icons/svgIcons";
import Navbar from "../../../Components/Navbar";
import "../../layout.css";
import userImg from "../../../images/navbar-img/userImg.png";
import AddClassModal from "../Modals/AddClassModal";

const Classes = () => {
  const [visibleModal, setVisibleModal] = useState("d-none");

  const smallData = [
    {
      title: "Engelska A2",
      name: "Shermorad Holmatov",
      color: "bg-red-500",
    },
    {
      title: "Engelska A2",
      name: "Shermorad Holmatov",
      color: "bg-red-500",
    },
    {
      title: "Engelska A2",
      name: "Shermorad Holmatov",
      color: "bg-red-500",
    },
    {
      title: "Engelska A2",
      name: "Shermorad Holmatov",
      color: "bg-red-500",
    },
    {
      title: "Engelska A2",
      name: "Shermorad Holmatov",
      color: "bg-red-500",
    },
    {
      title: "Engelska A2",
      name: "Shermorad Holmatov",
      color: "bg-red-500",
    },
    {
      title: "Engelska A2",
      name: "Shermorad Holmatov",
      color: "bg-red-500",
    },
    {
      title: "Engelska A2",
      name: "Shermorad Holmatov",
      color: "bg-red-500",
    },
    {
      title: "Engelska A2",
      name: "Shermorad Holmatov",
      color: "bg-red-500",
    },
  ];
  return (
    <div className="flex">
      <Navbar/>
      <div className="classes-page  main-box container ">
        {/* <div className="navbar-box">
        <Navbar />
      </div> */}
        <div className="main-header-pages ">
          <h1>All Classes</h1>
          <button onClick={() => setVisibleModal("d-block")}>CREATE</button>
        </div>
        <div className="items container-95">
          {smallData.map((item) => (
            <div className="item">
              <img src={userImg} alt="" />
              <div className="item-box">
                <h3> {item.title} </h3>
                <h4>
                  <b>Teacher:</b> {item.name}
                </h4>
                <div className="itemBtn">
                  <span>
                    <i className="svg1">{studentIcon}</i> Student:14{" "}
                  </span>{" "}
                  <span>
                    <i className="svg2">{editIcon}</i> Edit{" "}
                  </span>
                  <span>
                    <i className="svg3">{deleteIcon}</i> Delete
                  </span>
                </div>
              </div>
              <div className="item-box-2"></div>
            </div>
          ))}
        </div>

        <AddClassModal
          visibleModal={visibleModal}
          setVisibleModal={setVisibleModal}
        />
      </div>
    </div>
  );
};

export default Classes;
