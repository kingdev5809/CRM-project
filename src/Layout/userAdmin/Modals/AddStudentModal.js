import React, { useState } from "react";
import { useDispatch } from "react-redux";
import UploadImage from "../../../Components/Firebase/UploadImage";
import { deleteIcon } from "../../../Components/icons/svgIcons";
import { postStudents } from "../../../Redux/Actions/AdminAction";
import "../../layout.css";
function AddStudentModal(props) {
  const {
    visibleModal,
    setVisibleModal,
    photo,
    setPhoto,
    imageUpload,
    setImageUpload,
  } = props;
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [address, setAddress] = useState("");
  const [person_nr, setPerson_nr] = useState("");
  const [parents_name, setParents_name] = useState("");
  const [parents_phone_number, setParents_phone_number] = useState("");

  // upload image states

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      postStudents(
        name,
        surname,
        email,
        address,
        phone_number,
        person_nr,
        parents_name,
        parents_phone_number,
        photo,
        setVisibleModal,
        setName,
        setSurname,
        setEmail,
        setPhone_number,
        setAddress,
        setPerson_nr,
        setParents_name,
        setParents_phone_number
      )
    );
  };
  const handleDelete = (e) => {
    e.preventDefault();
    setVisibleModal("d-none");
    setName("");
    setSurname("");
    setEmail("");
    setPhone_number("");
    setAddress("");
    setPerson_nr("");
    setParents_name("");
    setParents_phone_number("");
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
              <h1>Create Student</h1>
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

                <div className="flex">
                  <div className="modal-input w-full">
                    <label>Adress</label>
                    <input
                      className="w-full"
                      type="text"
                      placeholder="Adress"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                  <div className="modal-input w-full">
                    <label>Id number </label>
                    <input
                      className="w-full"
                      type="text"
                      placeholder="Id number here"
                      value={person_nr}
                      onChange={(e) => setPerson_nr(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex ">
                  <div className="modal-input w-full">
                    <label>Parent name</label>
                    <input
                      className="w-full"
                      type="text"
                      placeholder="Parent nam"
                      value={parents_name}
                      onChange={(e) => setParents_name(e.target.value)}
                    />
                  </div>

                  <div className="modal-input w-full">
                    <label>Parent number </label>
                    <input
                      className="w-full"
                      type="text"
                      placeholder="Name"
                      value={parents_phone_number}
                      onChange={(e) => setParents_phone_number(e.target.value)}
                    />
                  </div>
                </div>
                <div className="modal-input">
                  <label>Image </label>
                  <UploadImage
                    imageUpload={imageUpload}
                    setImgUrl={setPhoto}
                    setImageUpload={setImageUpload}
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

export default AddStudentModal;
