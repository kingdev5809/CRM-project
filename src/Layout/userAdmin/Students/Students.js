import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteIcon, editIcon } from "../../../Components/icons/svgIcons";
import Navbar from "../../../Components/Navbar";
import userImg from "../../../images/navbar-img/userImg.png";
import {
  deleteStudent,
  getAllStudents,
} from "../../../Redux/Actions/AdminAction";
import AddStudentModal from "../Modals/AddStudentModal";
import DeleteModal from "../Modals/DeleteModal";
import UpdateStudentModal from "../Modals/UpdateStudentModal";
const Students = () => {
  const [visibleModal, setVisibleModal] = useState("d-none");
  const [refresh, setRefresh] = useState("");
  const [deleteModalVisible, setDeleteModalVisible] = useState("d-none");
  const [student_id, setStudent_Id] = useState();
  const dispatch = useDispatch();

  // update useStates
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [address, setAddress] = useState("");
  const [photo, setPhoto] = useState(
    "http://cdn.onlinewebfonts.com/svg/img_518099.png"
  );
  const [person_nr, setPerson_nr] = useState("");
  const [parents_name, setParents_name] = useState("");
  const [parents_phone_number, setParents_phone_number] = useState("");
  const [updateVisibleModal, setUpdateVisibleModal] = useState("d-none");

  const getStudents = useSelector((state) => state.students);
  const { loading, data } = getStudents;

  useEffect(() => {
    dispatch(getAllStudents());
  }, [refresh]);
  // handles delte item
  const handleSetItem = (item) => {
    setDeleteModalVisible("d-block");
    setStudent_Id(item._id);
  };

  function handleDelete() {
    dispatch(deleteStudent(student_id, setRefresh));
    setDeleteModalVisible("d-none");
    setStudent_Id();
  }

  // handle put
  const handleUpdateSetItem = (item) => {
    setName(item.name);
    setSurname(item.surname);
    setEmail(item.email);
    setPhone_number(item.phone_number);
    setAddress(item.address);
    setStudent_Id(item._id);
    setPerson_nr(item.person_nr);
    setParents_name(item.parents_name);
    setParents_phone_number(item.parents_phone_number);
    setUpdateVisibleModal("d-block");
  };

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
              data?.students
                .map((item) => (
                  <div className="item" key={item._id}>
                    <div className="title">
                      <img src={userImg} alt="" />
                      <div className="text-box">
                        <h3>{`${item.surname} ${" "} ${item.name}`}</h3>
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
                        <span
                          className="editBtn "
                          onClick={()=> handleUpdateSetItem(item)}
                        >
                          <i className="svg2">{editIcon}</i> Edit{" "}
                        </span>
                        <span
                          className="deleteBtn"
                          onClick={() => handleSetItem(item)}
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
        </div>
        <AddStudentModal
          visibleModal={visibleModal}
          setVisibleModal={setVisibleModal}
          setRefresh={setRefresh}
        />
        <DeleteModal
          deleteModalVisible={deleteModalVisible}
          setDeleteModalVisible={setDeleteModalVisible}
          handleDelete={handleDelete}
          deletedName="student"
        />
        <UpdateStudentModal
          updateVisibleModal={updateVisibleModal}
          setUpdateVisibleModal={setUpdateVisibleModal}
          setRefresh={setRefresh}
          name={name}
          surname={surname}
          email={email}
          phone_number={phone_number}
          address={address}
          photo={photo}
          person_nr={person_nr}
          parents_name={parents_name}
          parents_phone_number={parents_phone_number}
          student_id={student_id}
          setName={setName}
          setSurname={setSurname}
          setEmail={setEmail}
          setPhone_number={setPhone_number}
          setAddress={setAddress}
          setPerson_nr={setPerson_nr}
          setParents_name={setParents_name}
          setParents_phone_number={setParents_phone_number}
        />
      </div>
    </div>
  );
};

export default Students;
