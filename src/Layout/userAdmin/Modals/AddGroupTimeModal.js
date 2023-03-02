import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllGroups,
  getAllLocation,
  postGroupTime,
} from "../../../Redux/Actions/AdminAction";
import { deleteIcon } from "../../../Components/icons/svgIcons";

function AddGroupTimeModal(props) {
  const {
    visibleModal,
    setVisibleModal,
    setRefresh,
    refresh,
    token,
    start_day,
    start,
    end,
    setStart_day,
    setStart,
    setEnd,
  } = props;
  const [group_id, setGroup_id] = useState("");
  const [end_day, setEnd_day] = useState("");
  const [address, setAddress] = useState("");
  const [color, setColor] = useState("");
  const [text, setText] = useState("");
  const [teacher_id, setTeacher_id] = useState();

  const dispatch = useDispatch();

  const getGroups = useSelector((state) => state.groups);
  const { data } = getGroups;

  useEffect(() => {
    dispatch(getAllGroups());
    dispatch(getAllLocation());
  }, [refresh]);

  const getLocations = useSelector((state) => state.locations);
  const { locationData } = getLocations;

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
        text,
        teacher_id,
        setVisibleModal,
        setRefresh
      )
    );
  };
  const handleDelete = (e) => {
    e.preventDefault();
    setVisibleModal("d-none");
    setGroup_id("");
    setStart_day("");
    setStart("");
    setEnd_day("");
    setEnd("");
    setAddress("");
    setColor("");
    setTeacher_id("");
  };

  console.log(start_day);
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
                        {`${item?.teacher?.name} ${item?.teacher?.surname}`}
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
                      // onChange={(e) => setStart_day(e.target.value)}
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
                      {locationData?.map((item) => (
                        <option value={item.location} key={item.location}>
                          {`${item.location}`}
                        </option>
                      ))}
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
                      <option value="bg_red">Red</option>
                      <option value="bg_yellow">Yellow</option>
                      <option value="bg_blue">Blue</option>
                      <option value="bg_green">Green</option>
                      <option value="bg_violet">Violet</option>
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
      </div>
    </div>
  );
}

export default AddGroupTimeModal;
