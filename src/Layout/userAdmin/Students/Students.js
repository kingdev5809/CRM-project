import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteIcon, editIcon } from "../../../Components/icons/svgIcons";
import Navbar from "../../../Components/Navbar";
import userImg from "../../../images/navbar-img/userImg.png";
import { getAllStudents } from "../../../Redux/Actions/AdminAction";
import AddStudentModal from "../Modals/AddStudentModal";
const Students = () => {
  const [visibleModal, setVisibleModal] = useState("d-none");

  const dispatch = useDispatch();

  const getStudents = useSelector((state) => state.students);
  const { loading, data } = getStudents;
  console.log(data?.students);

  useEffect(() => {
    dispatch(getAllStudents());
  }, []);

  return (
    <div className="flex">
      <Navbar />
      <div className="studentsPage main-box container">
        <div className="main-header-pages ">
          <h1>All Students </h1>
          <button onClick={() => setVisibleModal("d-block")}>CREATE</button>
        </div>
        <div className="main">
          <div className="items">
            {data ? (
              data?.students.map((item) => (
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
                      <span> {item.phone_number} </span>
                    </p>
                    <p>
                      <span>Email:</span>
                      <span>{item.email}</span>
                    </p>
                    <p>
                      <span>Adress:</span>
                      <span>{item.address}</span>
                    </p>
                    <p>
                      <span>ID number:</span>
                      <span>{item.person_nr} </span>
                    </p>
                    <p>
                      <span>Parents name:</span>
                      <span>{item.parents_name}</span>
                    </p>
                    <p>
                      <span>Parent number:</span>
                      <span>{item.phone_number}</span>
                    </p>
                    <p>
                      <span>Login</span>
                      <span>{item.email}</span>
                    </p>
                    <p>
                      <span>Password</span>
                      <span>{item.show_password}</span>
                    </p>

                    <div className="itemBtn">
                      <div className="btn1">{editIcon} Edit</div>
                      <div className="btn2">{deleteIcon} Delete</div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h1>LOADING . . .</h1>
            )}
          </div>
        </div>
        <AddStudentModal
          visibleModal={visibleModal}
          setVisibleModal={setVisibleModal}
        />
      </div>
    </div>
  );
};

export default Students;
