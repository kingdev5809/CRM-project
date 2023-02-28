import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteIcon,
  editIcon,
  phoneIcon,
} from "../../../Components/icons/svgIcons";
import Navbar from "../../../Components/Navbar";
import userImg from "../../../images/navbar-img/userImg.png";
import {
  deleteTeacher,
  getAllTeachers,
} from "../../../Redux/Actions/AdminAction";
import { teacher } from "../../../Redux/Actions/ModalAction";
import AddTeacheModal from "../Modals/AddTeacheModal";
import DeleteModal from "../Modals/DeleteModal";

const Teachers = () => {
  const [visibleModal, setVisibleModal] = useState("d-none");
  const [refresh, setRefresh] = useState("");
  const [deleteModalVisible, setDeleteModalVisible] = useState("d-none");
  const [teacher_id, setTeacher_Id] = useState();
  const dispatch = useDispatch();

  const getTeachers = useSelector((state) => state.teachers);
  const { loading, data } = getTeachers;

  useEffect(() => {
    dispatch(getAllTeachers());
  }, [refresh]);

  const handleSetItem = (item) => {
    setDeleteModalVisible("d-block");
    setTeacher_Id(item._id);
  };

  function handleDelete() {
    dispatch(deleteTeacher(teacher_id, setRefresh));
    setDeleteModalVisible("d-none");
    setTeacher_Id();
  }
  return (
    <div className="flex">
      <Navbar />
      <div className="teacherPage main-box container">
        <div className="main-header-pages  ">
          <h1>Responsible staff and teachers</h1>
          <button onClick={() => setVisibleModal("d-block")}>CREATE</button>
        </div>

        <div className="items">
          {data ? (
            data.teachers
              .map((user) => (
                <div className="item ">
                  <img src={userImg} alt="" />
                  <h2>
                    {user.name} {user.surname}
                  </h2>
                  <h4>Teacher</h4>
                  <p>
                    {phoneIcon} {user.phone_number}
                  </p>
                  <div className="item-inner">
                    <div className="box box-logn">
                      {/* <h4> Login</h4> */}
                      <h5>{user.email}</h5>
                    </div>
                    <div className="box box-logn">
                      {/* <h4>Password</h4> */}
                      <h6> {user.show_password}</h6>
                    </div>
                    <div className="box itemBtn">
                      <span className="editBtn">
                        <i className="svg2">{editIcon}</i> Edit
                      </span>
                      <span
                        className="deleteBtn"
                        onClick={() => handleSetItem(user)}
                      >
                        <i className="svg3">{deleteIcon}</i> Delete
                      </span>
                    </div>
                  </div>
                </div>
              ))
              .reverse()
          ) : (
            <h1>LOADING . . .</h1>
          )}
        </div>

        <AddTeacheModal
          visibleModal={visibleModal}
          setVisibleModal={setVisibleModal}
          setRefresh={setRefresh}
        />
        <DeleteModal
          deleteModalVisible={deleteModalVisible}
          setDeleteModalVisible={setDeleteModalVisible}
          student_id={teacher_id}
          setRefresh={setRefresh}
          setStudent_Id={setTeacher_Id}
          handleDelete={handleDelete}
          deletedName="teacher"
        />
      </div>
    </div>
  );
};

export default Teachers;
