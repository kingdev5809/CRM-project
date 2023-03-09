import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteIcon } from "../../../Components/icons/svgIcons";
import {
  getAllSubject,
  getAllTeachers,
  postGroups,
} from "../../../Redux/Actions/AdminAction";
import "../../layout.css";

const AddClassModal = (props) => {
  const { visibleModal, setVisibleModal } = props;
  const [group_name, setGroup_name] = useState("");
  const [subject, setSubject] = useState("");
  const [teacher, setTeacher] = useState("");
  const [bg_color, setBg_color] = useState("");
  const [text_color, setText_color] = useState("");
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  const getTeachers = useSelector((state) => state.teachers);
  const getSubjects = useSelector((state) => state.subjects);
  const { Teacherdata } = getTeachers;
  const { subjectData } = getSubjects;

  useEffect(() => {
    dispatch(getAllTeachers());
    dispatch(getAllSubject());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      postGroups(
        group_name,
        subject,
        teacher,
        bg_color,
        text_color,
        text,
        setVisibleModal,
        setGroup_name,
        setSubject,
        setTeacher,
        setBg_color,
        setText_color,
        setText
      )
    );
  };

  // cancel posting group time
  const handleDelete = (e) => {
    e.preventDefault();
    setVisibleModal("d-none");
    setGroup_name("");
    setSubject("");
    setTeacher("");
    setBg_color("");
    setText_color("");
    setText("");
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
                    <option value="">Choose teacher...</option>
                    {Teacherdata?.map((item) => (
                      <option value={item._id}>
                        {item.name}
                        {item.surname}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="modal-input">
                  <label>Select BG color</label>
                  <select
                    className="w-full"
                    name="selectColor"
                    id="color"
                    value={bg_color}
                    onChange={(e) => setBg_color(e.target.value)}
                  >
                    <option value="">Choose BG color...</option>

                    <option value="bg-yellow">Yellow</option>
                    <option value="bg-red">Red</option>
                    <option value="bg-green">green</option>
                    <option value="bg-blue">Blue</option>
                    <option value="bg-violet">Violet</option>
                  </select>
                </div>

                <div className="modal-input">
                  <label>Select text color</label>
                  <select
                    className="w-full"
                    name="selectColor"
                    id="color"
                    value={text_color}
                    onChange={(e) => setText_color(e.target.value)}
                  >
                    <option value="">Choose text color...</option>
                    <option value="text-yellow">Yellow</option>
                    <option value="text-red">Red</option>
                    <option value="text-green">green</option>
                    <option value="text-blue">Blue</option>
                    <option value="text-violet">Violet</option>
                  </select>
                </div>
              </div>

              <div className="modal-input">
                <label>Select Subject</label>
                <select
                  className="w-full"
                  name="selectColor"
                  id="color"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                >
                  <option value="">Choose subject...</option>

                  {subjectData?.books?.map((item) => (
                    <option value={item._id}>{item.subject}</option>
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
                  value={text}
                  onChange={(e) => setText(e.target.value)}
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
    </>
  );
};

export default AddClassModal;
