import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllStudents,
  postStudentToGroup,
} from "../../../Redux/Actions/AdminAction";
import { deleteIcon } from "../../../Components/icons/svgIcons";

function AddStudentToGroupModal(props) {
  const { visibleModal, setVisibleModal, setRefresh, refresh, token } = props;
  const dispatch = useDispatch();
  const getStudents = useSelector((state) => state.students);
  const { loading, studentData } = getStudents;

  const [student, setStudent] = useState("");
  const group = token;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postStudentToGroup(student, group, setVisibleModal, setRefresh));
  };
  const handleDelete = (e) => {
    e.preventDefault();
    setVisibleModal("d-none");
  };

  useEffect(() => {
    dispatch(getAllStudents());
  }, []);

  return (
    <div>
      <div className={visibleModal}>
        <div
          onClick={() => setVisibleModal("d-none")}
          className="w-screen"
        ></div>
        <div className="modalWindows class-modal">
          <div className="modal-inner">
            <div className="modal-title">
              <h1>Add Student</h1>
              <span
                onClick={() => setVisibleModal("d-none")}
                className="closeModal"
              >
                {deleteIcon}
              </span>
            </div>

            <div className="modal-content">
              <form action="">
                <div className="modal-input w-full">
                  <label>Select student</label>
                  <select
                    className="w-full"
                    name="name"
                    id="name"
                    value={student}
                    onChange={(e) => setStudent(e.target.value)}
                  >
                    <option value="">Choose Student...</option>

                    {studentData?.map((item) => (
                      <option value={item._id} key={item._id}>
                        {`${item.surname}
                      ${item.name}`}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="btn-group">
                  <button onClick={handleDelete}>DELELTE</button>
                  <button onClick={handleSubmit} className="btn-2">
                    SAVE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddStudentToGroupModal;
