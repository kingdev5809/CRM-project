import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGroups } from "../../../api/TeacherRequest";
import { deleteIcon } from "../../../Components/icons/svgIcons";
import { postHomework } from "../../../Redux/Actions/TeacherAction";

function AddHomeworkModal(props) {
  const { visibleModal, setVisibleModal, allGroupData } = props;
  const [group_id, setGroup_id] = useState();
  const [name, setName] = useState();
  const [message, setMessage] = useState();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      postHomework(group_id, name, message, setGroup_id, setName, setMessage,setVisibleModal)
    );
  };
  const handleDelete = (e) => {
    e.preventDefault();
    setVisibleModal("d-none");
  };

  return (
    <div>
      <div className={visibleModal}>
        <div
          onClick={() => setVisibleModal("d-none")}
          className="w-screen"
        ></div>
        <div className="modalWindows class-modal">
          <div className="modal-title">
            <h1>Create Class</h1>
            <span
              onClick={() => setVisibleModal("d-none")}
              className="closeModal"
            >
              {deleteIcon}
            </span>
          </div>

          <div className="modal-content">
            <form action="">
              <div className="modal-input">
                <label>Class name</label>
                <input
                  className="w-full"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="modal-input">
                <label>Select Class</label>
                <select
                  className="w-full"
                  name="selectClass"
                  id="class"
                  value={group_id}
                  onChange={(e) => setGroup_id(e.target.value)}
                >
                  <option value="">Choose class...</option>
                  {allGroupData?.groups?.map((item) => (
                    <option value={item._id}>{item.group_name}</option>
                  ))}
                </select>
              </div>

              <div className="modal-input">
                <label>Write text here</label>
                <textarea
                  className="w-full"
                  name=""
                  id=""
                  cols="30"
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
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
  );
}

export default AddHomeworkModal;
