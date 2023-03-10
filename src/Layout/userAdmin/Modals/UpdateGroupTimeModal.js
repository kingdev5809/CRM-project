import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteGroupTime,
  getAllGroups,
  getAllLocation,
  getAllTeachers,
  postGroupTime,
  updateGroupTime,
} from "../../../Redux/Actions/AdminAction";
import { deleteIcon } from "../../../Components/icons/svgIcons";

function UpdateGroupTimeModal(props) {
  const {
    visibleModal,
    setVisibleModal,
    start_day,
    end_day,
    start,
    end,
    id,
    setStart_day,
    setEnd_day,
    setStart,
    setEnd,
    setId,
    setRefresh,
  } = props;
  const [group_id, setGroup_id] = useState("");
  const [address, setAddress] = useState("");
  const [color, setColor] = useState("");
  const [text, setText] = useState("");
  const [teacher_id, setTeacher_id] = useState();

  const dispatch = useDispatch();

  const getGroups = useSelector((state) => state.groups);
  const { allGroupData } = getGroups;

  const getLocations = useSelector((state) => state.locations);
  const { locationData } = getLocations;

  const getTeachers = useSelector((state) => state.teachers);
  const { Teacherdata } = getTeachers;

  useEffect(() => {
    dispatch(getAllGroups());
    dispatch(getAllLocation());
    dispatch(getAllTeachers());
  }, []);

  // post group Time
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateGroupTime(
        {
          group_id,
          start_day,
          start,
          end_day,
          end,
          address,
          color,
          text,
          teacher_id,
        },
        id,
        setVisibleModal,
        setGroup_id,
        setEnd_day,
        setAddress,
        setColor,
        setText,
        setTeacher_id,
        setId,
        setRefresh
      )
    );
  };

  // cancel posting group time
  const handleCancel = (e) => {
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

  function handleDelete(e) {
    e.preventDefault();
    dispatch(deleteGroupTime(id));
    setVisibleModal("d-none");
  }

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
              <h1>Update Group Time</h1>
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
                    <option value="">Choose group...</option>

                    {allGroupData?.map((item) => (
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
                    <option value="">Choose teacher...</option>
                    {Teacherdata?.map((item) => (
                      <option value={item._id} key={item._id}>
                        {`${item?.name} ${item?.surname}`}
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
                      placeholder="start"
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
                    <label>Select location</label>
                    <select
                      className="w-full"
                      name="selectColor"
                      id="color"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    >
                      <option value="">Choose location...</option>
                      {locationData
                        ? locationData?.map((item) => (
                            <option value={item.location} key={item.location}>
                              {`${item.location}`}
                            </option>
                          ))
                        : ""}
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
                      <option value="">Choose color...</option>
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
                  <button onClick={handleCancel}>CANCEL</button>
                  <button onClick={handleSubmit} className="btn-2">
                    SAVE
                  </button>
                </div>
                <div className="btn-group  btn-group-lg">
                  <button onClick={handleDelete} className="deleteBtn">
                    DELETE
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

export default UpdateGroupTimeModal;
