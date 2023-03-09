import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteIcon,
  editIcon,
  phoneIcon,
} from "../../../Components/icons/svgIcons";
import Navbar from "../../../Components/Navbar";
import {
  deleteTeacher,
  getAllTeachers,
} from "../../../Redux/Actions/AdminAction";
import AddTeacherModal from "../Modals/AddTeacherModal";
import DeleteModal from "../Modals/DeleteModal";
import UpdateTeacherModal from "../Modals/UpdateTeacherModal";

const Teachers = () => {
  const [visibleModal, setVisibleModal] = useState("d-none");
  const [refresh, setRefresh] = useState("");
  const [deleteModalVisible, setDeleteModalVisible] = useState("d-none");
  const [teacher_id, setTeacher_Id] = useState();

  const [photo, setPhoto] = useState("");
  const [imageUpload, setImageUpload] = useState(null);

  // update modal useStates
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [address, setAddress] = useState("");
  const [updateVisibleModal, setUpdateVisibleModal] = useState("d-none");

  const dispatch = useDispatch();

  const getTeachers = useSelector((state) => state.teachers);
  const { Teacherdata } = getTeachers;

  useEffect(() => {
    dispatch(getAllTeachers());
  }, [refresh]);

  // handle set item for delete modal

  const handleSetItem = (item) => {
    setDeleteModalVisible("d-block");
    setTeacher_Id(item._id);
  };

  const handleDelete = () => {
    dispatch(deleteTeacher(teacher_id));
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
    setPhoto(user.photo);
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
          {Teacherdata ? (
            Teacherdata?.map((user) => (
              <div className="item " key={user._id}>
                <img src={user.photo} alt="" />
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
            )).reverse()
          ) : (
            <h1>LOADING . . .</h1>
          )}
        </div>

        <AddTeacherModal
          visibleModal={visibleModal}
          setVisibleModal={setVisibleModal}
          setRefresh={setRefresh}
          photo={photo}
          setPhoto={setPhoto}
          imageUpload={imageUpload}
          setImageUpload={setImageUpload}
        />
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
          setPhoto={setPhoto}
          imageUpload={imageUpload}
          setImageUpload={setImageUpload}
        />
      </div>
    </div>
  );
};

export default Teachers;
