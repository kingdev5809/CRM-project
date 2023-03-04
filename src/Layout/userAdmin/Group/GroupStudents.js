import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { deleteIcon } from "../../../Components/icons/svgIcons";
import Navbar from "../../../Components/Navbar";
import { getOneGroup, removeStudent } from "../../../Redux/Actions/AdminAction";
import AddStudentToGroupModal from "../Modals/AddStudentToGroupModal";
import DeleteModal from "../Modals/DeleteModal";

function GroupStudents() {
  const [visibleModal, setVisibleModal] = useState("d-none");
  const [deleteModalVisible, setDeleteModalVisible] = useState("d-none");

  const [refresh, setRefresh] = useState("");
  const [group, setGroup] = useState("");
  const [student, setStudent] = useState("");

  const { token } = useParams();

  const dispatch = useDispatch();

  const getGroup = useSelector((state) => state.oneGroup);
  const { oneGroupData } = getGroup;

  useEffect(() => {
    dispatch(getOneGroup(token));
  }, [refresh]);

  // handle set item for delete modal

  const handleSetItem = (item) => {
    setDeleteModalVisible("d-block");
    setGroup(token);
    setStudent(item.student._id);
  };

  const handleDelete = () => {
    dispatch(
      removeStudent(
        student,
        group,
        setGroup,
        setStudent,
        setRefresh,
        setDeleteModalVisible
      )
    );
  };

  return (
    <div className="flex">
      <Navbar />
      <div className="studentsPage main-box container">
        <div className="main-header-pages ">
          <h1>All Students </h1>

          <button onClick={() => setVisibleModal("d-block")}>
            Add Student
          </button>
        </div>
        <div className="main">
          <div className="items">
            {oneGroupData?.group?.students?.length == 0 && (
              <h1>Not Students</h1>
            )}

            {oneGroupData ? (
              oneGroupData?.group?.students
                .map((item) => (
                  <div className="item" key={item._id}>
                    <div className="title">
                      <img src={item.photo} alt="" />
                      <div className="text-box">
                        <h3>{`${item.student?.surname} ${" "} ${
                          item.student?.name
                        }`}</h3>

                        <p>
                          <span>Student</span> <span>Points 20993</span>
                        </p>
                      </div>
                    </div>
                    <div className="item-content">
                      <p>
                        <span>Email:</span>
                        <span>{item.student?.email}</span>
                      </p>
                      <div className="itemBtn">
                        <span
                          className="deleteBtn"
                          onClick={() => handleSetItem(item)}
                        >
                          <i className="svg3">{deleteIcon}</i> Remove
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
        <AddStudentToGroupModal
          visibleModal={visibleModal}
          setVisibleModal={setVisibleModal}
          setRefresh={setRefresh}
          refresh={refresh}
          token={token}
        />

        <DeleteModal
          handleDelete={handleDelete}
          deleteModalVisible={deleteModalVisible}
          setDeleteModalVisible={setDeleteModalVisible}
          deletedName="student"
        />
      </div>
    </div>
  );
}

export default GroupStudents;
