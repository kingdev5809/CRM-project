import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postStudentToGroup } from "../../../Redux/Actions/AdminAction";
import { deleteIcon } from "../../../Components/icons/svgIcons";

function AddGroupTimeModal(props) {
  const { visibleModal, setVisibleModal, setRefresh, refresh, token } = props;
  const [group_name, setGroup_name] = useState("");
  const [start_day, setStart_day] = useState("");
  const [start, setStart] = useState("");
  const [end_day, setEnd_day] = useState("");
  const [end, setEnd] = useState("");
  const [address, setAddress] = useState("");

  //   const dispatch = useDispatch();
  //   const getStudents = useSelector((state) => state.students);
  //   const { loading, data } = getStudents;

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     dispatch(postStudentToGroup(student, group, setVisibleModal, setRefresh));
  //   };

  //   useEffect(() => {
  //     dispatch(getAllStudents());
  //   }, []);

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
              <h1>Create Group Time</h1>
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
                  <label>Select group</label>
                  <select
                    className="w-full"
                    name="selectColor"
                    id="color"
                    value={group_name}
                    onChange={(e) => setGroup_name(e.target.value)}
                  >
                    <option value="">KING e2</option>
                    <option value="">KING e32</option>
                    {/* {data?.students.map((item) => (
                      <option value={item._id} key={item._id}>
                        {`${item.surname}
                      ${" "}  
                      ${item.name}`}
                      </option>
                    ))} */}
                  </select>
                </div>
                <div className="flex">
                  <div className="modal-input">
                    <label>Start</label>
                    <input
                      className="w-full"
                      type="date"
                      value={start_day}
                      onChange={(e) => setStart_day(e.target.value)}
                    />
                  </div>
                  <div className="modal-input">
                    <label>End</label>
                    <input
                      className="w-full"
                      type="date"
                      value={end_day}
                      onChange={(e) => setEnd_day(e.target.value)}
                    />
                  </div>

                  <div className="modal-input">
                    <label>Start</label>
                    <input
                      className="w-full"
                      type="date"
                      value={start}
                      onChange={(e) => setStart(e.target.value)}
                    />
                  </div>
                  <div className="modal-input">
                    <label>End</label>
                    <input
                      className="w-full"
                      type="date"
                      value={end}
                      onChange={(e) => setEnd(e.target.value)}
                    />
                  </div>
                </div>
                <div className="modal-input w-full">
                  <label>Choose location</label>
                  <select
                    className="w-full"
                    name="selectColor"
                    id="color"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  >
                    <option value="">Tashkent</option>
                    <option value="">Samarqand</option>
                    {/* {data?.students.map((item) => (
                      <option value={item._id} key={item._id}>
                        {`${item.surname}
                      ${" "}  
                      ${item.name}`}
                      </option>
                    ))} */}
                  </select>
                </div>
                <div className="modal-input w-full ">
                  <label>Write text here</label>
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

export default AddGroupTimeModal;
