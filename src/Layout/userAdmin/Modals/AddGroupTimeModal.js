import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllGroups,
  postGroupTime,
} from "../../../Redux/Actions/AdminAction";
import { deleteIcon } from "../../../Components/icons/svgIcons";

function AddGroupTimeModal(props) {
  const { visibleModal, setVisibleModal, setRefresh, refresh, token } = props;
  const [group_id, setGroup_id] = useState("");
  const [start_day, setStart_day] = useState("");
  const [start, setStart] = useState("");
  const [end_day, setEnd_day] = useState("");
  const [end, setEnd] = useState("");
  const [address, setAddress] = useState("");
  const [color, setColor] = useState("");
  const [teacher_id, setTeacher_id] = useState();
  const dispatch = useDispatch();

  const getGroups = useSelector((state) => state.groups);
  const { data } = getGroups;

  useEffect(() => {
    dispatch(getAllGroups());
  }, [refresh]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      postGroupTime(
        group_id,
        start_day,
        start,
        end_day,
        end,
        address,
        color,
        teacher_id,
        setVisibleModal,
        setRefresh
      )
    );
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
                    value={group_id}
                    onChange={(e) => setGroup_id(e.target.value)}
                  >
                    {data?.groups.map((item) => (
                      <option value={item._id} key={item._id}>
                        {`${item.group_name}`}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="modal-input w-full">
                  <label>Select Teacher</label>
                  <select
                    className="w-full"
                    name="selectColor"
                    id="color"
                    value={teacher_id}
                    onChange={(e) => setTeacher_id(e.target.value)}
                  >
                    {data?.groups.map((item) => (
                      <option value={item._id} key={item._id}>
                        {`${item.teacher.name} ${item.teacher.surname}`}
                      </option>
                    ))}
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
                      placeholder="Name"
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
                      type="time"
                      value={start}
                      onChange={(e) => setStart(e.target.value)}
                    />
                  </div>
                  <div className="modal-input">
                    <label>End</label>
                    <input
                      className="w-full"
                      type="time"
                      value={end}
                      onChange={(e) => setEnd(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex">
                  <div className="modal-input w-full">
                    <label>Choose location</label>
                    <select
                      className="w-full"
                      name="selectColor"
                      id="color"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    >
                      <option value="tashkent">Tashkent</option>
                      <option value="samarqand">Samarqand</option>
                      {/* {data?.students.map((item) => (
                      <option value={item._id} key={item._id}>
                        {`${item.surname}
                      ${" "}  
                      ${item.name}`}
                      </option>
                    ))} */}
                    </select>
                  </div>

                  <div className="modal-input w-full">
                    <label>Choose Color</label>
                    <select
                      className="w-full"
                      name="selectColor"
                      id="color"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                    >
                      <option value="bg-red">Red</option>
                      <option value="bg-yellow">Yellow</option>
                      <option value="bg-blue">Blue</option>
                      <option value="bg-green">Green</option>
                    </select>
                  </div>
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

export default AddGroupTimeModal;
