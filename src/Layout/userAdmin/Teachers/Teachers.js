import React, { useState } from "react";
import { deleteIcon, phoneIcon } from "../../../Components/icons/svgIcons";
import Navbar from "../../../Components/Navbar";
import userImg from "../../../images/navbar-img/userImg.png";
import AddTeacheModal from "../Modals/AddTeacheModal";

const Teachers = () => {
  const [visibleModal, setVisibleModal] = useState("d-none");

  return (
    <div className="teacherPage">
      <div className="teacherPageNav">
        <Navbar />
      </div>
      <div className="teacherPageMain container">
        <div className="main-header-pages  ">
          <h1>Responsible staff and teachers</h1>
          <button onClick={() => setVisibleModal("d-block")}>CREATE</button>
        </div>

        <div className="items">
          <div className="item ">
            <img src={userImg} alt="" />
            <h2>Shermorad Holmadov</h2>
            <h4>Teacher</h4>
            <p>{phoneIcon}0706077070</p>
            <h5>@ info@onic.design</h5>
          </div>

          <div className="item">
            <img src={userImg} alt="" />
            <h2>Shermorad Holmadov</h2>
            <h4>Teacher</h4>
            <p>{phoneIcon}0706077070</p>
            <h5>@ info@onic.design</h5>
          </div>

          <div className="item">
            <img src={userImg} alt="" />
            <h2>Shermorad Holmadov</h2>
            <h4>Teacher</h4>
            <p>{phoneIcon}0706077070</p>
            <h5>@ info@onic.design</h5>
          </div>

          <div className="item">
            <img src={userImg} alt="" />
            <h2>Shermorad Holmadov</h2>
            <h4>Teacher</h4>
            <p>{phoneIcon}0706077070</p>
            <h5>@ info@onic.design</h5>
          </div>

          <div className="item">
            <img src={userImg} alt="" />
            <h2>Shermorad Holmadov</h2>
            <h4>Teacher</h4>
            <p>{phoneIcon}0706077070</p>
            <h5>@ info@onic.design</h5>
          </div>

          <div className="item">
            <img src={userImg} alt="" />
            <h2>Shermorad Holmadov</h2>
            <h4>Teacher</h4>
            <p>{phoneIcon}0706077070</p>
            <h5>@ info@onic.design</h5>
          </div>
        </div>
      </div>

     <AddTeacheModal
     visibleModal={visibleModal}
     setVisibleModal={setVisibleModal}
     />
    </div>
  );
};

export default Teachers;
