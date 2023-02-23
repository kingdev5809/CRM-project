import React from "react";
import { deleteIcon } from "../../../Components/icons/svgIcons";
import "../../layout.css";
function AddStudentModal(props) {
  const { visibleModal, setVisibleModal } = props;
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
                    <input className="w-full" type="text" placeholder="Name" />
                  </div>

                  <div className="modal-input w-full">
                    <label>Last name</label>
                    <input className="w-full" type="text" placeholder="Name" />
                  </div>
                </div>

                <div className="flex ">
                  <div className="modal-input w-full">
                    <label>Telephone </label>
                    <input
                      className="w-full"
                      type="text"
                      placeholder="Telephone number"
                    />
                  </div>

                  <div className="modal-input w-full">
                    <label>Email </label>
                    <input className="w-full" type="text" placeholder="Email" />
                  </div>
                </div>

                <div className="modal-input">
                  <label>Adress</label>
                  <input className="w-full" type="text" placeholder="Adress" />
                </div>
                <div className="flex ">
                  <div className="modal-input w-full">
                    <label>Id number </label>
                    <input
                      className="w-full"
                      type="text"
                      placeholder="Id number here"
                    />
                  </div>

                  <div className="modal-input w-full">
                    <label>Parent name</label>
                    <input
                      className="w-full"
                      type="text"
                      placeholder="Parent nam"
                    />
                  </div>
                </div>
                <div className="flex ">
                  <div className="modal-input w-full">
                    <label>Telefon </label>
                    <input className="w-full" type="text" placeholder="Name" />
                  </div>

                  <div className="modal-input w-full">
                    <label>Email </label>
                    <input className="w-full" type="text" placeholder="Email" />
                  </div>
                </div>

                <div className="btn-group">
                  <button>DELELTE</button>
                  <button className="btn-2">SAVE</button>
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
