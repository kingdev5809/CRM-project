import React, { useState } from "react";
import { useSelector } from "react-redux";
import { deleteIcon, phoneIcon } from "../../../Components/icons/svgIcons";
import Navbar from "../../../Components/Navbar";
import userImg from "../../../images/navbar-img/userImg.png";
import { teacher } from "../../../Redux/Actions/ModalAction";
import AddTeacheModal from "../Modals/AddTeacheModal";

const Teachers = () => {
  const [visibleModal, setVisibleModal] = useState("d-none");
  const teacherPosts = useSelector((state) => state.teacher);

  console.log(teacherPosts);
  return (
    <div className="teacherPage container">
      
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
        </div>
      

      <AddTeacheModal
        visibleModal={visibleModal}
        setVisibleModal={setVisibleModal}
      />
    </div>
  );
};

export default Teachers;
