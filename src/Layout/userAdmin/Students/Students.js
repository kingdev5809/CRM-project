import React, { useState } from "react";
import { deleteIcon, editIcon } from "../../../Components/icons/svgIcons";
import Navbar from "../../../Components/Navbar";
import userImg from "../../../images/navbar-img/userImg.png";
import AddStudentModal from "../Modals/AddStudentModal";
const Students = () => {
  const [visibleModal, setVisibleModal] = useState("d-none");

  const smallData = [
    {
      telefon: "+998949179933",
      email: "hasanboy@gmail.com",
      adress: "Tashkent",
      idNumber: "63e9cc6467477e5625f435e8",
      parentsName: "Parent Name",
      parentNumber: "+998996123344",
    },
    {
      telefon: "+998949179933",
      email: "hasanboy@gmail.com",
      adress: "Tashkent",
      idNumber: "63e9cc6467477e5625f435e8",
      parentsName: "Parent Name",
      parentNumber: "+998996123344",
    },
    {
      telefon: "+998949179933",
      email: "hasanboy@gmail.com",
      adress: "Tashkent",
      idNumber: "63e9cc6467477e5625f435e8",
      parentsName: "Parent Name",
      parentNumber: "+998996123344",
    },
    {
      telefon: "+998949179933",
      email: "hasanboy@gmail.com",
      adress: "Tashkent",
      idNumber: "63e9cc6467477e5625f435e8",
      parentsName: "Parent Name",
      parentNumber: "+998996123344",
    },
  ];
  return (
    <div className="studentsPage">
      <div className="studentsPageNav">
        <Navbar />
      </div>
      <div className="studentsPageMain container">
        <div className="main-header-pages ">
          <h1>All Students </h1>
          <button onClick={()=> setVisibleModal('d-block')}>CREATE</button>
        </div>
        <div className="main">
          <div className="items">
            {smallData.map((item) => (
              <div className="item">
                <div className="title">
                  <img src={userImg} alt="" />
                  <div className="text-box">
                    <h3>Shermorad Holmatov</h3>
                    <p>
                      <span>Student</span> <span>Points 20993</span>
                    </p>
                  </div>
                </div>
                <div className="item-content">
                  <p>
                    <span>Telefon:</span>
                    <span> {item.telefon} </span>
                  </p>
                  <p>
                    <span>Email:</span>
                    <span>{item.email}</span>
                  </p>
                  <p>
                    <span>Adress:</span>
                    <span>{item.adress}</span>
                  </p>
                  <p>
                    <span>ID number:</span>
                    <span>{item.idNumber} </span>
                  </p>
                  <p>
                    <span>Parents name:</span>
                    <span>Parent Name</span>
                  </p>
                  <p>
                    <span>Parent number:</span>
                    <span>{item.parentNumber}</span>
                  </p>
                  <div className="itemBtn">
                    <div className="btn1">{editIcon} Edit</div>
                    <div className="btn2">{deleteIcon} Delete</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <AddStudentModal
      visibleModal={visibleModal}
      setVisibleModal={setVisibleModal}
      /> 
    </div>
  );
};

export default Students;
