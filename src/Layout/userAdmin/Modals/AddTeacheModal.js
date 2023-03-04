import React, { useState } from "react";
import { useDispatch } from "react-redux";
import UploadImage from "../../../Components/Firebase/UploadImage";
import { deleteIcon } from "../../../Components/icons/svgIcons";
import { postTeachers } from "../../../Redux/Actions/AdminAction";
import "../../layout.css";

function AddTeacheModal(props) {
  const { visibleModal, setVisibleModal, setRefresh } = props;
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [address, setAddress] = useState("");
  const [photo, setPhoto] = useState("");

  // upload image states
  const [imageUpload, setImageUpload] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  // this is
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      postTeachers(
        name,
        email,
        address,
        surname,
        subject,
        phone_number,
        setVisibleModal,
        setRefresh
      )
    );
  };
  const handleDelete = (e) => {
    e.preventDefault();
    setVisibleModal("d-none");
    setName("");
    setSurname("");
    setSubject("");
    setEmail("");
    setPhone_number("");
    setAddress("");
  };
  console.log(photo);
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
                  <UploadImage
                    imageUpload={imageUpload}
                    setImgUrl={setPhoto}
                    setImageUpload={setImageUpload}
                    setShowModal={setShowModal}
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

export default AddTeacheModal;
