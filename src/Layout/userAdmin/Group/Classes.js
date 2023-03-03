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
import { deleteClass, getAllGroups } from "../../../Redux/Actions/AdminAction";
import { NavLink } from "react-router-dom";
import DeleteModal from "../Modals/DeleteModal";
import AddGroupTimeModal from "../Modals/AddGroupTimeModal";
import UpdateClassModal from "../Modals/UpdateClassModal";

const Classes = () => {
  const [visibleModal, setVisibleModal] = useState("d-none");
  const [deleteModalVisible, setDeleteModalVisible] = useState("d-none");
  const [classes_id, setClasses_Id] = useState();

  const [visibleModalTwo, setVisibleModalTwo] = useState("d-none");

  // update classes states
  const [updateVisibleModal, setUpdateVisibleModal] = useState("d-none");
  const [group_name, setGroup_name] = useState("");
  const [subject, setSubject] = useState("");
  const [teacher, setTeacher] = useState("");
  const [bg_color, setBg_color] = useState("");
  const [text_color, setText_color] = useState("");
  const [text, setText] = useState("");
  const [group_id, setGroup_id] = useState();

  // add time states
  const [start_day, setStart_day] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const [refresh, setRefresh] = useState("");

  const dispatch = useDispatch();

  const getGroups = useSelector((state) => state.groups);
  const { data } = getGroups;

  useEffect(() => {
    dispatch(getAllGroups());
  }, []);

  
  // handle set item for delete modal
  const handleSetItem = (item) => {
    setDeleteModalVisible("d-block");
    setClasses_Id(item._id);
  };

  function handleDelete() {
    dispatch(deleteClass(classes_id, setRefresh));
    setDeleteModalVisible("d-none");
    setClasses_Id();
  }

  // handle update classes
  const handleUpdateSetItem = (item) => {
    setGroup_name(item.group_name);
    setSubject(item.subject);
    setTeacher(item.teacher._id);
    setBg_color(item.bg_color);
    setText_color(item.text_color);
    setText(item.text);
    setGroup_id(item._id);
    setUpdateVisibleModal("d-block");
  };
  return (
    <div className="flex">
      <Navbar />
      <div className="classes-page  main-box container ">
        {/* <div className="navbar-box">
        <Navbar />
      </div> */}
        <div className="main-header-pages ">
          <h1>All Classes</h1>
          <div>
            <button
              style={{ margin: "0px 10px" }}
              onClick={() => setVisibleModalTwo("d-block")}
            >
              Add Group Time
            </button>
            <button onClick={() => setVisibleModal("d-block")}>CREATE</button>
          </div>
        </div>
        <div className="items container-95">
          {data ? (
            data?.map((item) => (
                <div className="item" key={item._id}>
                  <img src={userImg} alt="" />
                  <div className="item-box">
                    <NavLink to={`/admin/classes/${item._id}`}>
                      <h3 className={item.text_color}> {item.group_name} </h3>
                    </NavLink>
                    <h4>
                      <b>Teacher:</b> {item?.teacher?.name}
                    </h4>
                    <div className="itemBtn">
                      <span>
                        <i className="svg1">{studentIcon}</i> Student:
                        {item.students}{" "}
                      </span>{" "}
                      <span
                        className="editBtn"
                        onClick={() => handleUpdateSetItem(item)}
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
                  <div className={`item-box-2 ${item.bg_color}`}></div>
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
        <DeleteModal
          deleteModalVisible={deleteModalVisible}
          setDeleteModalVisible={setDeleteModalVisible}
          handleDelete={handleDelete}
          deletedName="Group"
        />

        <AddGroupTimeModal
          visibleModal={visibleModalTwo}
          setVisibleModal={setVisibleModalTwo}
          setRefresh={setRefresh}
          refresh={refresh}
          start_day={start_day}
          start={start}
          end={end}
          setStart_day={setStart_day}
          setStart={setStart}
          setEnd={setEnd}
        />
        <UpdateClassModal
          visibleModal={updateVisibleModal}
          setVisibleModal={setUpdateVisibleModal}
          group_name={group_name}
          setGroup_name={setGroup_name}
          subject={subject}
          setSubject={setSubject}
          teacher={teacher}
          setTeacher={setTeacher}
          bg_color={bg_color}
          setBg_color={setBg_color}
          text_color={text_color}
          setText_color={setText_color}
          text={text}
          setText={setText}
          group_id={group_id}
          setGroup_id={setGroup_id}
          setRefresh={setRefresh}
        />
      </div>
    </div>
  );
};

export default Classes;
