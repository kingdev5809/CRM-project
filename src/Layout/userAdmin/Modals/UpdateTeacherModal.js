import React, { useState } from "react";
import { updateTeacher } from "../../../Redux/Actions/AdminAction";
import { deleteIcon } from "../../../Components/icons/svgIcons";
import { useDispatch } from "react-redux";

function UpdateTeacherModal(props) {
  const {
    updateVisibleModal,
    setUpdateVisibleModal,
    setRefresh,
    name,
    surname,
    subject,
    email,
    phone_number,
    address,
    photo,
    teacher_id,
    setName,
    setSurname,
    setSubject,
    setEmail,
    setPhone_number,
    setAddress,
  } = props;
  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      updateTeacher(
        name,
        surname,
        subject,
        email,
        phone_number,
        address,
        photo,
        teacher_id,
        setRefresh,
        setUpdateVisibleModal
      )
    );
  };
  const handleDelete = (e) => {
    e.preventDefault();
    setUpdateVisibleModal("d-none");
  };
  return (
    <div>
      <div className={updateVisibleModal}>
        <div
          onClick={() => setUpdateVisibleModal("d-none")}
          className="w-screen"
        ></div>
        <div className="modalWindows class-modal">
          <div className="modal-inner">
            <div className="modal-title">
              <h1>Create Class</h1>
              <span
                onClick={() => setUpdateVisibleModal("d-none")}
                className="closeModal"
              >
                {deleteIcon}
              </span>
            </div>

            <div className="modal-content">
              <form action="">
                <div className="flex ">
                  <div className="modal-input w-full">
                    <label>First name</label>
                    <input
                      className="w-full"
                      type="text"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="modal-input w-full">
                    <label>Last name</label>
                    <input
                      className="w-full"
                      type="text"
                      placeholder="Name"
                      value={surname}
                      onChange={(e) => setSurname(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex ">
                  <div className="modal-input w-full">
                    <label>Telephone </label>
                    <input
                      className="w-full"
                      type="text"
                      placeholder="Telephone number"
                      value={phone_number}
                      onChange={(e) => setPhone_number(e.target.value)}
                    />
                  </div>

                  <div className="modal-input w-full">
                    <label>Email </label>
                    <input
                      className="w-full"
                      type="text"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="modal-input">
                  <label>Subject</label>
                  <input
                    className="w-full"
                    type="text"
                    placeholder="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
                <div className="modal-input">
                  <label>Adress</label>
                  <input
                    className="w-full"
                    type="text"
                    placeholder="Adress"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div className="modal-input">
                  <label>Image </label>
                  <input className="w-full" type="file" placeholder="Image" />
                </div>

                <div className="btn-group">
                  <button onClick={handleDelete}>Cancel</button>
                  <button onClick={handleUpdate} className="btn-2">
                    Enter
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

export default UpdateTeacherModal;
