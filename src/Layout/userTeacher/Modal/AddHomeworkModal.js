import React from "react";
import { deleteIcon } from "../../../Components/icons/svgIcons";

function AddHomeworkModal(props) {
  const { visibleModal, setVisibleModal, setRefresh } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(
    //   postGroups(
    //     group_name,
    //     subject,
    //     teacher,
    //     bg_color,
    //     text_color,
    //     text,
    //     setVisibleModal,
    //     setRefresh
    //   )
    // );
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
                  //   value={name}
                  //   onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="modal-input">
                <label>Select Class</label>
                <select
                  className="w-full"
                  name="selectColor"
                  id="color"
                  // value={}
                  // onChange={(e) => setTeacher(e.target.value)}
                >
                  <option value="">Choose teacher...</option>
                  {/* {data?.teachers.map((item) => (
                      <option value={item._id}>{item.name}</option>
                    ))} */}
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
                  //   value={text}
                  //   onChange={(e) => setText(e.target.value)}
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
