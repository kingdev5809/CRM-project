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

const Classes = () => {
  const [visibleModal, setVisibleModal] = useState("d-none");
  const [deleteModalVisible, setDeleteModalVisible] = useState("d-none");
  const [classes_id, setClasses_Id] = useState();

  const [refresh, setRefresh] = useState("");

  const dispatch = useDispatch();

  const getGroups = useSelector((state) => state.groups);
  const { data } = getGroups;

  useEffect(() => {
    dispatch(getAllGroups());
  }, [refresh]);

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

  return (
    <div className="flex">
      <Navbar />
      <div className="classes-page  main-box container ">
        {/* <div className="navbar-box">
        <Navbar />
      </div> */}
        <div className="main-header-pages ">
          <h1>All Classes</h1>
          <button onClick={() => setVisibleModal("d-block")}>CREATE</button>
        </div>
        <div className="items container-95">
          {data ? (
            data?.groups
              .map((item) => (
                <div className="item" key={item._id}>
                  <img src={userImg} alt="" />
                  <div className="item-box">
                    <NavLink to={`/admin/classes/${item._id}`}>
                      <h3> {item.group_name} </h3>
                    </NavLink>
                    <h4>
                      <b>Teacher:</b> {item?.teacher?.name}
                    </h4>
                    <div className="itemBtn">
                      <span>
                        <i className="svg1">{studentIcon}</i> Student:14{" "}
                      </span>{" "}
                      <span className="editBtn">
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
                  <div className="item-box-2"></div>
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
      </div>
    </div>
  );
};

export default Classes;
