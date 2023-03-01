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
// import AddTeacheModal from "../Modals/AddTeacheModal";
import DeleteModal from "../Modals/DeleteModal";
import UpdateTeacherModal from "../Modals/UpdateTeacherModal";

const Teachers = () => {
  const [visibleModal, setVisibleModal] = useState("d-none");
  const [refresh, setRefresh] = useState("");
  const [deleteModalVisible, setDeleteModalVisible] = useState("d-none");
  const [teacher_id, setTeacher_Id] = useState();

  // update modal useStates
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [address, setAddress] = useState("");
  const [photo, setPhoto] = useState(
    "http://cdn.onlinewebfonts.com/svg/img_518099.png"
  );
  const [updateVisibleModal, setUpdateVisibleModal] = useState("d-none");

  const dispatch = useDispatch();

  const getTeachers = useSelector((state) => state.teachers);
  const { loading, data } = getTeachers;

  useEffect(() => {
    dispatch(getAllTeachers());
  }, [refresh]);

  // handle set item for delete modal

  const handleSetItem = (item) => {
    setDeleteModalVisible("d-block");
    setTeacher_Id(item._id);
  };

  const handleDelete = () => {
    dispatch(deleteTeacher(teacher_id, setRefresh));
    setDeleteModalVisible("d-none");
    setTeacher_Id();
  };

  // handle put
  const handleUpdateSetItem = (user) => {
    setName(user.name);
    setSurname(user.surname);
    setSubject(user.subject);
    setEmail(user.email);
    setPhone_number(user.phone_number);
    setAddress(user.address);
    setUpdateVisibleModal("d-block");
    setTeacher_Id(user._id);
  };

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
                <div className="item " key={user._id}>
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
                      <span
                        className="editBtn"
                        onClick={() => handleUpdateSetItem(user)}
                      >
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

        {/* <AddTeacheModal
          visibleModal={visibleModal}
          setVisibleModal={setVisibleModal}
          setRefresh={setRefresh}
        /> */}
        <DeleteModal
          deleteModalVisible={deleteModalVisible}
          setDeleteModalVisible={setDeleteModalVisible}
          handleDelete={handleDelete}
          deletedName="teacher"
        />

        <UpdateTeacherModal
          updateVisibleModal={updateVisibleModal}
          setUpdateVisibleModal={setUpdateVisibleModal}
          refresh={refresh}
          setRefresh={setRefresh}
          name={name}
          surname={surname}
          subject={subject}
          email={email}
          phone_number={phone_number}
          address={address}
          photo={photo}
          teacher_id={teacher_id}
          setName={setName}
          setSurname={setSurname}
          setSubject={setSubject}
          setEmail={setEmail}
          setPhone_number={setPhone_number}
          setAddress={setAddress}
        />
      </div>
    </div>
  );
};

export default Teachers;
