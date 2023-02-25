import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteIcon } from "../../../Components/icons/svgIcons";
import { getAllTeachers, postGroups } from "../../../Redux/Actions/AdminAction";
import "../../layout.css";

const AddClassModal = (props) => {
  const { visibleModal, setVisibleModal, setRefresh } = props;
  const [group_name, setGroup_name] = useState("");
  const [subject, setSubject] = useState("");
  const [teacher, setTeacher] = useState("");

  //   {
  //     "group_name": "English A",
  //     "subject": "en",
  //     "teacher": "63e9ccd667477e5625f435eb"
  // }
  const getTeachers = useSelector((state) => state.teachers);
  const dispatch = useDispatch();
  const { data } = getTeachers;

  useEffect(() => {
    dispatch(getAllTeachers());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      postGroups(group_name, subject, teacher, setVisibleModal, setRefresh)
    );
  };

  return (
    <>
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
                  value={group_name}
                  onChange={(e) => setGroup_name(e.target.value)}
                />
              </div>

              <div className="flex">
                <div className="modal-input">
                  <label>Select teacher</label>
                  <select
                    className="w-full"
                    name="selectColor"
                    id="color"
                    value={teacher}
                    onChange={(e) => setTeacher(e.target.value)}
                  >
                    {data?.teachers.map((item) => (
                      <option value={item._id}>{item.name}</option>
                    ))}
                  </select>
                </div>

                <div className="modal-input">
                  <label>Select BG color</label>
                  <select className="w-full" name="selectColor" id="color">
                    <option value="">Yellow</option>
                    <option value="red">Red</option>
                    <option value="green">green</option>
                    <option value="blue">Blue</option>
                  </select>
                </div>

                <div className="modal-input">
                  <label>Text color</label>
                  <select className="w-full" name="selectColor" id="color">
                    <option value="">White</option>
                    <option value="">Yellow</option>
                    <option value="red">Red</option>
                    <option value="green">green</option>
                    <option value="blue">Blue</option>
                  </select>
                </div>
              </div>

              <div className="modal-input">
                <label>Choose Subject</label>
                <select
                  className="w-full"
                  name="selectColor"
                  id="color"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                >
                  <option value="English">English</option>
                  <option value="Russia">Russia</option>
                  <option value="Math">Math</option>
                  <option value="Biology">Biology</option>
                </select>
              </div>
              <div className="modal-input">
                <label>Choose Students</label>
                <textarea
                  className="w-full"
                  name=""
                  id=""
                  cols="30"
                  rows="4"
                ></textarea>
              </div>

              <div className="btn-group">
                <button>DELELTE</button>
                <button onClick={handleSubmit} className="btn-2">
                  SAVE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddClassModal;
