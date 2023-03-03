import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteIcon } from "../../../Components/icons/svgIcons";
import { postLocation, postStudents } from "../../../Redux/Actions/AdminAction";
function AddLocationModal(props) {
  const { visibleModal, setVisibleModal, setRefresh } = props;
  const [location, setLocation] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postLocation(location, setVisibleModal,setLocation));
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
          <div className="modal-inner">
            <div className="modal-title">
              <h1>Create Location</h1>
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
                  <label>Location name</label>
                  <input
                    className="w-full"
                    type="text"
                    placeholder="Name"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
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

export default AddLocationModal;
