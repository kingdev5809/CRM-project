import React from "react";
import { deleteIcon } from "../../../Components/icons/svgIcons";

function DeleteModal({
  setDeleteModalVisible,
  deleteModalVisible,
  handleDelete,
  deletedName,
})
const handleDelete = (e) => {
  e.preventDefault();
  setDeleteModalVisible("d-none");
};
{
  return (
    <div>
      <div className={deleteModalVisible}>
        <div
          onClick={() => setDeleteModalVisible("d-none")}
          className="w-screen"
        ></div>
        <div className="modalWindows delete-modal">
          <div className="modal-inner">
            <div className="modal-title">
              <h1>Are you sure delete this {deletedName}</h1>
              <span
                onClick={() => setDeleteModalVisible("d-none")}
                className="closeModal"
              >
                {deleteIcon}
              </span>
            </div>

            <div className="modal-content">
              <div className="btn-group">
                <button onClick={handleDelete}>
                  Cancel
                </button>
                <button onClick={handleDelete} className="btn-2">
                  Enter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
